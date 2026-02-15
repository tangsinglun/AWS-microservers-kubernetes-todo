import { S3Client, PutObjectCommand, GetObjectCommand  } from '@aws-sdk/client-s3';
import { fromIni } from '@aws-sdk/credential-providers';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, QueryCommand, PutCommand, DeleteCommand, UpdateCommand, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { TodoItem } from '../controllers/v0/todo/models/TodoItem'
import { createLogger } from '../utils/logger'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import * as c from '../config/config';
const logger = createLogger('todoAccess')
const config = c.config.dev
const Jimp = require("Jimp")


//Configure AWS
//var credentials = new S3Client.SharedIniFileCredentials({profile: config.aws_profile});

const s3 = new S3Client({
  region: config.aws_region,
  credentials: fromIni({ profile: config.aws_profile})
});

const client = new DynamoDBClient({ region: config.aws_region});

const documentClient = DynamoDBDocumentClient.from(client);



// S3Client.config.credentials = credentials;
// S3Client.config.update({
//   region: config.aws_region,
// });


export class TodoAccess {

  constructor(

    // readonly documentClient = new s3.DynamoDB.DocumentClient({apiVersion: '2012-08-10'}),
    //Retrieve the Evironment Variables For all the Resources
    private readonly userIndex: any = config.userid_index,
    private readonly userTodosTable: any = config.users_todo_table,
    private readonly bucketName: any = config.todos_s3_bucket,
    private readonly expires: any = config.signed_url_expiration,        
    private readonly region: any = config.aws_region,
  ) {}

  async getUserTodos(): Promise<TodoItem[]> {

    // var params: any = {
    //   TableName: this.userTodosTable,  
    //   IndexName: this.userIndex
    // };

    // const documentClient = this.documentClient

    try {


              // const result = await documentClient.send(new QueryCommand(params));
              // console.log('Query result:', result.Items);

              const command = new ScanCommand({
                TableName: this.userTodosTable
              });

              const response = await documentClient.send(command);
              console.log('Items:', response.Items);
              
              // const promise =  new Promise( async function(resolve, reject) {
              //       try {
              //               await documentClient.query(params, function(err: any, data: any) {
              //               if (err) {
              //                   console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
              //                   reject(JSON.stringify({error: err.message}));
              //               } else {
              //                   console.log("Query succeeded.");
              //                   resolve(data);
              //               }
              //           }); 
              //         }
              //         catch(err: any) {
              //           throw new Error(err.message);
              //         }
              // });

              return await response.Items as TodoItem[];

    }
    catch (err: any) {
      throw new Error(err.message);
    }

  }  


  async createTodo(todo: TodoItem): Promise<TodoItem> {     
    
    const params: any = {
      TableName: this.userTodosTable,
      Item: todo,
      ReturnValues: "NONE"
    }

    // const documentClient = this.documentClient

    // const promise =  new Promise( function(resolve: any, reject) {
    //   documentClient.put(params, function(err: any, data: any) {
    //     if (err) {
    //         logger.info("Unable to add item. Error JSON:");
    //         reject(err.message);
    //     }
    //     resolve();
    //   });
    // });

    // await promise;

    await documentClient.send(new PutCommand(params));
    console.log('Put success');
    return todo as TodoItem;
  }

  async deleteUserTodo(todoId: string, userId: string) {

    //Parameters For deleting the User Todo'S Records.
    var params: any = {
      TableName:this.userTodosTable,
      Key:{
          "userId": userId,
          "todoId": todoId        
      },
      ReturnValues: "NONE"
    };

    // const documentClient = this.documentClient

    // await new Promise( function(resolve, reject) {
    //                   documentClient.delete(params, function(err: any, data: any) {
    //                         if (err) {
    //                             console.log(err);
    //                             throw new Error(err.message)
    //                         }
    //                       }); 
    //                   });

    await documentClient.send(new DeleteCommand(params));
    console.log('Delete success');


  }

  
  async getUploadUrl(todoId: string): Promise<string> {

    //This part generates the presigned URL for the S3 Bucket.
    // const s3 = new S3Client.S3({
    //   region: this.region,
    //   signatureVersion: 'v4',
    //   params: {Bucket: this.bucketName}
    // });    

    // var params = {Bucket: this.bucketName, Key: todoId, Expires: parseInt(this.expires)};

    // logger.info('UrlUpload Param', params)

    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: todoId
    });


    const signedUrl = await getSignedUrl(s3, command, { expiresIn: parseInt(this.expires) }); // expires in 1 hour

    console.log('Signed URL:', signedUrl);

    
    return signedUrl
 
  }


  async updateUserTodo(todo: TodoItem): Promise<string> {

    const params = {
      TableName: this.userTodosTable,
      Key: { userId : todo.userId, todoId : todo.todoId},
      UpdateExpression: 'set #name = :x , dueDate = :u , done = :d ',
      ExpressionAttributeNames: {'#name' : 'name'},
      ExpressionAttributeValues: {
        ':x' : todo.name,
        ':u' : todo.dueDate,
        ':d' : todo.done,
      }
    };


    // var params = {
    //   TableName: this.userTodosTable,
    //   Key: { userId : todo.userId, todoId : todo.todoId},
    //   UpdateExpression: 'set #name = :x , dueDate = :u , done = :d ',
    //   ExpressionAttributeNames: {'#name' : 'name'},
    //   ExpressionAttributeValues: {
    //     ':x' : todo.name,
    //     ':u' : todo.dueDate,
    //     ':d' : todo.done,
    //   },
    //   ReturnValues: "ALL_NEW"
    // };

    let updateItem: any;

    // const documentClient = this.documentClient
    
    try {
      // const promise =  new Promise( function(resolve: any, reject) {
      //                   documentClient.update(params, function(err: any, data: any) {
      //                         if (err) {
      //                             console.log(err);
      //                             reject(JSON.stringify({error: err.message}));
      //                         }
      //                         else { 
      //                             console.log("Todo Item Successfully commited", data);
      //                             resolve(JSON.stringify(data));
      //                         }
      //                       }); 
      //                   });

      //   updateItem = await promise;

      await documentClient.send(new UpdateCommand(params));
      console.log('Update success');        
    } catch (error: any) {
        throw new Error(error.message);
    }

    return updateItem;

  }

  async processTodoImage(todoId: String) {

    logger.info('Processing S3 item with key: ', {todoId})

    //This retrieve the image from the S3 bucket.
    
    // const s3 = new S3Client.S3({
    //   region: this.region,
    //   signatureVersion: 'v4',
    // });  
  
    //The image retrieve is a image Buffer.

    const command = new GetObjectCommand({
      Bucket: config.todos_s3_bucket,
      Key: `${todoId}`
    });

    const response = await s3.send(command);


      // const promise =  new Promise( function(resolve: any, reject) {
      //   s3.getObject({
      //                 Bucket: config.todos_s3_bucket,
      //                 Key: `${todoId}`,
      //               }, function (err: any, data: any) {
      //               if (err) {
      //                 console.log(err);
      //                 reject(JSON.stringify({error: err.message}));
      //               }
      //               else { 
      //                   console.log("Successfully Get Image From s3 Bucket", data);
      //                   resolve(data);
      //               }
      //             });
      //           });
  
    const body: any = response

    console.log("Second Parms")

    const image = await Jimp.read(body);
    image.resize({ width: 150, height: 150 });
    const buffer = await image.getBufferAsync(Jimp.MIME_PNG); 

    const params = {
      Bucket: config.thumbnails_s3_bucket,
      Key: `${todoId}.jpeg`,
      Body: buffer
    };

    await s3.send(new PutObjectCommand(params));
    console.log('Upload success');

    // s3.putObject({
    //           Bucket: config.thumbnails_s3_bucket,
    //           Key: `${todoId}.jpeg`,
    //           Body: buffer
    //           }, function (err: any, data: any) {
    //                   if (err) {
    //                     console.log(err);
    //                     console.log(JSON.stringify({error: err.message}));
    //                   }
    //                   else { 
    //                       console.log("Successfully Put Image to s3 Thumbnail Bucket", data);
    //                   }
    //         });

    // Jimp.read(body)
    // .then(image => {
    //   // Do stuff with the image.
    //   return image.resize(150, Jimp.AUTO)
    // }).then(resizeImg => {
    //       resizeImg.getBuffer(Jimp.MIME_JPEG, (convertedBuffer)=>{
    //               const promise2 =  new Promise( function(resolve, reject) {
    //                 s3.putObject({
    //                               Bucket: config.thumbnails_s3_bucket,
    //                               Key: `${todoId}.jpeg`,
    //                               Body: convertedBuffer
    //                              }, function (err: any, data: any) {
    //                                       if (err) {
    //                                         console.log(err);
    //                                         reject(JSON.stringify({error: err.message}));
    //                                       }
    //                                       else { 
    //                                           console.log("Successfully Put Image to s3 Thumbnail Bucket", data);
    //                                       }
    //                             });
    //               });          
    //       })            
    // })
    // .catch(err => {
    //     throw new Error(err.message);
    // });

  
  }
  }



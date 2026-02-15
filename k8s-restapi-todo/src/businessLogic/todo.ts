import { TodoItem } from '../controllers/v0/todo/models/TodoItem'
import { TodoAccess } from '../dataLayer/todosAccess'
// import { parseUserId } from '../auth/utils'
import { TodoUpdate } from '../controllers/v0/todo/models/TodoUpdate'

const todoAccess = new TodoAccess()

export async function getUserTodos(): Promise<TodoItem[]> {
  //Extract the UserId From the jwt Token
  // const userId = parseUserId(jwtToken)
  //Return all the User's Todo Results 
  return await todoAccess.getUserTodos()
}

export async function deleteUserTodos(todoId: string, userId: string) {
  //Extract the UserId From the jwt Token
  // const userId = parseUserId(jwtToken)
  await todoAccess.deleteUserTodo(todoId, userId)
}


export async function processImage(Key: string) {  
  await todoAccess.processTodoImage(Key)  
}

export async function createTodo(
  todo: TodoItem
): Promise<TodoItem> {
  return await todoAccess.createTodo(todo)
}


export async function updateUserTodo(
  todo: TodoItem
): Promise<string> {
  return await todoAccess.updateUserTodo(todo)
}

export async function getUploadUrl(todoId: string): Promise<string> {

  //Return the pre-signed Upload URL
  return await todoAccess.getUploadUrl(todoId)

}
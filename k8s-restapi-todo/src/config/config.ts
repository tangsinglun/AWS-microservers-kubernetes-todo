export const config = {
  "dev": {
    "users_todo_table": process.env.USERS_TODO_TABLE,
    "userid_index": process.env.USERID_INDEX,
    "todos_s3_bucket": process.env.TODOS_S3_BUCKET,
    "thumbnails_s3_bucket": process.env.TODOS_THUMBNAILS_S3_BUCKET,
    "signed_url_expiration": process.env.SIGNED_URL_EXPIRATION,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "todo_version": process.env.TODO_VERSION, 
    "url": process.env.URL    
  },
  "prod": {
    "todos_table": "",
    "users_todo_table": "",
    "userid_index": "",
    "todos_s3_bucket": "",
    "thumbnails_s3_bucket": "",
    "signed_url_expiration": "",
    "bucket_region": "",
    "aws_reigion": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "url": process.env.URL  
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }  
}

//Andrew
// export  const cert = `-----BEGIN CERTIFICATE-----
// MIIDBzCCAe+gAwIBAgIJGlE3uYNmrfqmMA0GCSqGSIb3DQEBCwUAMCExHzAdBgNV
// BAMTFmRldi1scHhsNm9hdC5hdXRoMC5jb20wHhcNMjAwMzI5MTUxMzMwWhcNMzMx
// MjA2MTUxMzMwWjAhMR8wHQYDVQQDExZkZXYtbHB4bDZvYXQuYXV0aDAuY29tMIIB
// IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4pFHfG18lJmWVcEAyj0U+/7u
// rSTca98ew2nlpqiivDSRij17LvV6dtwmKPc2T9sx6+jYXQ5AN4UUP1wY5uzEh4i0
// qwYE1pw2bo47a+HcMf3Ny1i9VzieQtJRl+8nOiUaaA7JJ+90KIU1S8SQNWBw8b97
// qrc7dLCCojOobxufgrVyi5svR1FCzukmMxepugOw51RaSc6Qsn8Xa20pRuDW8R2T
// Cdnd9oBBJuRNEf0WtbUD1TsB3M1ZqeYsm82SkDHrwWVg09CMJ5Upe7u9rbqAECsc
// 1yWkO6pTg3NsPrYK5Znnj0ywgTl9GDZ3tTqyf/6wBnJLaXhUB2/zUWJzaMBr/wID
// AQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBSdq/lKvVzjqKvFPF42
// bHozBKKTkTAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBAH9hInm2
// RB8hqUHK27xLmrojU2plbSuTP46emQdouFb7g4tBoj8P3ov0sVLvcD1Eun22HojD
// +AkrZgOXQRR1X0wPwnMFg4F7dDe0RAJoeVVoZB9MqcXNK/T38MBsncKsDmtvKJ8S
// p/zvqzGgrubQXomrDRJhcdE56/mnArgeJ5mw/88AB+8H/p1/KKFPVB1us+u93geV
// viVLwuFM64P7W11nM0G/ezWoztTo+nLTTekP9LseBuhIaHqP5XeTuwJpIs39+gif
// hjWw8pKIbywJ7DFiOL4Pg9NlRW6p44EqLLDyZOQULVwxqsRBosRXnSbfmiUykyPj
// pUu6Jvrs+FnZLlA=
// -----END CERTIFICATE-----`

//Alan Auth0 Secrete Cert.
export  const cert = `-----BEGIN CERTIFICATE-----
MIIDHTCCAgWgAwIBAgIJFO3GoM7Rc2KXMA0GCSqGSIb3DQEBCwUAMCwxKjAoBgNV
BAMTIWRldi12aHYzemN1c2R5ZDM0dmFsLnVzLmF1dGgwLmNvbTAeFw0yNTExMDQw
MjI3NDBaFw0zOTA3MTQwMjI3NDBaMCwxKjAoBgNVBAMTIWRldi12aHYzemN1c2R5
ZDM0dmFsLnVzLmF1dGgwLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC
ggEBAKoyFTbab6NKetGnfD4MrM954wvVJmYBRYplEDWsT9AbMTE5vpd5PVjYl2C+
Sv1j/yZfO8xWwNikhbqiV11aaV3zUp1xSQkRnhqTvESHx8wszV0WYE7j4BzZMuSd
vXrsyw2/b9Bx4htZqiI+pwRAo+0d36zlNZ5UUR/QjojgdaiwMdzxzAasFA3RFHCj
KXbbHAOSNlIq9IuLSh6/dkD//5YKNOsuNXFftSWybXaABssq6PE4Oc6L7HN7A4ES
tToLR3RsOrcrSa+TyUvT9vn/r5pVAoOQQWHjdM/VoA+80n0k5daaMsIn1ZVb4+xY
HT637e6/dvh+si2rU7WsQabz9psCAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd
BgNVHQ4EFgQU4G9HHwimTjgNQFKhg/ye4qVfeYcwDgYDVR0PAQH/BAQDAgKEMA0G
CSqGSIb3DQEBCwUAA4IBAQAycNAXJvDTlRevzo4XEuRryp+JCaXAE7jKLaBDcG0q
sVCr9KsS5X6NR/rt82GrCrYgNGFVWkdj4sCL6+J8vZVtN13ePv/ugy+3BV8/ZA07
mwOLP7A5npdw482MFHYUOWTS05ZejXnHmcCxtalL9wncLjCN35fj54sPuQ+uU6UI
74F527dLc1IXFqF2y9Zq1Mq09dB2tCHpkDn1afJ4hrda9A61xctEIdTemoIYQ6zD
XoyUCNh+hlOY2Quw0xLr7EsXFhmYiNN3WULMB7SablZqRNqKfk6X7hx0fKqwrXoU
K+11XmXYbw6EzkDL87vPS7iI+mHKHvnUlLAc0eVnRz1U
-----END CERTIFICATE-----`

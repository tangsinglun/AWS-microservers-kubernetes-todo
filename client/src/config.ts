//Configuration setting for API Endpoints
//Please aware that Endpoints may Varies due to the Platform
//user is using. This system supports Version Controling. For example if
//user selects Version 1, PLEASE MODIFY THE v0 FLAG at the end of the API Endpoint.
//For exapmle Version 1 Endpoint will be http://localhost:3000/api/v1

export const apiEndpoint = `http://localhost:8080/api/v0`

//Alan Added For Testing on Oracle Virtual ToolBox
//export const apiEndpoint = `http://192.168.99.103:8080/api/v0`

//Andrew
// export const authConfig = {
//   // TODO: Create an Auth0 application and copy values from it into this map
//   domain: 'dev-lpxl6oat.auth0.com',            // Auth0 domain
//   clientId: 'rxGPps1mDFEGXC4yohdv0veZS2xoTJ9u',          // Auth0 client id
//   callbackUrl: 'http://localhost:3000/callback' 
// }


//Alan Added For Setting Auth0 Config on Alan's Account
export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-vhv3zcusdyd34val.us.auth0.com',            // Auth0 domain
  clientId: 'rQixMQOdK1MR6tCTfYwVq8swlwaVrkT5',          // Auth0 client id
  callbackUrl: `http://localhost:3000/callback`
}

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

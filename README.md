# Experss Parser API


# Technology Stack
Node.js
TypeScript
Express


# Functionality and Design
 The application must expose restful endpoints that will parse data (passed in the request body) and return the value back to the client. The API will have to two versions and depending on the version endpoint, the parsing of the data will return a different value back to the client. Use Typescript interfaces so the code assumes the design / object properties


# Endpoints
  http://localhost:3000/api/v1/parse
  http://localhost:3000/api/v2/parse


### Request and Response after parsing the API 

  1. The first API version, after the parsing or extraction, the zero strings are not removed or no formatting of data will be made. 
  Please notice the trailing zeroes remain in the field values.

  ```
  Response Data = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" }}
  ``` 

  ![api v1](http://localhost:3000/api/v1/parse)

  2. The second API version, after the parsing or extraction, it will take extra steps by removing the trailing zeroes and formatting the client-id by inserting a hyphen character after the third character. Please notice the trailing zeroes were trimmed to produce more intuitive values.

  ```
  Response Data =  { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }
  ``` 
  ![api v2](http://localhost:3000/api/v2/parse)






# Introduction

This open sourced api bootcamp covers the basic CRUD operations of any application.

```http
GET /
```
| Parameter | Type | Description | Curl |
| :--- | :--- | :--- | :--- |
| `none` |  | Enlists list of all users | curl -s http://dev-api-bootcamp.herokuapp.com/ orsymbol json_pp |


```http
GET /user/type/:type
```
| Parameter | Type | Description | Curl |
| :--- | :--- | :--- | :--- |
| `/:type` | `String` | To get all users having certain type | curl -s http://dev-api-bootcamp.herokuapp.com/user/type/pro |


```http
GET /user/:_id
```
| Parameter | Type | Description | Curl |
| :--- | :--- | :--- | :--- |
| `/id` | `String` | To get user having certain id | curl -s https://dev-api-bootcamp.herokuapp.com/user/61113a4be190e9c086e42f7e |


```http
POST /user/new
```
| Parameter | Type | Description | Curl |
| :--- | :--- | :--- |  :--- |
| `HTTP body` | `User Object` | Creates a user | curl -i -X POST -H 'Content-Type: application/json' -d '{"userData": {"name": "Temp", "phno": "1111221111", "userType": "pro", "email": "temp@temp.com"} }' http://dev-api-bootcamp.herokuapp.com/user/new |

```http
PUT /user/update/:_id
```
| Parameter | Type | Description | Curl |
| :--- | :--- | :--- | :--- |
| `HTTP body` | `User Object` | To update user having certain id | curl -i -X PUT -H 'Content-Type: application/json' -d '{"userData": {"name": "___", "phno": "___", "userType": "___", "email": "___@___.___"} }' http://dev-api-bootcamp.herokuapp.com/user/update/61113932e190e9c086e42f79 |


```http
DELETE /user/delete/:_id
```
| Parameter | Type | Description | Curl |
| :--- | :--- | :--- |  :--- |
| `/:id` | `String` | To delete user having certain id | curl -i -X DELETE https://dev-api-bootcamp.herokuapp.com/user/delete/___
 |


```http
DELETE /user/delete/:userType
```
| Parameter | Type | Description | Curl |
| :--- | :--- | :--- |  :--- |
| `/:userType` | `String` | To delete user having certain type | curl -i -X DELETE https://dev-api-bootcamp.herokuapp.com/user/delete/pro |
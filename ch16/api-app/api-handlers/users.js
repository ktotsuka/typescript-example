"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHandler = exports.userExists = exports.postHandler = void 0;
const db_functions_1 = require("./db-functions");
const postHandler = async (event, context) => {
    console.log("Kenji: in postHandler");
    let response = {};
    try {
        let bodyJson = JSON.parse(event.body);
        let username = bodyJson.username;
        let password = bodyJson.password;
        console.log("Kenji: username: " + username + ", password: " + password);
        await db_functions_1.dynamoDbClient.putItem({
            "TableName": "UserTable",
            "Item": {
                "username": {
                    "S": username
                },
                "password": {
                    "S": password
                }
            },
            "ConditionExpression": "attribute_not_exists(#2d140)",
            "ExpressionAttributeNames": {
                "#2d140": "username"
            }
        }).promise();
        console.log("Kenji: successfully put item");
        response = {
            'statusCode': 200,
            'body': `User created`
        };
    }
    catch (err) {
        console.log("Kenji: user post error");
        console.log(err);
        response = {
            'statusCode': err.statusCode,
            'body': `${err.message} : an item with this id already exists`,
        };
    }
    return response;
};
exports.postHandler = postHandler;
async function userExists(username) {
    var _a;
    const scanOutput = await db_functions_1.dynamoDbClient.scan({
        "TableName": "UserTable",
        "ConsistentRead": false,
        "FilterExpression": "#249b0 = :249b0",
        "ExpressionAttributeValues": {
            ":249b0": {
                "S": `${username}`
            }
        },
        "ExpressionAttributeNames": {
            "#249b0": "username"
        }
    }).promise();
    if (scanOutput.Items && ((_a = scanOutput.Items) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.userExists = userExists;
const getHandler = async (event, context) => {
    let response = {};
    try {
        let userId = event.pathParameters.userId;
        let isUser = await userExists(userId);
        if (isUser) {
            response = {
                'statusCode': 200,
                'body': `User exists`
            };
        }
        else {
            response = {
                'statusCode': 404,
                'body': `Not found`
            };
        }
    }
    catch (err) {
        console.log(err);
        response = {
            'statusCode': err.statusCode,
            'body': `${err.message} : an item with this id already exists`
        };
    }
    return response;
};
exports.getHandler = getHandler;

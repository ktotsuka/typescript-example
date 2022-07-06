import {
    APIGatewayProxyEvent,
    Context
} from 'aws-lambda';
import { dynamoDbClient } from './db-functions';

export const postHandler = async (
    event: APIGatewayProxyEvent, context: Context
) => {
    console.log("Kenji: in postHandler");

    let response = {};
    try {
        let bodyJson = JSON.parse(<string>event.body);

        let username: string = bodyJson.username;
        let password: string = bodyJson.password;

        console.log("Kenji: username: " + username + ", password: " + password);

        await dynamoDbClient.putItem({
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
        }
    } catch (err: any) {
        console.log("Kenji: user post error");
        console.log(err);
        response = {
            'statusCode': err.statusCode,
            'body': `${err.message} : an item with this id already exists`,
        }
    }

    return response;
};

export async function userExists(
    username: string
): Promise<boolean> {
    const scanOutput = await dynamoDbClient.scan({
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

    if (scanOutput.Items && scanOutput.Items?.length > 0) {
        return true;
    } else {
        return false;
    }
}

export const getHandler = async (
    event: APIGatewayProxyEvent, context: Context
) => {
    let response = {};
    try {
        let userId = (<any>event.pathParameters).userId;

        let isUser = await userExists(userId);

        if (isUser) {
            response = {
                'statusCode': 200,
                'body': `User exists`
            }
        } else {
            response = {
                'statusCode': 404,
                'body': `Not found`
            }
        }
    } catch (err: any) {
        console.log(err);
        response = {
            'statusCode': err.statusCode,
            'body': `${err.message} : an item with this id already exists`
        }
    }

    return response;
};
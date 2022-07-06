import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    Handler,
    Context
} from 'aws-lambda';

import { dynamoDbClient } from "./db-functions";
import { handlePutItemError, handleScanError } from "./error-handlers";
import { loadProducts } from "./insert_products";

import { getProduct, getProductScanParameters } from './product-helper';
export const getHandler = async (
    event: APIGatewayProxyEvent,
    context: Context
) => {
    let response = {};
    try {

        let scanResults =
            await executeScan(
                dynamoDbClient,
                getProductScanParameters()
            );
        let outputArray = [];

        if (scanResults?.Items) {
            for (let item of scanResults.Items) {
                outputArray.push(getProduct(item));

            }
        }

        console.log(`outputArray.length : ${outputArray.length}`);
        response = {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
            },
            'body': JSON.stringify(outputArray),
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};

async function executeScan(dynamoDbClient: AWS.DynamoDB, scanInput: AWS.DynamoDB.ScanInput) {
    // Call DynamoDB's scan API
    try {
        const scanOutput = await dynamoDbClient.scan(scanInput).promise();
        console.info('Scan successful.');
        // Handle scanOutput
        return scanOutput;
    } catch (err: any) {
        handleScanError(err);
    }
}

export const postHandler = async (
    event: APIGatewayProxyEvent, context: Context
) => {
    console.log("Kenji: in product postHandler");

    let response = {};
    try {       

        await loadProducts();

        console.log("Kenji: successfully put item");

        response = {
            'statusCode': 200,
            'body': `Products created`
        }
    } catch (err: any) {
        console.log("Kenji: product post error");

        console.log(err);
        response = {
            'statusCode': err.statusCode,
            'body': `product post error`,
        }
    }

    return response;
};

export const getSingleProductHandler = async (event: APIGatewayProxyEvent, context: Context) => {
    let response = {};

    try {

        let productId = (<any>event.pathParameters).productId;

        console.log(`event.path : ${event.path}`);
        console.log(`event.pathParameters.productId : ${(<any>event.pathParameters).productId}`);

        let scanResults = await executeScan(
            dynamoDbClient,
            getProductScanParameters(productId)
        );
        let outputProduct = {};

        if (scanResults?.Items) {
            for (let item of scanResults?.Items) {
                outputProduct = getProduct(item);
            }
        }

        response = {
            'statusCode': 200,
            'body': JSON.stringify(outputProduct),
            'headers': {
                "Access-Control-Allow-Origin": "*"
            }
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
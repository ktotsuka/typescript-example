"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleProductHandler = exports.postHandler = exports.getHandler = void 0;
const db_functions_1 = require("./db-functions");
const error_handlers_1 = require("./error-handlers");
const insert_products_1 = require("./insert_products");
const product_helper_1 = require("./product-helper");
const getHandler = async (event, context) => {
    let response = {};
    try {
        let scanResults = await executeScan(db_functions_1.dynamoDbClient, (0, product_helper_1.getProductScanParameters)());
        let outputArray = [];
        if (scanResults === null || scanResults === void 0 ? void 0 : scanResults.Items) {
            for (let item of scanResults.Items) {
                outputArray.push((0, product_helper_1.getProduct)(item));
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
        };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
};
exports.getHandler = getHandler;
async function executeScan(dynamoDbClient, scanInput) {
    // Call DynamoDB's scan API
    try {
        const scanOutput = await dynamoDbClient.scan(scanInput).promise();
        console.info('Scan successful.');
        // Handle scanOutput
        return scanOutput;
    }
    catch (err) {
        (0, error_handlers_1.handleScanError)(err);
    }
}
const postHandler = async (event, context) => {
    console.log("Kenji: in product postHandler");
    let response = {};
    try {
        await (0, insert_products_1.loadProducts)();
        console.log("Kenji: successfully put item");
        response = {
            'statusCode': 200,
            'body': `Products created`
        };
    }
    catch (err) {
        console.log("Kenji: product post error");
        console.log(err);
        response = {
            'statusCode': err.statusCode,
            'body': `product post error`,
        };
    }
    return response;
};
exports.postHandler = postHandler;
const getSingleProductHandler = async (event, context) => {
    let response = {};
    try {
        let productId = event.pathParameters.productId;
        console.log(`event.path : ${event.path}`);
        console.log(`event.pathParameters.productId : ${event.pathParameters.productId}`);
        let scanResults = await executeScan(db_functions_1.dynamoDbClient, (0, product_helper_1.getProductScanParameters)(productId));
        let outputProduct = {};
        if (scanResults === null || scanResults === void 0 ? void 0 : scanResults.Items) {
            for (let item of scanResults === null || scanResults === void 0 ? void 0 : scanResults.Items) {
                outputProduct = (0, product_helper_1.getProduct)(item);
            }
        }
        response = {
            'statusCode': 200,
            'body': JSON.stringify(outputProduct),
            'headers': {
                "Access-Control-Allow-Origin": "*"
            }
        };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
};
exports.getSingleProductHandler = getSingleProductHandler;

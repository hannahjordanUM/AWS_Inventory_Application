const AWS = require('aws-sdk');
AWS.config.update( {
  region: 'us-west-2'
});
// const {DynamoDB} = require('@aws-sdk/client-dynamodb');

const dynamodb = new AWS.DynamoDB.DocumentClient();
const dynamodbTableName = 'Inventory';
const itemPath = '/item';
const itemsPath = '/items';

exports.handler = async function(event) {
  console.log('Request event: ', event);
  let response;
  switch(true) {
    case event.httpMethod === 'GET' && event.path === itemPath:
      response = await getProduct(event.queryStringParameters.item);
      break;
    case event.httpMethod === 'GET' && event.path === itemsPath:
      response = await getProducts();
      break;
    case event.httpMethod === 'POST' && event.path === itemPath:
      response = await saveProduct(JSON.parse(event.body));
      break;
    case event.httpMethod === 'PATCH' && event.path === itemPath:
      const requestBody = JSON.parse(event.body);
      response = await modifyProduct(requestBody.item, requestBody.updateKey, requestBody.updateValue);
       break;
    case event.httpMethod === 'DELETE' && event.path === itemPath:
      response = await deleteProduct(JSON.parse(event.body).item);
      break;
  }
  return response;
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
}


async function getProduct(item){
  const params = {
    TableName: dynamodbTableName,
    Key: {
      'item': item
    }
  }
  return await dynamodb.get(params).promise().then((response) => {
    return buildResponse(200, response.Item);
  }, (error) => {
    console.log('Temporary log: ', error);
  });
}

async function getProducts() {
  const params = {
    TableName: dynamodbTableName
  }
  const allProducts = await scanDynamoRecords(params, []);
  const body = {
    items: allProducts
  }
  return buildResponse(200, body);
}

async function scanDynamoRecords(scanParams, itemArray) {
  try {
    const dynamoData = await dynamodb.scan(scanParams);
    itemArray = itemArray.concat(dynamoData.Items);
    if(dynamoData.LastEvaluateKey) {
      scanParams.ExclusiveStartKey = dynamo.LastEvaluateKey;
      return await scanDynamoRecords(scanParams, itemArray);
    }
    return itemArray;
  } catch(error) {
    console.error('This is the error: ', error);
  }
}

async function saveProduct(requestBody) {
  const params = {
    TableName: dynamodbTableName,
    Item: requestBody
  }
  return await dynamo.put(params).promise().then(() => {
    const body = {
      Operation: 'SAVE',
      Message: 'SUCCESS',
      Item: requestBody
    }
    return buildResponse(200, body);
  }, (error) => {
    console.error('Here is the error: error');
  })
}

async function modifyProduct(item, updateKey, updateValue) {
  const params = {
    TableName: dynamodbTableName,
    Key: {
      'item': item
    },
    UpdateExpression: 'set ${updateKey} = :value', 
    ExpressionAttributeValues: {
      ':value': updateValue
    },
    ReturnValues: 'UPDATED_NEW'
  }
  return await dynamodb.update(params).promise.then((response) => {
    const body = {
      Operation: 'UPDATE',
      Message: 'SUCCESS',
      Item: response
    }
    return buildResponse(200, body);
  }, (error) => {
    console.error('This is the error', error);
  })
}

async function deleteProduct(product) {
  const params = {
    TableName: dynamodbTableName,
    Key: {
      'item': product
    },
    ReturnValues: 'ALL_OLD'
  }
  return await dynamodb.delete(params).promise().then((response) => {
    const body = {
      Operation: 'DELETE',
      Message: 'SUCCESS',
      Item: response
    }
    return buildResponse(200, body);

  }, (error) => {
    console.error('This is the error: ', error);
  })
}



// var tableParams = {
//     TableName : "Inventory"
// };
// async function run() {
//       try {
//            const data = await dymamoDB.listTables(tableParams);
//            console.log("Success", data);
//       } 
//       catch (err) {
//            console.log("Error", err);
//       }
// };
// run(); 
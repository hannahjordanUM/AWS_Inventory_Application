// import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
// import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

// const REGION = _config.cognito.region;
// const IDENTITY_POOL_ID = _config.cognito.userPoolId; // An Amazon Cognito Identity Pool ID.

// // Create an Amazon DynaomDB service client object.
// const dynamoClient = new DynamoDBClient({
//   region: REGION,
//   credentials: fromCognitoIdentityPool({
//     client: new CognitoIdentityClient({ region: REGION }),
//     identityPoolId: IDENTITY_POOL_ID,
//   }),
// });

// export { dynamoClient };

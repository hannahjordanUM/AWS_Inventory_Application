// import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
// import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
// import { SNSClient } from "@aws-sdk/client-sns";

// const REGION = "REGION";
// const IDENTITY_POOL_ID = "IDENTITY_POOL_ID"; // An Amazon Cognito Identity Pool ID.

// // Create an Amazon Comprehend service client object.
// const snsClient = new SNSClient({
//   region: REGION,
//   credentials: fromCognitoIdentityPool({
//     client: new CognitoIdentityClient({ region: REGION }),
//     identityPoolId: IDENTITY_POOL_ID,
//   }),
// });

// export { snsClient };

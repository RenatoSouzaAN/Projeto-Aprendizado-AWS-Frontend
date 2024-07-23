const AWS = require("aws-sdk");
require('dotenv').config();

const config = {
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};

const dynamoCredentials = new AWS.DynamoDB.DocumentClient(config);

module.exports = dynamoCredentials;

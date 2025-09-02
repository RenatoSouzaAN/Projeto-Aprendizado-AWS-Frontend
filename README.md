# AWS-Project (AWS-Lambda + SQS + DynamoDB + NodeJS)
Learning project where a POST API in NodeJS receives a payload of a transaction (idempotencyId, amount, type: credit /debit).

This route executes a function that puts the transaction into an AWS SQS (queue), using the AWS SDK.

Alongside, an AWS Lambda function connected to this SQS picks up each message and saves it into an AWS DynamoDB database.

A test script was created to generate 100 different transactions and make the POST request.

A simple screen was made using Next.JS that displays the transactions saved in DynamoDB, through a GET route.


Link to the back-end: https://github.com/RenatoSouzaAN/Projeto-Aprendizado-AWS-Backend

## Front-end part of the project

Setup

Follow the steps below to configure and run the project.
Prerequisites

    Node.js and npm installed on your machine
    AWS account with credentials (access key ID, secret access key)
    AWS CLI installed (to configure DynamoDB and SQS)

Installation

    Clone the repository:

    bash

git clone https://github.com/RenatoSouzaAN/Projeto-Aprendizado-AWS-Frontend

Access the project directory:

bash

cd your-project

Install dependencies:

bash

npm install

Inside the aws.js file, put your AWS credentials as shown below:

config = 

    region: "your-aws-region"
    accessKeyId: "your-access-key-id"
    secretAccessKey: "your-secret-access-key"

    Replace your-aws-region, your-access-key-id, and your-secret-access-key with your real AWS credentials.


Running the Project

    Start the server:

    bash

    npm run dev

    Open your browser and go to http://localhost:3000 to view the Next.js application.

Project Structure

Briefly describe the structure of your project.

    /src: Contains the source code of the Next.js application.
        /app: Contains utility functions and components.
            /utils: Contains AWS configuration and utilities.
        /pages: Contains Next.js pages.

Features

List the main features of your project.

    API route to send transactions to AWS SQS
    AWS Lambda function to process SQS messages and save to DynamoDB
    Next.js application to display transactions from DynamoDB

Troubleshooting

If you encounter issues, follow these troubleshooting steps:

    Environment Variables: Check if the environment variables in the .env file are formatted correctly and loaded.

    Dependencies: Make sure all dependencies were installed using the npm install command.

    AWS Credentials: Verify your AWS credentials in the .env file.

    Loading Order: Ensure that the dotenv module is loaded at the beginning of your app's entry file.

Additional Information

There may be difficulties in integrating ".env" and AWS credentials, requiring the raw value to be placed in the "aws.js" file, located at "projeto-luiggi-front/next-dynamodb/src/app/utils".

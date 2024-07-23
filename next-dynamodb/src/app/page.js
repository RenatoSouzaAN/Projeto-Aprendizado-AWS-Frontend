"use client";

import { useEffect, useState } from "react";
import { DynamoDB } from "aws-sdk";
import dynamoCredentials from "./utils/aws.js";
import styles from "./page.module.css";

const AWS_REGION = "sa-east-1";
const dynamoDB = new DynamoDB.DocumentClient({ region: AWS_REGION });

const Page = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { Items } = await dynamoCredentials
          .scan({ TableName: "transactions" })
          .promise();

        const sortedTransactions = Items?.sort((a, b) => {
          const idA = parseInt(a.idempotencyId, 10);
          const idB = parseInt(b.idempotencyId, 10);

          return idA - idB;
        });

        setTransactions(sortedTransactions || []);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Transações no DynamoDB</h1>
      <ul className={styles.list}>
        {transactions.map((transactions, index, array) => (
          <li key={transactions.idempotencyId} className={styles.item}>
            <div className={styles.group}>
              <p className={styles.text}>ID: {transactions.idempotencyId}</p>
              <p className={styles.text}>Amount: {transactions.amount}</p>
              <p className={styles.text}>Type: {transactions.type}</p>
            </div>
            {index < array.length - 1 && <div className={styles.line}></div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;

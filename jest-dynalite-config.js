module.exports = {
  tables: [
    {
      TableName: 'pl-saas-api-local-MainModel-table',
      KeySchema: [{ AttributeName: 'pk', KeyType: 'HASH' }],
      AttributeDefinitions: [
        { AttributeName: 'pk', AttributeType: 'S' },
        { AttributeName: 'sk', AttributeType: 'S' },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      GlobalSecondaryIndexes: [
        // optional (list of GlobalSecondaryIndex)
        {
          IndexName: 'SK_GSI',
          KeySchema: [
            {
              // Required HASH type attribute
              AttributeName: 'sk',
              KeyType: 'HASH',
            },
          ],
          Projection: {
            // attributes to project into the index
            ProjectionType: 'ALL', // (ALL | KEYS_ONLY | INCLUDE)
          },
          ProvisionedThroughput: {
            // throughput to provision to the index
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      ],
      data: [],
    },
  ],
  basePort: 8000,
};

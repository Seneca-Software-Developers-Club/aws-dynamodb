// Load the AWS SDK for Node.js v3
const {DynamoDB} = require('@aws-sdk/client-dynamodb');


// Create the DynamoDB service object
var ddb = new DynamoDB({
  // The transformation for endpoint is not implemented.
  // Refer to UPGRADING.md on aws-sdk-js-v3 for changes needed.
  // Please create/upvote feature request on aws-sdk-js-codemod for endpoint.
  endpoint: 'http://localhost:8000',

  region: 'ca-central-1'
});


/*
// CREATE TABLE

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'CUSTOMER_ID',
      AttributeType: 'N'
    },
    {
      AttributeName: 'CUSTOMER_NAME',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'CUSTOMER_ID',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'CUSTOMER_NAME',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'CUSTOMER_LIST',
  StreamSpecification: {
    StreamEnabled: false
  }
};

// Call DynamoDB to create the table
ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});

*/


// List Tables

var params = {
};
ddb.listTables(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});





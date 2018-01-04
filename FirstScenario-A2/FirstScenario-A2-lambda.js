const ddb = AWS.DynamoDB();
exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'Students',
        Item: { id: 1, name: 'NAME', age: '25' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}
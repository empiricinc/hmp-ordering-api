/*eslint no-process-env:0*/

// Production specific configuration
// =================================
module.exports = {
    // Server IP
    ip: process.env.OPENSHIFT_NODEJS_IP
        || process.env.ip
        || undefined,

    // Server port
    port: process.env.OPENSHIFT_NODEJS_PORT
        || process.env.PORT
        || 8080,

    // MongoDB connection options
    mongo: {
        useMongoClient: true,
        uri: 'mongodb://admin:12Haseeb3@cluster0-shard-00-00-to6u8.mongodb.net:27017,cluster0-shard-00-01-to6u8.mongodb.net:27017,cluster0-shard-00-02-to6u8.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    }
};

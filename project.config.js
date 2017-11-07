const _merge = require('lodash.merge');
const NODE_ENV = process.env.NODE_ENV || 'development';

const configs = {
    base: {
        app: {
            name: 'Firehose'
        },
        firehose: {
            who: 'FlightAware',
            what: 'firehose',
            enabled: true,
            port: 1501,
            username: 'xxxxxxxxxxxxxx',
            apikey: 'XXXXXXXXXXXXXXXX',
            batchSize: 100,
            intervalInMls: 2500,
            timeoutInMls: 60000,
            ratelimitInSecs: 0,
            eventType: 'ground_position vehicle_position'
        },
        socket: {
            inactivityTimeout: 10000,
            checkFlagsInterval: 5000,  // too long to check flags?
            forceAbort: false,
            forceAbortTimeout: 15000,
            pitrCheck: true,
            pitrCheckCounterMax: 500,
            dataSampleCheck: true,
            dataSampleCheckCounterMax: 5000
        }
    },
    development: {
        firehose: {
            hostname: 'firehose-test.flightaware.com',
        }
    },
    staging: {
        firehose: {
            hostname: 'firehose.flightaware.com',
        }
    },
    prod: {
        firehose: {
            hostname: 'firehose.flightaware.com',
        }
    }
};

module.exports = _merge({}, configs.base, configs[NODE_ENV]);

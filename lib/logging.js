const fs = require('fs');
const winston = require('winston');
require('winston-daily-rotate-file');
winston.emitErrs = true;

const logDir = '../log';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const _logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            json: false,
            colorize: true
        }),
        new winston.transports.DailyRotateFile({
            level: 'info',
            json: false,
            filename: `${logDir}/flightawareGroundPositionsRaw.log`
        })
    ],
    exitOnError: true
});

_logger.stream = {
    write: function (message, encoding) {
        _logger.info(message);
    }
};

module.exports = {
    logger: _logger
};

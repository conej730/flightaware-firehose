FlightAware Firehose
====================

An example consumer of FlightAware's firehose data utilizing Node and its TLS socket
toolset.

## Start-Up Instructions
1. Install NodeJS (developed on 8)
2. npm install
3. npm start

When developing and on start the following exception might be thrown.
```
error: [GoodMop][TLS Data] Error connecting : Error: Maximum simultaneous connection limit for account exceeded.
```
In this case, edit the 'project.config.js' file and locate the 'development.firehose.hostname' value.
Remove '-test' from the value which turns the URI into the production URI.

## Notes
* An configurable interval starts up to check a few abort and reconnection flags. If the abort flag has been set (authorization failed, socket error thrown) the interval loop will check for it and the process will exit out. If the reconnection flag has been set (socket timeout) the interval loop will check for it and the socket will try and be reestablished.
* Winston logging is used along with its daily rotate mechanisms.
* A 'pitr' check (can be turned off via config) and logging outouts are in place to see if the socket is keeping up with data volume. The value itself is of no concern unless it starts to increment/climb and shows no signs of decrementing. If the value is climbing than it is assumed the socket isn't keeping up with the data and rate limiting might need to be configured when establishing the socket via the handshake command.

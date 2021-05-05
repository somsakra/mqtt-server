// https://github.com/moscajs/aedes
require("colors");
const aedes = require("aedes")();
const server = require("net").createServer(aedes.handle);
const mqttPort = 1883;

server.listen(mqttPort, function () {
  console.log(`🚀 MQQT Start on port  ${mqttPort}`.green.bold.underline);
});

const httpServer = require("http").createServer();
const ws = require("websocket-stream");
const wsPort = 8888;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(wsPort, function () {
  console.log(`🚀 WSX Start on port $${wsPort}`.cyan.bold.underline);
});

const WebSocket = require("ws");
const webSocketServer = new WebSocket.Server({ port: 3003 });
const backup = [];

webSocketServer.on("connection", (webSocket) => {
  webSocket.send(JSON.stringify(backup));
  webSocket.onmessage = (messageEvent) => {
    const message = messageEvent.data;
    backup.push(message);
    webSocketServer.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  };
});

module.exports = webSocketServer;

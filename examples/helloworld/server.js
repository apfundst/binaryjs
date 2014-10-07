var BinaryServer = require('../../').BinaryServer;
var fs = require('fs');

// Start Binary.js server
var server = BinaryServer({port: 9000});
// Wait for new user connections
server.on('connection', function(client){
  // Stream a flower as a hello!
  console.log("connection");
  var file = fs.createReadStream('/Users/drewpfundstein/Dropbox/Camera 1' + '/Vid4-Left.MP4');
  client.send(file); 
});


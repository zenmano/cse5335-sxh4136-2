var cool = require('cool-ascii-faces')
var express = require('express');
var app = express();
var redis = require("redis");
var client = redis.createClient("redis://h:pckgml6luumnh055drhb6b71nja@ec2-54-83-33-178.compute-1.amazonaws.com:16939");

client.on("error", function (err) {
    console.log("Error " + err);
});

    
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
  response.sendFile(__dirname + '/index.html');
  
});

app.get('/cool', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(data));
});

app.get('/imp', function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  
  str="";
  for (i=0;i<120;i++)
  {
      
      key = i;
      value = JSON.stringify(data.data[i]);
      encodedvalue= encodeURI(value);
      //str = str + i +" "+value+" "+encodedvalue+"<br>\n";
      client.setnx(""+key,encodedvalue);
  }
  
  for (i=0;i<120;i++)
  {
      
      key = ""+i;
      
      client.get(key, function (err, reply) {
            console.log(reply.toString()); // Will print `OK`
            
            var decodedvalue= decodeURI(reply.toString());
            str = str + i +" \n"+decodedvalue+"\n\n";
        });

      
      //str = str + i +" "+value+" "+encodedvalue+"<br>\n";
      
  }
  
  response.send(str);
});

app.get('/data/:id', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  var key =request.params.id;
  str=""
  client.get(key, function (err, reply) {
            console.log(reply.toString()); // Will print `OK`
            
            var decodedvalue= decodeURI(reply.toString());
            var data = JSON.parse(decodedvalue);
            data.id=key;
            str = str + key +" \n"+decodedvalue+"\n\n";
            response.send(data);
            
        });
        
  
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



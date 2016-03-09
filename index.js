var cool = require('cool-ascii-faces')
var express = require('express');
var app = express();

var data = {
"companies":[
{
"name":"Google",
"datacentre_count":21,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":1,
"location":"Mexia",
"PUE":1.9,
"latitude":31.6626,
"longitude":-96.4935
},
{
"datacentre_id":2,
"location":"Cincinnati",
"PUE":1.7,
"longitude":-84.5326,
"latitude":39.1088
},
{
"datacentre_id":3,
"location":"New Richmond",
"PUE":1.7,
"longitude":-87.0078,
"latitude":40.1903
},
{
"datacentre_id":4,
"location":"Paulsboro",
"PUE":1.7,
"longitude":-75.1954,
"latitude":39.8353
},
{
"datacentre_id":5,
"location":"Commerce",
"PUE":1.7,
"longitude":-95.9206,
"latitude":33.2844
}
]
},
{
"name":"IBM",
"datacentre_count":7,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":1,
"location":"Lafayette",
"PUE":1.9,
"latitude":40.4399,
"longitude":-86.8753
},
{
"datacentre_id":2,
"location":"Ridgefield Park",
"PUE":1.7,
"longitude":-74.0209,
"latitude":40.8536
}
]
},
{
"name":"Amazon",
"datacentre_count":31,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":1,
"location":"Olympia",
"PUE":1.9,
"latitude":46.9778,
"longitude":-122.8716
},
{
"datacentre_id":2,
"location":"Tacoma",
"PUE":1.7,
"longitude":-122.3621,
"latitude":47.2376
},
{
"datacentre_id":3,
"location":"Yakima",
"PUE":1.7,
"longitude":-120.5308,
"latitude":46.5982
},
{
"datacentre_id":4,
"location":"Silverdale",
"PUE":1.7,
"longitude":-122.7191,
"latitude":47.7244
},
{
"datacentre_id":5,
"location":"Canton",
"PUE":1.7,
"longitude":-81.3347,
"latitude":40.835
},
{
"datacentre_id":6,
"location":"Odessa",
"PUE":1.7,
"longitude":-102.3302,
"latitude":31.7255
},
{
"datacentre_id":7,
"location":"Lincoln",
"PUE":1.7,
"longitude":-71.3163,
"latitude":42.4282
},
{
"datacentre_id":8,
"location":"San Francisco",
"PUE":1.7,
"longitude":-122.4112,
"latitude":37.7217
}
]
},
{
"name":"Microsoft",
"datacentre_count":21,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":1,
"location":"Olympia",
"PUE":1.9,
"latitude":46.9778,
"longitude":-122.8716
},
{
"datacentre_id":2,
"location":"Tacoma",
"PUE":1.7,
"longitude":-122.3621,
"latitude":47.2376
},

{
"datacentre_id":4,
"location":"Silverdale",
"PUE":1.7,
"longitude":-122.7191,
"latitude":47.7244
},

{
"datacentre_id":6,
"location":"Odessa",
"PUE":1.7,
"longitude":-102.3302,
"latitude":31.7255
},
{
"datacentre_id":7,
"location":"Lincoln",
"PUE":1.7,
"longitude":-71.3163,
"latitude":42.4282
}
]
},
{
"name":"Oracle",
"datacentre_count":7,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":4,
"location":"Silverdale",
"PUE":1.7,
"longitude":-122.7191,
"latitude":47.7244
},
{
"datacentre_id":5,
"location":"Canton",
"PUE":1.7,
"longitude":-81.3347,
"latitude":40.835
}
]
},
{
"name":"Facebook",
"datacentre_count":31,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":3,
"location":"Yakima",
"PUE":1.7,
"longitude":-120.5308,
"latitude":46.5982
},
{
"datacentre_id":6,
"location":"Odessa",
"PUE":1.7,
"longitude":-102.3302,
"latitude":31.7255
},
{
"datacentre_id":7,
"location":"Lincoln",
"PUE":1.7,
"longitude":-71.3163,
"latitude":42.4282
},
]
},
{
"name":"SAP",
"datacentre_count":21,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":2,
"location":"Tacoma",
"PUE":1.7,
"longitude":-122.3621,
"latitude":47.2376
},

{
"datacentre_id":7,
"location":"Lincoln",
"PUE":1.7,
"longitude":-71.3163,
"latitude":42.4282
},
{
"datacentre_id":8,
"location":"San Francisco",
"PUE":1.7,
"longitude":-122.4112,
"latitude":37.7217
}]
},
{
"name":"CISCO",
"datacentre_count":7,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":5,
"location":"Canton",
"PUE":1.7,
"longitude":-81.3347,
"latitude":40.835
}]
},
{
"name":"Intel",
"datacentre_count":31,
"HeadQuarters":"Mountain View",
"datacentres":[

{
"datacentre_id":4,
"location":"Silverdale",
"PUE":1.7,
"longitude":-122.7191,
"latitude":47.7244
}
]
},
{
"name":"Adobe",
"datacentre_count":21,
"HeadQuarters":"Mountain View",
"datacentres":[

{
"datacentre_id":8,
"location":"San Francisco",
"PUE":1.7,
"longitude":-122.4112,
"latitude":37.7217
}]
},
{
"name":"Apple",
"datacentre_count":7,
"HeadQuarters":"Mountain View",
"datacentres":[
{
"datacentre_id":1,
"location":"Olympia",
"PUE":1.9,
"latitude":46.9778,
"longitude":-122.8716
},
{
"datacentre_id":2,
"location":"Tacoma",
"PUE":1.7,
"longitude":-122.3621,
"latitude":47.2376
},
{
"datacentre_id":3,
"location":"Yakima",
"PUE":1.7,
"longitude":-120.5308,
"latitude":46.5982
},
{
"datacentre_id":4,
"location":"Silverdale",
"PUE":1.7,
"longitude":-122.7191,
"latitude":47.7244
},
{
"datacentre_id":5,
"location":"Canton",
"PUE":1.7,
"longitude":-81.3347,
"latitude":40.835
},
{
"datacentre_id":6,
"location":"Odessa",
"PUE":1.7,
"longitude":-102.3302,
"latitude":31.7255
},
{
"datacentre_id":7,
"location":"Lincoln",
"PUE":1.7,
"longitude":-71.3163,
"latitude":42.4282
},
{
"datacentre_id":8,
"location":"San Francisco",
"PUE":1.7,
"longitude":-122.4112,
"latitude":37.7217
}]
}
]
}

    
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('pages/index');
  response.sendFile(__dirname + '/index.html');
});

app.get('/cool', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(data));
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



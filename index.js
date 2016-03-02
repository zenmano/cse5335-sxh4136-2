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
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                },
			            	                {
			            	                	"datacentre_id":3,
			            	                	"location":"palo alto",
			            	                	"PUE":1.7,
			            	                	"longitude":134.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":4,
			            	                	"location":"arlington",
			            	                	"PUE":1.7,
			            	                	"longitude":141.274856,
			            	                	"latitude":-62.890542
			            	                },
			            	                {
			            	                	"datacentre_id":5,
			            	                	"location":"dallas",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
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
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
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
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                },
			            	                {
			            	                	"datacentre_id":3,
			            	                	"location":"palo alto",
			            	                	"PUE":1.7,
			            	                	"longitude":134.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":4,
			            	                	"location":"arlington",
			            	                	"PUE":1.7,
			            	                	"longitude":141.274856,
			            	                	"latitude":-62.890542
			            	                },
			            	                {
			            	                	"datacentre_id":5,
			            	                	"location":"dallas",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":6,
			            	                	"location":"irvin",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },{
			            	                	"datacentre_id":7,
			            	                	"location":"new york",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },{
			            	                	"datacentre_id":8,
			            	                	"location":"ohio",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
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
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                },
			            	                {
			            	                	"datacentre_id":3,
			            	                	"location":"palo alto",
			            	                	"PUE":1.7,
			            	                	"longitude":134.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":4,
			            	                	"location":"arlington",
			            	                	"PUE":1.7,
			            	                	"longitude":141.274856,
			            	                	"latitude":-62.890542
			            	                },
			            	                {
			            	                	"datacentre_id":5,
			            	                	"location":"dallas",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                }
			            	                ]
			             },

			             {
			            	 "name":"Oracle",
			            	 "datacentre_count":7,
			            	 "HeadQuarters":"Mountain View",
			            	 "datacentres":[
			            	                {
			            	                	"datacentre_id":1,
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                }
			            	                ]
			             },

			             {
			            	 "name":"Facebook",
			            	 "datacentre_count":31,
			            	 "HeadQuarters":"Mountain View",
			            	 "datacentres":[
			            	                {
			            	                	"datacentre_id":1,
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                },
			            	                {
			            	                	"datacentre_id":3,
			            	                	"location":"palo alto",
			            	                	"PUE":1.7,
			            	                	"longitude":134.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":4,
			            	                	"location":"arlington",
			            	                	"PUE":1.7,
			            	                	"longitude":141.274856,
			            	                	"latitude":-62.890542
			            	                },
			            	                {
			            	                	"datacentre_id":5,
			            	                	"location":"dallas",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":6,
			            	                	"location":"irvin",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },{
			            	                	"datacentre_id":7,
			            	                	"location":"new york",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },{
			            	                	"datacentre_id":8,
			            	                	"location":"ohio",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                }
			            	                ]
			             },{
			            	 "name":"SAP",
			            	 "datacentre_count":21,
			            	 "HeadQuarters":"Mountain View",
			            	 "datacentres":[
			            	                {
			            	                	"datacentre_id":1,
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                },
			            	                {
			            	                	"datacentre_id":3,
			            	                	"location":"palo alto",
			            	                	"PUE":1.7,
			            	                	"longitude":134.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":4,
			            	                	"location":"arlington",
			            	                	"PUE":1.7,
			            	                	"longitude":141.274856,
			            	                	"latitude":-62.890542
			            	                },
			            	                {
			            	                	"datacentre_id":5,
			            	                	"location":"dallas",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                }
			            	                ]
			             },

			             {
			            	 "name":"CISCO",
			            	 "datacentre_count":7,
			            	 "HeadQuarters":"Mountain View",
			            	 "datacentres":[
			            	                {
			            	                	"datacentre_id":1,
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                }
			            	                ]
			             },

			             {
			            	 "name":"Intel",
			            	 "datacentre_count":31,
			            	 "HeadQuarters":"Mountain View",
			            	 "datacentres":[
			            	                {
			            	                	"datacentre_id":1,
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                },
			            	                {
			            	                	"datacentre_id":3,
			            	                	"location":"palo alto",
			            	                	"PUE":1.7,
			            	                	"longitude":134.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":4,
			            	                	"location":"arlington",
			            	                	"PUE":1.7,
			            	                	"longitude":141.274856,
			            	                	"latitude":-62.890542
			            	                },
			            	                {
			            	                	"datacentre_id":5,
			            	                	"location":"dallas",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":6,
			            	                	"location":"irvin",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },{
			            	                	"datacentre_id":7,
			            	                	"location":"new york",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },{
			            	                	"datacentre_id":8,
			            	                	"location":"ohio",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                }
			            	                ]
			             },{
			            	 "name":"Adobe",
			            	 "datacentre_count":21,
			            	 "HeadQuarters":"Mountain View",
			            	 "datacentres":[
			            	                {
			            	                	"datacentre_id":1,
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                },
			            	                {
			            	                	"datacentre_id":3,
			            	                	"location":"palo alto",
			            	                	"PUE":1.7,
			            	                	"longitude":134.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":4,
			            	                	"location":"arlington",
			            	                	"PUE":1.7,
			            	                	"longitude":141.274856,
			            	                	"latitude":-62.890542
			            	                },
			            	                {
			            	                	"datacentre_id":5,
			            	                	"location":"dallas",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                }
			            	                ]
			             },

			             {
			            	 "name":"Apple",
			            	 "datacentre_count":7,
			            	 "HeadQuarters":"Mountain View",
			            	 "datacentres":[
			            	                {
			            	                	"datacentre_id":1,
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                }
			            	                ]
			             },

			             {
			            	 "name":"Equinix",
			            	 "datacentre_count":31,
			            	 "HeadQuarters":"Mountain View",
			            	 "datacentres":[
			            	                {
			            	                	"datacentre_id":1,
			            	                	"location":"seattle",
			            	                	"PUE":1.9,
			            	                	"latitude":-63.890542,
			            	                	"longitude":151.274856
			            	                },
			            	                {
			            	                	"datacentre_id":2,
			            	                	"location":"bangalore",
			            	                	"PUE":1.7,
			            	                	"longitude":131.274856,
			            	                	"latitude":-61.890542
			            	                },
			            	                {
			            	                	"datacentre_id":3,
			            	                	"location":"palo alto",
			            	                	"PUE":1.7,
			            	                	"longitude":134.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":4,
			            	                	"location":"arlington",
			            	                	"PUE":1.7,
			            	                	"longitude":141.274856,
			            	                	"latitude":-62.890542
			            	                },
			            	                {
			            	                	"datacentre_id":5,
			            	                	"location":"dallas",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },
			            	                {
			            	                	"datacentre_id":6,
			            	                	"location":"irvin",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },{
			            	                	"datacentre_id":7,
			            	                	"location":"new york",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                },{
			            	                	"datacentre_id":8,
			            	                	"location":"ohio",
			            	                	"PUE":1.7,
			            	                	"longitude":111.274856,
			            	                	"latitude":-59.890542
			            	                }
			            	                ]
			             }
			             ]
	};
    
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



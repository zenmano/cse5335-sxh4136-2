$(document).ready(function(){
	
	/*data = {
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
			             }
			             ]
	};
*/	
	
	var locations = [
	                 ['Bondi Beach', -63.890542, 151.274856, 4],
	                 ['Coogee Beach', -33.923036, 151.259052, 5],
	                 ['Cronulla Beach', -34.028249, 151.157507, 3],
	                 ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
	                 ['Maroubra Beach', -33.950198, 151.259302, 1]
	               ];
	
	
	 
	    
	    
	$(document ).on( "click",".outlook_listitem", function() {
		$(this).siblings().removeClass("selected");
		 $(this).addClass("selected");
		 var company_datacentres =data.companies[$(this).index()].datacentres
		 createmap(company_datacentres);
		 createchart(company_datacentres);
		});
	
	$("#clickme").click(function(){
		$.get("/cool", function(datafromnodejs, status){
	        data = datafromnodejs;
	        
	        bindHtmlWithData(data);
	        
	        var firstcomp =data.companies[0].datacentres;
	    	$(".outlook_listitem").eq(0).addClass("selected");
	    	createmap(firstcomp);
	    	createchart(firstcomp);
	    	
	    });
	});
	
	
	
});
function createchart(datacentres){
	var chartdata=[];
	$(datacentres).each(function(index, object){
		chartdata.push({"name":"<b>DC "+object.datacentre_id+"</b>","y":object.PUE,"location":object.location});
	});
	
	 $('#container').highcharts({
	        chart: {
	            type: 'column'
	        },
	        title: {
	            text: 'Power Utilization Effectiveness'
	        },
	        subtitle: {
	            text: 'Source: Random Data'
	        },
	        xAxis: {
	            type: 'category',
	            title: {
	                text: 'Data Center ID'
	            },
	            labels: {
	                rotation: -45,
	                style: {
	                    fontSize: '13px',
	                    fontFamily: 'Verdana, sans-serif'
	                }
	            }
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'Total Power/ IT Power'
	            }
	        },
	        legend: {
	            enabled: false
	        },
	        tooltip: {
	            pointFormat: 'PUE : <b>{point.y:.1f}</b><br/>Location : <b>{point.location}'
	        },
	        series: [{
	            name: 'Population',
	            data: chartdata,
	            dataLabels: {
	                enabled: true,
	                rotation: -90,
	                color: '#FFFFFF',
	                align: 'right',
	                format: '{point.y:.1f}', // one decimal
	                y: 10, // 10 pixels down from the top
	                style: {
	                    fontSize: '13px',
	                    fontFamily: 'Verdana, sans-serif'
	                }
	            }
	        }]
	    });
}

function createmap(datacentre){
	var map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 7,
	      center: new google.maps.LatLng(-33.92, 151.25),
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    });
	 
	 var latlngbounds = new google.maps.LatLngBounds();

	    var infowindow = new google.maps.InfoWindow();

	    var marker, i;

	    for (i = 0; i < datacentre.length; i++) {  
	    	var latlng = new google.maps.LatLng(datacentre[i].latitude, datacentre[i].longitude)
	      marker = new google.maps.Marker({
	        position: latlng,
	        map: map
	      });
	    	latlngbounds.extend(latlng);

	      google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infowindow.setContent(datacentre[i].location);
	          infowindow.open(map, marker);
	        }
	      })(marker, i));
	    }
	    
	    map.fitBounds(latlngbounds);
}
function bindHtmlWithData(dataBundle){
	var companies = dataBundle.companies;
	$(companies).each(function(index,company){
		var company_name = company.name;
		var datacentres_count = company.datacentres.length;
		var company_headquarter = company.HeadQuarters;
		
		var listitem = '<div class="outlook_listitem"> '+
		'<div class="outlook_listitem_name">'+company_name+'</div>'+
		'<div class="outlook_listitem_datascentre">'+datacentres_count+' Datacentres</div>'+
		'</div>';
		
		$(".outlook_list").append(listitem);
		
	});
	
}
$(document).ready(function(){
  var sample = {
      "address": {
        "building": "1007",
        "coord": [
          -73.856077,
          40.848447
        ],
        "street": "Morris Park Ave",
        "zipcode": "10462"
      },
      "borough": "Bronx",
      "cuisine": "Bakery",
      "grades": [
        {
          "date": {
            "$date": 1393804800000
          },
          "grade": "A",
          "score": 2
        },
        {
          "date": {
            "$date": 1378857600000
          },
          "grade": "A",
          "score": 6
        },
        {
          "date": {
            "$date": 1358985600000
          },
          "grade": "A",
          "score": 10
        },
        {
          "date": {
            "$date": 1322006400000
          },
          "grade": "A",
          "score": 9
        },
        {
          "date": {
            "$date": 1299715200000
          },
          "grade": "B",
          "score": 14
        }
      ],
      "name": "Morris Park Bake Shop",
      "restaurant_id": "30075445",
      "id":"1"
    }
    ;
	    
	    
	
	
	$("#clickme").click(function(){
		var clickme = $(this);
        
        
           
        j=0;
        myVar = setInterval(function(){ 
            task(j);
            if(j<100){
                j++;
            }else{
                clearInterval(myVar);
            }
            
        }, 500);
                
            
            
            
        
		
	});
	
	
	
});

function task(k){
    
    if(k<20)
            {
                prefirst20(k);
            }
            else
            {
                preAfter20(k);
            }
            
            $.get("/data/"+k, function(datafromnodejs, status){
                
                
                var data = datafromnodejs;
                
            
                if(data.id<20)
                {
                    first20(data);
                }
                else
                {
                    After20(data);
                }
             
            
             
	        
            });
            
           
}

function prefirst20(i){
    var loadingtile = $('<div class="flip-container tile showloading" ></div>');
   var flipper = $('<div class="flipper"></div>');
   var front = $('<div class="front"></div>');
   var back = $('<div class="back" ><div class="back-title"><img src="ajax-loader.gif"/></div>');
   
   flipper.append(front);
   flipper.append(back);
   loadingtile.append(flipper);
   $(".tiles").append(loadingtile);
}
function first20(data){
    /*
  var tileexample =  $('<div class="flip-container tile" ><div class="flipper">'+     
			'<div class="front"><span class="name"><b>Name : </b>'+data.name+'</span><span class="building"><b>Building No. : </b>'+data.address.building+'</span><span class="street"><b>Street : </b>'+data.address.street+'</span><span class="borough"><b>Borough : </b>'+data.borough+'</span><span class="cuisine"><b>Cuisine : </b>'+data.cuisine+'</span></div>'+
			'<div class="back" ><div class="back-title"><img src="ajax-loader.gif"/></div></div></div></div>');
            
   var tile = $('<div class="flip-container tile" ></div>');
   var flipper = $('<div class="flipper"></div>');
   var front = $('<div class="front"></div>');
   var back = $('<div class="back" ><div class="back-title"><img src="ajax-loader.gif"/></div>');
   var front_content = $('<span class="name"><b>Name : </b>'+data.name+'</span><span class="building"><b>Building No. : </b>'+data.address.building+'</span><span class="street"><b>Street : </b>'+data.address.street+'</span><span class="borough"><b>Borough : </b>'+data.borough+'</span><span class="cuisine"><b>Cuisine : </b>'+data.cuisine+'</span>');

   
   */
   var front_content = $('<span class="name"><b>Name : </b>'+data.name+'</span><span class="building"><b>Building No. : </b>'+data.address.building+'</span><span class="street"><b>Street : </b>'+data.address.street+'</span><span class="borough"><b>Borough : </b>'+data.borough+'</span><span class="cuisine"><b>Cuisine : </b>'+data.cuisine+'</span>');

   var tile = $(".tiles .tile").eq(data.id);
     tile.find(".front").append(front_content);
    tile.removeClass("showloading");
    
            
}

function preAfter20(i){
    var tile = $(".tiles .tile").eq(i%20);
    
    tile.addClass("showloading");
    
}


function After20(data){
    var front_content = $('<span class="name"><b>Name : </b>'+data.name+'</span><span class="building"><b>Building No. : </b>'+data.address.building+'</span><span class="street"><b>Street : </b>'+data.address.street+'</span><span class="borough"><b>Borough : </b>'+data.borough+'</span><span class="cuisine"><b>Cuisine : </b>'+data.cuisine+'</span>');
    var tile = $(".tiles .tile").eq(data.id%20);
    var front = tile.find(".front") ;
    
    setTimeout(function(){ 
    front.empty();
    
    front.append(front_content);
    tile.removeClass("showloading");
    }, 1000);
    
}


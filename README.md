Project 2- CSE5335
==================
	
Name: Supreme Halagur Chandrashekarappa	
=========================================
netid: sxh4136	
=========================================
Student id: 1001244135
=========================================
	
URL: https://cse5335-sxh4136-2.herokuapp.com/
-----------------------------------------------------

 

a. What aspect of the implementation did you find easy, if any, and why?
=======================================================================
The First and foremost which made very easy was the use of Heroku. As PAAS it really has a awesome and easy to use, deploy and run. The easy way of pushing the code to git and deploy. The Heroku Toolbelt has easy to use commands. The tutorial made it very easy to use Heroku. As I was comfortable with Javascript it was easy for me to use Jquery and NodeJS.
The data type structure of REDIS made it very easy for retrieving the data. I stored the stringified JSON of each data in REDIS. The insertion and retrieval was very easy. There was no need for me to change the JSON datatype again. Whatever stored in database was directly sent to User Interface without any change in format of data.

--------------------------------------------------------------------------------------------------------------------------------------

b. What aspect of the implementation did you find hard, if any, and why?
=======================================================================
I took up the flipping of tiles for animating the newly arriving data. The implementation was kind of hard. It was not just a css but included Jquery too. I had to insert and remove class to respected tile for showing loading image, flipping and show the binded data to tile. I also faced difficulties in data retrieval in specified interval.
--------------------------------------------------------------------------------------------------------------------------------------

c. If you were to use these technologies professionally, what would be your biggest concern?
=======================================================================
1. NodeJS is really a nice way of asynchronous programming. The CallBack Function way of handling looks clean. But as in professional as the projects is gonna be complex and it involves multiple calls. The anonymous callback function can go numerous nesting. The other Synchronous programming style server side languages seems more clean and easy way of coding. 

2. REDIS is fast, but storing huge data in-memory will end up in high cost.

3. In Professional world the data is huge, complex and relational. REDIS is only good if you want to query based on single key. But if you want to query based on other attributes of the record then REDIS does not support the requirements. SQL is better in that case.

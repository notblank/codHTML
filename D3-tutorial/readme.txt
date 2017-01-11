https://www.youtube.com/watch?v=219xXJRh4Lw

D3 binds data to elements of DOM document. 

select nodes on the three:
	d3.select("body")
	d3.slelecALL(.block)
	can select on id too.

interact with selections:

 	selection.attr
 			 .style
 			 .append <- add html elements (??)
 			 .etc

associate nodes to data:
	
	d3.select(...).selectAll(...).data(...).eneter()...

load data:
	d3.csv 
	d3.json


SVG es DOM y sirve para hacer gráficos.
	
	svg tag
	usar g tag para agrupar elementos


========================================================================

https://www.youtube.com/watch?v=MCQ9VAjyhok&t=1375s


1* DOM manipualtion:
	
	append stuff, then add atrributes.
	can remove stuff too.

	now:
		set attributes as functions.

2* Data-driven docs:
	
	data is bound to a circle. You can get data from the circle too!
	try:
		d3.select("circle:nth-child(1)").datum();

3* Scales:

	maps from one scale to another to, for example, fit a canvas.

4* Working with data:

	move the data somewhere else.
	don't forget to use a local server (use python).

5* Mapping:
	
	create a map: querries us.json file and then uses projection function.

	projection is like scaling, so to use it replace scale.

6* Interactivity:

	
	

var width = 1000,
    height = 580;

var projection = d3.geoMercator()
    .scale((width - 3) / (2 * Math.PI))
    .translate([width / 2 - 10, height / 2 + 100]);

var path = d3.geoPath()
    .projection(projection);

var svg = d3.select("#map")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
      .direction('s')
      .attr('class', 'd3-tip')
      .html(function (d) {
            return d.name + ":";
        });

svg.call(tip);

svg.append("defs").append("path")
    .datum({type: "Sphere"})
    .attr("id", "sphere")
    .attr("d", path);

svg.append("use")
    .attr("class", "stroke")
    .attr("xlink:href", "#sphere");

svg.append("use")
    .attr("class", "fill")
    .attr("xlink:href", "#sphere");

// 2 json data frames: https://bl.ocks.org/mbostock/4183330
queue()
    .defer(d3.json, "./names.json")
    .defer(d3.json, "./world-50m.json")
    // .await(ready);

d3.json("./world-50m.json",function (error, world) {
  d3.json("./names.json",function (error, names) {

  if (error) throw error;

  var countries = topojson.feature(world, world.objects.countries).features,
      neighbors = topojson.neighbors(world.objects.countries.geometries);

  countries = countries.filter(function(d) {
    return names.some(function(n) {
      if (d.id == n.id) return d.name = n.name;
    });
    }).sort(function(a, b) {
      return a.name.localeCompare(b.name);
  });

  console.log(countries);

  // countries id: https://en.wikipedia.org/wiki/ISO_3166-1_numeric
  const paises = [040, 056, 076, 124, 152, 218, 250, 276, 724, 752, 756, 840];
  // console.log(countries[0].id)

  svg.selectAll(".country")
      .data(countries)
      .enter().insert("path", ".graticule")
      .attr("class", "country")
      .attr("d", path)
      .on("mouseover", showMembers)
      .on("mouseout", hideMembers)
      .on("mousemove", followMembers)
      .style("fill", function(d) {
        if(paises.includes(d.id)){
          return "#608788";
        }else{
          return "#ddd"
        }
      });

  svg.insert("path")
      .datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
      .attr("class", "boundary")
      .attr("d", path);

      function showMembers(d){
        if(paises.includes(d.id)){
          tip.show(d);
          d3.select(this)
            .attr("fill-opacity", 0.5)
            .append("rect")
            .attr("width", 0.5)
            .attr("height", 0.5);
            // console.log(d.id);
        }
      }

      function hideMembers(d){
        tip.hide(d);
  			d3.select(this)
  				.attr("fill-opacity", 1);
  		}

      function followMembers(){
        return tip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");
      }
  })
});

d3.select(self.frameElement).style("height", height + "px");

import Ember from 'ember';
import d3 from 'npm:d3';

export default Ember.Component.extend({
  didInsertElement() {

    this._super(...arguments);
    let data = [];
    let data1 = this.get('data');
    for(var key in data1) {
      data.push({year: key, count: data1[key]});
    }
    let parseDate = d3.time.format("%Y").parse;

    data.forEach(function(d) {
      d.year = parseDate(d.year);
    });

    data.sort(function(a, b){
      return a.year - b.year;
    });

    let margin = {top:25, right:10, bottom:35, left:10};
    let width = 4000 - margin.left - margin.right;
    let height = 450 - margin.top - margin.bottom;

    let xScale = d3.scale.ordinal()
            .domain(data.map(function(d) { return d.year; }))
            .rangeRoundBands([0, width], 0.04);

    let yScale = d3.scale.linear()
          .domain([0, d3.max(data, function(d) { return d.count; })])
          .range([height, 0]);

    let xAxis = d3.svg.axis().scale(xScale).orient("bottom").tickFormat(d3.time.format("%Y"));

    let yAxis = d3.svg.axis().scale(yScale).orient("left");

    let svgContainer = d3.select("#bar-chart").append("svg")
                      .attr("width", width + margin.left + margin.right)
                      .attr("height", height + margin.top + margin.bottom)
                      .append("g").attr("class", "container")
                      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    xScale.domain(data.map(function(d) { return d.year; }));
    yScale.domain([0, d3.max(data, function(d) { return d.count; })]);

    let xAxis_g = svgContainer.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + (height) + ")")
                  .call(xAxis)
                  .selectAll("text")
                  .style("text-anchor", "end")
                  .attr("dx", "-.3em")
                  .attr("dy", ".4em")
                  .attr("transform", "rotate(-45)");

    // Build the bars
    svgContainer.selectAll(".bar")
              .data(data)
              .enter()
              .append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return xScale(d.year); })
              .attr("width", xScale.rangeBand())
              .attr("y", function(d) { return yScale(d.count); })
              .attr("height", function(d) { return height - yScale(d.count); });

// Adds the text labels at the top of each bar. Partially repeated inthe resize() function below for responsiveness.
    svgContainer.selectAll(".text")
              .data(data)
              .enter()
              .append("text")
              .attr("class", "label")
              .attr("x", (function(d) { return xScale(d.year) + xScale.rangeBand() / 2; }))
              .attr("y", function(d) { return yScale(d.count) - 15; })
              .attr("dy", ".75em")
              .text(function(d) { return d.count; });


  }
});

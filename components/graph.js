import React from 'react';
import d3 from 'd3';
console.log(d3);

class Graph extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            width:this.props.width
        };
    }
    render(){
        let data=[
            {day:'02-11-2016',count:180},
            {day:'02-12-2016',count:250},
            {day:'02-13-2016',count:150},
            {day:'02-14-2016',count:496},
            {day:'02-15-2016',count:140},
            {day:'02-16-2016',count:380},
            {day:'02-17-2016',count:100},
            {day:'02-18-2016',count:150}
        ];
 
        let margin = {top: 5, right: 50, bottom: 20, left: 50},
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);
 
        let parseDate = d3.time.format("%m-%d-%Y").parse;
 
        data.forEach(function (d) {
            d.date = parseDate(d.day);
        });
 
        let x = d3.time.scale()
            .domain(d3.extent(data, function (d) {
                return d.date;
            }))
            .rangeRound([0, w]);
 
        let y = d3.scale.linear()
            .domain([0,d3.max(data,function(d){
                return d.count+100;
            })])
            .range([h, 0]);
 
        let line = d3.svg.line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) {
                return y(d.count);
            }).interpolate('linear');
 
        let transform='translate(' + margin.left + ',' + margin.top + ')';
 
        return (
            <div>
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height}>

                    <g transform={transform}>
                        <path className="line shadow" style={{fill: "none", stroke: "#7dc7f4", strokeWidth: "5px"}} d={line(data)} strokeLinecap="round"/>
                    </g>
                </svg>
            </div>
        );
    }
}
Graph.propTypes = {
        width:React.PropTypes.number,
        height:React.PropTypes.number,
        chartId:React.PropTypes.string
    };
Graph.defaultProps = {
            width: 800,
            height: 300,
            chartId: 'v1_chart'
        };



export default Graph;
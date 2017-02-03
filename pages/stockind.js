import React from 'react'
import Graph from '../components/graph'
import DonutChart from '../components/donut'
import NewsFeed from '../components/newsfeed'
class StockIND extends React.Component{
    render(){
        return (<div><h1>
            {this.props.params.code}
        </h1>
            <h1>Apple Computer Co.</h1>

            <br /><br />
            <h2>Stock's Performance</h2>
            <Graph />
            <br />
            <h2>Your Current portfolio</h2>
            <DonutChart />
            <br />
            <br />
            <NewsFeed style={{float: "right"}}/>
        </div>
        )
    }
}

export default StockIND;

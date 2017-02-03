import React from 'react'

import ListItem from '../components/listitem'
import {Link} from 'react-router'
import { connect } from 'react-redux';
import StocksAction from '../actions/stocks';

class Stocks extends React.Component{
    componentDidMount(){
        StocksAction.loadList();
    }
    render(){
        //console.log(this.props.data);
        return (
            <div>
                <h1>List</h1>
                {this.props.data.map((val, i) => (<ListItem key={i}><Link to={"stockind/"+val.stock}>{val.stock}</Link></ListItem>))}
            </div>
        );
    }
}

function mapStateToProps (store) {
    return {
        data: store.stocks.data
    };
}

export default connect(mapStateToProps)(Stocks);


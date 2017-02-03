import store from '../mainstore'
import {makeAction, dispatchAction, dispatchAsyncAction} from './actionmaker'

const StocksAction = {
    /*loadList: function(){
        dispatchAsyncAction(makeAction("LOAD_LIST", "l", null), {
            url: "http://codepen.io/jobs.json",
            method: "GET",
            data: null
        });

    }*/
    loadList: function(){
        dispatchAction(makeAction("LOAD_LIST", "success", { stocks: 
            [
                {
                    stock: "AAPL",
                    gain: 90
                },
                {
                    stock: "GOOG",
                    gain: 60
                },
                {
                    stock: "SOME",
                    gain: 20
                }
            ]
        }))
    }
}

export default StocksAction;

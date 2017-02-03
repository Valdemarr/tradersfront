import React from 'react'
import _ from 'lodash'
function StocksReducer(state = {}, action){
    if(_.isEmpty(state)){
        state.data = [];
        return state;
    }
    switch(action.type){
        case "LOAD_LIST":
            if(action.status == "success"){
                return {
                    data : action.payload.stocks  
                };
            }else{
                return {
                    data: [
                            "loading list"
                        ]
                    
                };
            }
            break;
        default:
            return state;
    }

}

export default StocksReducer;
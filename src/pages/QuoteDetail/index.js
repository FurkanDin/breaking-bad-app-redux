import React from 'react'
import { useParams,Navigate  } from 'react-router-dom';
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import {
    quotesSelector,
} from "./../../redux/quotesSlice";

function QuoteDetail() {
    const {quote_id} = useParams();
    const quote = useSelector((state)=>state.quotes.items.find(item=>item.quote_id===Number(quote_id)));
    if(!quote){
return (<Navigate  to="/quotes"/>)

    }

  return (
    <div>
        <h1>Quote Detail</h1>
      <pre> {JSON.stringify(quote,null,2)}</pre>
    </div>
  )
}

export default QuoteDetail
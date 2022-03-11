import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import {
  fetchAllQuotes,
  quotesSelector,
  statusSelector,
  errorSelector,
} from "./../../redux/quotesSlice";
import Item from "./Item";

function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector(quotesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  console.log(data);
  useEffect(() => {
      if(status==='idle'){
        dispatch(fetchAllQuotes());
      }
   
  }, [dispatch,status]);

  {
    error && <Error message={error} />;
  }

  return (
    <div>
      <h1>Quotes</h1>
      {status === "loading" && <Loading />}

      {status === "succeeded" &&
        data.map((item)=> <Item key={item.quote_id} item={item}/>)}

{status === "succeeded" && <div><h3 style={{color:'grey'}}>{data.length} quotes</h3></div> }
    </div>
  );
}

export default Quotes;

import React from "react";
import  {useEffect} from "react";//like componentsdidmount its react hook
import { useDispatch, useSelector } from "react-redux";
import {
  loadData,
  purches,
} from "../Mystates and actions/reducer/axios getdata";

function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    loadData(dispatch);
  },[]);
  const isloading = useSelector((state) => state.allaction.isloading);
  const items = useSelector((state) => state.allaction.items);//our api data
  const msg = useSelector((state) => state.allaction.msg);//err msg
  return (
    <div className="container">
      {isloading ? <h3>is loading</h3> : null}
      {msg ? <h3>{msg}</h3> : null}
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {items
            ? items.map((item) => (
                <tr key={item.productId}>
                  <td>{item.productId}</td>
                  <td>{item.productName}</td>
                  <td>{item.unitPrice}</td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() =>
                      purches(
                        dispatch,
                        item.productName,
                        item.productId,
                        item.unitPrice
                      )
                    }
                  >
                    خرید این محصول
                  </button>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Products;

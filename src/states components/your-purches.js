import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBuy } from "../Mystates and actions/states/action types";
function YourPurches() {
  const dispatch = useDispatch();
  const purchesitems = useSelector((state) => state.allaction.purchesitems);
  let price = 0;
  let onbtn = (
    <button className="btn btn-success mt-5"> خرید محصولات سبد </button>
  );
  let offbtn = (
    <button className="btn btn-success mt-5" disabled>
      {" "}
      خرید محصولات سبد{" "}
    </button>
  );
  function purchesSum(params) {
    purchesitems.map((items) => (price = items.price + price));
    return price;
  }

  return (
    <div className="container d-flex justify-content-center flex-column">
      <h3>سبد خرید شما</h3>
      <button
        className="btn btn-outline-danger mb-5"
        onClick={() => dispatch({ type: removeBuy })}
      >
        حذف سبد خرید
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {purchesitems
            ? purchesitems.map((items) => (
                <tr key={items.id}>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.price}</td>
                </tr>
              ))
            : null}
          <h3 className="text-success">
            جمع کل : {purchesitems.length !== 0 ? purchesSum() : 0}{" "}
          </h3>
        </tbody>
      </table>
      {purchesitems.length !== 0 ? onbtn : offbtn}
    </div>
  );
}

export default YourPurches;

import * as React from "react";
import { AppContext } from "../context/context";
import { Types } from "../context/reducers";

const Products = () => {
  const { state, dispatch } = React.useContext(AppContext);

  return (
    <div className="counter-click-container">
      <button
        onClick={() => {
          dispatch({
            type: Types.Add
          });
        }}
      >
        click
      </button>
      {state.shoppingCart}
    </div>
  );
};

export default Products;

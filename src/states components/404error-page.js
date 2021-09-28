import React from "react";
import err from "../404.jpg";
function Err404() {
  //this is err page
  return (
    <div>
      <img className="container" src={err} alt="404 err" />
    </div>
  );
}
export default Err404;

import React from "react";

function some({ params }) {
  console.log(params);
  return <div>somepage {params.slug}</div>;
}

export default some;

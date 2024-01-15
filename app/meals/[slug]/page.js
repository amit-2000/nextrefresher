// import React from "react";
import Image from "next/image";
import image from "@/next.config";
export default function some({ params }) {
  console.log(params);
  return (
    <> 
      <p>
        This is correct and should work because a div is really good for this
        task.
      </p>
    </>
  );
}

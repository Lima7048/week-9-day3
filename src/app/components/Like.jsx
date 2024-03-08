"use client";
import { useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import DeleteButton from "./DeleteButton";

export default function Like() {
  const [Like, setLike] = useState(0);
  const [cookies, setCookies] = useState(
    parseInt(localStorage.getItem("Like")) || 0
  );

  function incrementLike() {
    setLike(Like + 1);
  }

  return (
    <div className="">
      <button onClick={() => setLike(Like + 1)}>❤️{Like}</button>
      {/* <DeleteButton /> */}
    </div>
  );
}

// id={Post.id}
/* <button>❤️</button> */

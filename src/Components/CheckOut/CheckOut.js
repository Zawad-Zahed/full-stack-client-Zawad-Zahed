import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const CheckOut = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { _id } = useParams();
  const [book, setBook] = useState([]);
  // console.log(_id);
  useEffect(() => {
    fetch("https://serene-reef-03269.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  const bookDetail = book.find((bd) => bd?._id === _id);
  /* newly added after check out */
  const handleCheckOut = () => {
    const newBookOrder = {
      ...loggedInUser,
      book: bookDetail,
      date: new Date(),
    };
    console.log(newBookOrder);
    fetch("https://serene-reef-03269.herokuapp.com/addBookOrder", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBookOrder),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h5>Check out</h5>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bookDetail?.name}</td>
            <td>1</td>
            <td>${bookDetail?.price}</td>
          </tr>

          <tr>
            <td colspan="1">Total</td>
            <td colspan="1"></td>
            <td>${bookDetail?.price}</td>
          </tr>
        </tbody>
      </table>

      <Link to="/bookOrders">
        {" "}
        <button
          onClick={() => handleCheckOut()}
          type="button"
          className="btn btn-primary"
        >
          Check Out
        </button>
      </Link>
    </div>
  );
};

export default CheckOut;

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";

const BookOrders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookOrders, setBookOrders] = useState([]);
  console.log(bookOrders);
  useEffect(() => {
    fetch(
      "https://serene-reef-03269.herokuapp.com/bookOrders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setBookOrders(data));
  }, [bookOrders]);

  return (
    <div>
      <h5> You Have {bookOrders.length} Book Orders </h5>
      {bookOrders.map((bookOrder) => (
        <pre>
          {" "}
          {bookOrder.book?.name} <strong> Price </strong> $
          {bookOrder.book?.price}{" "}
          <strong>
            {" "}
            Date:{new Date(bookOrder.date).toDateString("dd/MM/yyyy")}{" "}
          </strong>{" "}
        </pre>
      ))}
    </div>
  );
};

export default BookOrders;

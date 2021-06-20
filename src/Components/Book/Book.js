import React from "react";

import { Link } from "react-router-dom";

const Books = ({ book }) => {
  return (
    <div className="col-md-3 p-3 mb-3 ml-2 m-4 shadow rounded bg-light">
      <img
        style={{ height: "300px", marginBottom: "10px" }}
        src={book.imageURL}
        alt=""
      />
      <h4>{book.name}</h4>
      <p>{book.author}</p>
      <h3 className="card-footer rounded">
        <span className="text-primary"> $ {book.price}</span>

        <Link to={`/book/${book._id}`} className="btn btn-primary ml-5">
          Buy now
        </Link>
      </h3>
    </div>
  );
};

export default Books;

import React, { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ManageBook = () => {
  const [books, setBooks] = useState([]);
  // console.log(books);
  useEffect(() => {
    fetch("https://serene-reef-03269.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [books]);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://serene-reef-03269.herokuapp.com/deleteBook/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res) {
        alert("Deleted Successfully");
      }
    });
  };

  return (
    <div className="container">
      <h4>Manage Books</h4>
      <h5>Total Books:{books.length} </h5>
      {books.map((book) => (
        <div className="container d-flex ">
          {" "}
          <h6 className="justify-content-evenly mt-2 pl-2">
            {book.name} <span className="text-info">{book.author}</span> Price $
            {book.price}
            <button type="button" className="btn btn-success ml-5">
              <FontAwesomeIcon icon={faEdit} />
            </button>{" "}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(`${book._id}`)}
            >
              {" "}
              <FontAwesomeIcon icon={faTrashAlt} />
              Delete
            </button>{" "}
          </h6>{" "}
        </div>
      ))}
    </div>
  );
};

export default ManageBook;

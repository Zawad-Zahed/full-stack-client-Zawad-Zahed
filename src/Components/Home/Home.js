import React, { useEffect, useState } from "react";
import Books from "../Book/Book";

// const books = [
//   {
//     name: "Eloquent JavaScript ",
//     image: "Eloquent JavaScript.png",
//     author: "Marijn Haverbeke ",
//     price: "33",
//   },
//   {
//     name: "Learning React",
//     image: "Learning React.png",
//     author: "Alex Banks & Eve Porcello",
//     price: "47",
//   },
//   {
//     name: "The Road to React",
//     image: "The Road to React.png",
//     author: "Robin Wieruch",
//     price: "55",
//   },
//   {
//     name: "The C  ",
//     image: "The C .png",
//     author: "Brian W. Kernighan & Dennis M. Ritche",
//     price: "45",
//   },
//   {
//     name: "Effective TypeScript",
//     image: "Effective TypeScript.png",
//     author: "Dan Vanderkam",
//     price: "35",
//   },
//   {
//     name: "JavaScript Everywhere",
//     image: "JavaScript Everywhere.png",
//     author: "Adam D. Scott",
//     price: "40",
//   },
//   {
//     name: "PYTHON Crash Course",
//     image: "PYTHON Crash Course.png",
//     author: "Eric Matthes",
//     price: "25",
//   },
//   {
//     name: "Software Engineering at GOOGLE",
//     image: "Software Engineering at GOOGLE.png",
//     author: "Titus Winters, Tom Manshreck & Hyrum Wright",
//     price: "37",
//   },
//   {
//     name: "LEARN JavaScript Quickly",
//     image: "LEARN JavaScript Quickly.png",
//     author: "CodeQuickly",
//     price: "28",
//   },
// ];

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://serene-reef-03269.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });

  return (
    <div className="container">
      {books.length === 0 && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      )}

      <div className="row">
        {books.map((book) => (
          <Books key={book._id} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default Home;

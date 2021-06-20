import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBooks = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [bookImage, setBookImage] = useState(null);
  console.log(bookImage);
  const onSubmit = (data) => {
    const bookDetails = {
      name: data.name,
      price: data.price,
      author: data.author,
      imageURL: bookImage,
    };
    console.log(bookDetails);
    const url = `https://serene-reef-03269.herokuapp.com/addBook`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(bookDetails),
    }).then((res) => console.log("json ")); //server site
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    // console.log("event", event);
    const imageData = new FormData();
    imageData.set("key", "621bc05ab16dfb44e1bb023866160477");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setBookImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container shadow m-2 p-5 rounded d-flex">
      <h1 className="text-primary m-4 p-2">Add Books</h1>
      <form
        className="justify-content-evenly ml-5 text-primary fw-bold"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor=""> Name </label>
        <input {...register("name")} />
        <br />
        <label htmlFor=""> Price </label>
        <input {...register("price", { required: true })} />
        <br />
        <label htmlFor=""> Author </label>{" "}
        <input {...register("author", { required: true })} />
        <br />
        <label htmlFor=""> </label>{" "}
        <input
          type="file"
          {...register("image", { required: true })}
          onChange={handleImageUpload}
        />
        <br />
        <br />
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddBooks;

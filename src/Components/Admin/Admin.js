import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";
import ManageBook from "../ManageBook/ManageBook";
import AddBooks from "../AddBooks/AddBooks";

const Admin = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="sidebar m-2 rounded fw-bold">
        <Link onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faBook} /> Manage Book
        </Link>
        <br />
        <br />
        <Link onClick={() => setShow(false)}>
          <FontAwesomeIcon icon={faPlus} /> Add Book
        </Link>
        <br />
        <br />
        <Link>
          <FontAwesomeIcon icon={faEdit} /> Edit Book
        </Link>
      </div>

      <div class="content">
        {show && <ManageBook></ManageBook>}

        {!show && <AddBooks></AddBooks>}
      </div>
    </div>
  );
};

export default Admin;

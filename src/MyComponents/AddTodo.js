import React from "react";
import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Name or Number cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3> Create New Contact </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlfor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="Name"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Number" className="form-label">
            Number
          </label>
          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success m-4">
          New Contact{" "}
        </button>
      </form>
    </div>
  );
};

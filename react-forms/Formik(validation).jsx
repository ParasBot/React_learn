import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "User name cannot be empty";
  }
  if (!values.remark) {
    errors.remark = "Comment cannot be empty";
  }
  if (values.rating < 1 || values.rating > 5) {
    errors.rating = "Rating must be between 1 and 5";
  }
  return errors;
};

export default function Comments({ addNewComment }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: 5,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addNewComment(values); // Pass the new comment to the parent component
      resetForm(); // Reset the form after submission
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Leave your comment here!</h1>
        <br />
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        ) : null}
        <br />
        <br />
        <label htmlFor="remark">Comment: </label>
        <textarea
          name="remark"
          id="remark"
          value={formik.values.remark}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Write your remarks here"
        ></textarea>
        {formik.touched.remark && formik.errors.remark ? (
          <div style={{ color: "red" }}>{formik.errors.remark}</div>
        ) : null}
        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="rating"
          name="rating"
        />
        {formik.touched.rating && formik.errors.rating ? (
          <div style={{ color: "red" }}>{formik.errors.rating}</div>
        ) : null}
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

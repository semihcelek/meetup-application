import { Field, Form, Formik } from "formik";
import React from "react";
import { createPost } from "../services/post-service";
import { useUserStore } from "../store/userStore";

const NewPost = () => {
  const user = useUserStore((state) => state.user);

  const handleSubmit = async (values, { setSubmitting }) => {
    const response = await createPost(values, user);
    console.log(response);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>title:</label>
          <Field name="title" type="text" />

          <label>content:</label>
          <Field name="content" type="textarea" />
          <button type="submit">Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewPost;

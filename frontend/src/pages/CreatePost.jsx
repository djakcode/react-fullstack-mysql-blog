import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CreatePost = () => {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      setPosts(response.data);
    });
  };

  return (
    <div className="post-container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form-container">
          <label htmlFor="title">Title:</label>
          <ErrorMessage name="title" component={"span"} />
          <Field className="input-field" name="title" placeholder="Title" />
          <label htmlFor="title">Post:</label>
          <ErrorMessage name="postText" component={"span"} />
          <Field className="input-field" name="postText" placeholder="Post" />
          <label htmlFor="title">Username:</label>
          <ErrorMessage name="username" component={"span"} />
          <Field
            className="input-field"
            name="username"
            placeholder="username"
          />

          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Formik form submitted:", values);
    alert("Registration successful!");
    resetForm();
    setSubmitting(false);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Register (Formik Form)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "15px" }}>
              <label>Username:</label>
              <Field
                type="text"
                name="username"
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Email:</label>
              <Field
                type="email"
                name="email"
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Password:</label>
              <Field
                type="password"
                name="password"
                style={{ display: "block", width: "100%", padding: "8px" }}
              />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ padding: "10px 20px", cursor: "pointer" }}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
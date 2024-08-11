import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .max(30, "Max 30 symbols")
    .required("This field is required"),
  email: Yup.string()
    .min(5, "Too short! Min 5 symbols")
    .max(30, "Max 30 symbols")
    .email("Must be a valid email")
    .required("This field is required"),
  password: Yup.string()
    .min(5, "Too short! Min 5 symbols")
    .max(30, "Max 30 symbols")
    .required("This field is required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </div>
        <div>
          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";

const UserSchema = Yup.object().shape({
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

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
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
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}

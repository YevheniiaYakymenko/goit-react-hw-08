import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

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
      <Form className={css.form}>
        <div className={css.wrap}>
          <label>Email</label>
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.wrap}>
          <label>Password</label>
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage className={css.error} name="password" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

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
      <Form className={css.form}>
        <div className={css.wrap}>
          <label>Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.wrap}>
          <label>Email</label>
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.wrap}>
          <label>Password</label>
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}

// react12@mail.com 1234567890

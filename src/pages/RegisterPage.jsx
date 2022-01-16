import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "../Styles/pages/LoginPage.css";
import { UserContext } from "../Contexts/UserContext";
const RegisterPage = () => {
  return (
    <div className="login-page">
      <div className="LoginPageTitle">Register</div>
      <LoginForm />
    </div>
  );
};
const LoginForm = () => {
  const { setUsername } = useContext(UserContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <input
        type="username"
        name="name"
        className="emailFeild logininput"
        placeholder="Username"
        {...register("email", {
          required: "Username is required.",
        })}
      />
      <ErrorMessage
        errors={errors}
        name="username"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p className="error-message" key={type}>
                  {message}
                </p>
              ))
            : null;
        }}
      />

      <input
        type="email"
        name="email"
        className="emailFeild logininput"
        placeholder="Email"
        {...register("email", {
          required: "Email field  is required.",
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid Email Address.",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p className="error-message" key={type}>
                  {message}
                </p>
              ))
            : null;
        }}
      />
      <input
        {...register("password", {
          required: "Password field  is required.",
          minLength: {
            value: 8,
            message: "Password should be at least 8 characters long",
          },
          pattern: {
            value:
              /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,})/,
            message:
              "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.",
          },
        })}
        type="password"
        name="password"
        className="passwordFeild logininput"
        placeholder="Password"
      />
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p className="error-message" key={type}>
                  {message}
                </p>
              ))
            : null;
        }}
      />
      <button type="submit">Register</button>
      <p className="with-google">Continue with Google</p>
    </form>
  );
};

export default RegisterPage;

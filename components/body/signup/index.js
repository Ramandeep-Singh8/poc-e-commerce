import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import BackButton from "../../../common/button/BackButton";
function SignupPage() {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (e) => {
    e.preventDefault, alert("SUCCESS!");
  };
  const onError = (errors, e) => console.log("errorsssss", errors, e);
  return (
    <div>
      {" "}
      <main className="form-signin text-center mt-5">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h1 className="h3 mb-3 fw-normal">Signup</h1>
          <div className="form-floating">
            <input
              type="name"
              name="username"
              {...register("username")}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              id="floatingInput"
              placeholder=""
            />
            <label htmlFor="floatingInput">Username</label>
            <div className="invalid-feedback">{errors.username?.message}</div>
          </div>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword")}
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Confirm Password</label>
            <div className="invalid-feedback">
              {errors.confirmPassword?.message}
            </div>
          </div>
          <span>Sigup as..</span>
          <div className="mb-3 ">
            <label className="mx-2">
              <input type="radio" name="role" value="admin" /> Admin
            </label>
            <label className="mx-2">
              <input type="radio" name="role" value="user" /> User
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
          <BackButton />
        </form>
      </main>
    </div>
  );
}

export default SignupPage;

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../../../src/features/user/userSlice";
import BackButton from "../../../../common/button/BackButton";
function UserLoginPage() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const router = useRouter();
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault;
    dispatch(
      login({
        email: email,
        loggedIn: true,
        role: "user",
        
      })
    ),
      router.push("/dashboard/user");
  };
  const onError = (errors, e) => console.log("errors", errors, e);
  return (
    <div className="container-fluid">
      <main className="form-signin text-center mt-5">
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h1 className="h3 mb-3 fw-normal">User Signin</h1>

          <div className="form-floating">
            <input
              type="email"
              name="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Password</label>
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <div className="mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <span>or</span>
          <Link href={"/signup"}>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
          </Link>
          <BackButton />
        </form>
      </main>
    </div>
  );
}

export default UserLoginPage;

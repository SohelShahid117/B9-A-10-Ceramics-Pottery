import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

const Registration = () => {
  const { createUser } = useContext(authContext);
  console.log(createUser);
  const [registerErr, setRegisterErr] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("registration is working");

    const form = new FormData(e.currentTarget);
    console.log(form);
    const email = form.get("email");
    const username = form.get("username");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, username, photo, password);

    const checked = e.target.terms.checked;
    console.log(checked);
    if (password.length < 6) {
      return setRegisterErr("password should be >=6 character");
    } else if (!/[A-Z][a-z]/.test(password)) {
      return setRegisterErr(
        "at least one uppercase and one lower case character"
      );
    } else if (!checked) {
      return setRegisterErr("accept our terms & conditions");
    }
    setRegisterErr("");
    setSuccess("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = { email, username, password, photo };
        console.log(user);

        //CREATE User
        fetch(`http://localhost:3000/createUser`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        })
          .then((res) => res.json)
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert("user database e insert hoise");
            }
          });

        sendEmailVerification(result.user).then(() => {
          alert("check your verified email");
        });
        if (result.user.emailVerified) {
          setSuccess("registration success.");
        } else {
          alert("check your email to verification");
        }
      })
      .catch((err) => {
        console.log(err);
        setRegisterErr(err.message);
      });
  };
  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration now!</h1>
          <p className="p-6 bg-orange-100 my-5">
            Your password must be at least 6 characters in length and contain at
            least one uppercase letter, one lowercase letter and at least one
            number.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                name="photo"
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered w-[93%]"
                  required
                />
                <button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="w-[5%] -ml-5"
                >
                  {/* Show */}
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="flex">
              <input type="checkbox" name="terms" id="" />
              <label htmlFor="terms">Accept our terms & conditions</label>
              <br />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="px-5">
            <p className="mx-2">
              Already have an account?Go to
              <Link to="/login" className="btn btn-primary ml-2">
                Login
              </Link>
            </p>
          </div>
          {registerErr && <h2 className="text-red-700">{registerErr}</h2>}
          {success && <h1 className="text-green-600">{success}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Registration;

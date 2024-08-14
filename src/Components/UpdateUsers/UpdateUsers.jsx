import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { authContext } from "../../Provider/AuthProvider";
import Users from "./../Users/Users";

const UpdateUsers = () => {
  const { createUser } = useContext(authContext);
  const [registerErr, setRegisterErr] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});

  const { _id } = useParams();
  console.log("update-->", _id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getOneUser/${_id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setUser(res.data);
      })
      .catch((data) => console.log(data));
  }, [_id]);
  console.log(user);

  const handleUpdateRegister = (e) => {
    e.preventDefault();
    console.log("registration is working");
    const form = e.target;
    const email = form.email.value;
    const username = form.username.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // const form = new FormData(e.currentTarget);
    // console.log(form);
    // const email = form.get("email");
    // const username = form.get("username");
    // const photo = form.get("photo");
    // const password = form.get("password");
    console.log(email, username, photo, password);
    const updateUser = { email, username, photo, password };
    console.log(updateUser);

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
        // const user = { email };
        // console.log(user);

        //Update User
        fetch(`http://localhost:3000/updateOneUser/${_id}`, {
          // http://localhost:3000/updateOneUser/66b8f04d733d8fc73b4b052a
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updateUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount) {
              alert("user update data insert to database!!!");
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
          <h1 className="text-5xl font-bold">Update Registration Info!</h1>
          <p className="p-6 bg-orange-100 my-5">
            Your password must be at least 6 characters in length and contain at
            least one uppercase letter, one lowercase letter and at least one
            number.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
          <form className="card-body" onSubmit={handleUpdateRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                defaultValue={user.email}
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
                defaultValue={user.username}
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
                defaultValue={user.photo}
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
                  defaultValue={user.password}
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
              <button className="btn btn-primary">Update Register A/C</button>
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

export default UpdateUsers;

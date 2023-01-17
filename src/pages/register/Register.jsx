import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate();
  //login user handle
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then((result) => {
      const user = result.user
      console.log(user);
      toast.success('User create successful')
      navigate('/')
      form.reset()
      //create user database
            fetch("http://localhost:5000/users", {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({email}),
            })
    })
    .catch(error => {
      console.log(error);
      toast.error('Email is alreadry register')
    })
  };

  
  return (
    <div className="px-5">
      <h2 className="text-2xl font-semibold text-center mb-3 mt-10">Register</h2>
      <div className="flex justify-center items-center bg-base-200 border border-gray-200 mb-10 w-full sm:w-8/12 md:w-7/12 lg:w-4/12 mx-auto">
        <div className="w-full px-10 mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input w-full text-sm outline-none border border-gray-300"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input w-full text-sm outline-none border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <button className="btn bg-sky-500 hover:bg-sky-600 border-0 w-full">Register</button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500 mb-10">
            Already have an account?{" "}
            <Link className="text-sky-600 font-semibold text-sm" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const LoginForm = () => {
    return (
      <>
        <main>
          <section className="section font-secondary">
            <div className="container mx-auto">
              <div className="flex content-center items-center justify-center mt-40">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-gray-600 text-sm font-bold">
                          Sign in with
                        </h6>
                      </div>
                      <div className="btn-wrapper text-center">
                        <button
                          className="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          <img
                            alt="..."
                            className="w-5 mr-1"
                            src={require("../assets/img/google.svg").default}
                          />
                          Google
                        </button>
                      </div>
                      <hr className="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-gray-500 text-center mb-3 font-bold">
                        <small>Or sign in with credentials</small>
                      </div>
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          ></label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Email"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          ></label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Password"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              id="customCheckLogin"
                              type="checkbox"
                              className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                              style={{ transition: "all .15s ease" }}
                            />
                            <span className="ml-2 text-sm font-semibold text-gray-700">
                              Remember me
                            </span>
                          </label>
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-800 text-white active:bg-gray-700 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-1/2">
                      <a
                        href="/"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300"
                      >
                        <small>Forgot password?</small>
                      </a>
                    </div>

                    <div className="w-1/2 text-right text-gray-300 ">
                      <small>
                        Not registered?{" "}
                        <button
                          className="text-gray-600 hover:text-gray-500"
                          onClick={() => setIsLogin(false)}
                        >
                          Create account{" "}
                        </button>{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  };
  const SignUpForm = () => {
    return (
      <>
        <main>
          <section className="section font-secondary">
            <div className="container mx-auto">
              <div className="flex content-center items-center justify-center mt-40">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-gray-600 text-sm font-bold">
                          Create an account{" "}
                        </h6>
                      </div>
                      <div className="btn-wrapper text-center">
                        <button
                          className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          <img
                            alt="..."
                            className="w-5 mr-1"
                            src={require("../assets/img/google.svg").default}
                          />
                          Google
                        </button>
                      </div>
                      <hr className="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <form>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          ></label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Email"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          ></label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Password"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          ></label>
                          <input
                            type="password"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Confirm password"
                            style={{ transition: "all .15s ease" }}
                          />
                        </div>
                        <div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              id="customCheckLogin"
                              type="checkbox"
                              className="form-checkbox border-0 rounded text-gray-800 ml-1 mr-2 w-5 h-5"
                              style={{ transition: "all .15s ease" }}
                            />
                            <small> I accept the</small>
                            <span className=" ml-1 text-sm font-semibold text-gray-700">
                              Terms and Conditions
                            </span>
                          </label>
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-800 text-white active:bg-gray-700 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                          >
                            Creare an account{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className=" mt-6">
                    <div className=" text-center text-gray-300 ">
                      <small>
                        Already have an account?{" "}
                        <button
                          className="text-gray-600 hover:text-gray-500"
                          onClick={() => setIsLogin(true)}
                        >
                          Login here{" "}
                        </button>{" "}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  };
  return <>{isLogin ? <LoginForm /> : <SignUpForm />}</>;
};

export default Login;

import authLogo from "../../assets/others/authentication2.png";
import authBgLogo from "../../assets/others/authentication.png";

const Signup = () => {
  return (
    <div
      style={{ backgroundImage: `url(${authBgLogo})` }}
      className="bg-cover bg-center min-h-screen flex items-center justify-center px-4"
    >
      <div className="bg-white shadow-2xl rounded-xl w-full max-w-5xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
          <img src={authLogo} alt="Login Visual" className="w-80" />
        </div>

        {/* Right Side Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 space-y-6">
          <h1 className="text-2xl font-bold text-center text-black">Signup</h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full mt-1"
              />
            </div>

            {/* Submit Button */}
            <button className="btn w-full bg-gradient-to-r from-[#D1A054] to-[#D1A054] text-white">
              Sign In
            </button>
          </form>

          {/* Register & Social Login */}
          <div className="text-center text-sm text-gray-600">
            <p>
              Already Have an Account?{" "}
              <span className="text-[#D1A054] font-semibold cursor-pointer">
                Go to Sign In
              </span>
            </p>
            <p className="my-2">Or sign in with</p>
            <div className="flex justify-center gap-4 text-xl">
              <button className="btn btn-circle btn-outline">F</button>
              <button className="btn btn-circle btn-outline">G</button>
              <button className="btn btn-circle btn-outline">GH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

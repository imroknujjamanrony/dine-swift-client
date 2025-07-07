import authLogo from "../../assets/others/authentication2.png";
const Signup = () => {
  return (
    <div>
      {/* gif */}
      <div>
        <img src={authLogo} alt="" />
      </div>
      {/* input field */}
      <div>
        <h1 className="text-black text-2xl font-bold">Login</h1>
        <form>
          <label for="email">Email</label>
          <input type="text" name="email" id="" />
        </form>
      </div>
    </div>
  );
};

export default Signup;

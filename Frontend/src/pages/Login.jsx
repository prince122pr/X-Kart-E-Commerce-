import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asyncloginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const loginHandler = async (data) => {
    let user = await dispatch(asyncloginUser(data));
    console.log(user);  

    if (user === null) {
      toast.error("Invalid Credentials!");
      reset();
    } else {
      navigate("/");
      
      toast.success("Welcome back!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-4 mt-16">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full max-w-[500px] bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl text-white rounded-3xl px-10 py-12 flex flex-col gap-6"
      >
        <h2 className="text-3xl font-bold text-center">Log In 🔐</h2>
        <p className="text-center text-sm text-white/80">
          Access your dashboard
        </p>

        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-lg font-semibold">
            Enter your email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="john@example.com"
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="******"
            className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <button
          type="submit"
          className="mt-6 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl "
        >
          Submit
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-400 hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

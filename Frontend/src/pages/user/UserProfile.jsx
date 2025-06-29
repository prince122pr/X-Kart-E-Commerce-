import { useForm } from "react-hook-form";
import { asynclogoutUser, deleteUser, updateUser } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserLock } from "react-icons/fa";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { user } = useSelector((store) => store.userReducer);

  const logoutHandler = () => {
    dispatch(asynclogoutUser());
    navigate("/");
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    },
  });

  const UserProfileHandler = (data) => {
    dispatch(updateUser(user.id, data));
    toast.success("Profile Updated Successfully!", {
      position: "bottom-right",
    });
  };

  const deleteHandler = () => {
    dispatch(deleteUser(user.id));
    navigate("/login");
  };

  return (
    <div className="relative mt-10">
      {user ? (
        <>
          {/* 🔥 Extreme Profile Summary Card */}
          <div className="w-full mx-auto max-w-[900px] mb-10 p-6 rounded-3xl shadow-xl border border-white/20 bg-white/10 backdrop-blur-lg text-white">
            <h1 className="text-4xl font-extrabold text-green-400 mb-2">👋 Welcome, {user?.username}</h1>
            <p className="text-lg text-white/80">📧 {user?.email}</p>
            <hr className="my-4 border-white/20" />
            <p className="text-white/60">
              You can update your personal info, change your password, or delete your account below.
            </p>
          </div>

          {/* 🔧 Profile Update Form */}
          <form
            onSubmit={handleSubmit(UserProfileHandler)}
            className="w-full mx-auto max-w-[900px] bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl text-white rounded-3xl px-10 py-12 flex flex-col gap-6"
          >
            <h2 className="text-4xl mb-4 font-bold text-center">Update Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-lg font-semibold">
                  Full Name
                </label>
                <input
                  {...register("username")}
                  id="username"
                  type="text"
                  placeholder="John Doe"
                  className="px-4 py-3 rounded-md bg-gray-700 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-lg font-semibold">
                  Email
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
            </div>

            {/* 🧨 Delete Button */}
            <button
              type="button"
              onClick={deleteHandler}
              className="cursor-pointer bg-red-500 w-fit hover:bg-red-600 font-semibold py-2 px-4 text-lg text-black rounded-2xl"
            >
              Delete Account
            </button>

            {/* 🎯 Action Buttons */}
            <div className="flex gap-4 justify-center pt-2">
              <button
                type="submit"
                className="cursor-pointer bg-green-500 hover:bg-green-600 text-white font-light py-2 px-6 text-xl rounded-2xl"
              >
                Update
              </button>

              <button
                type="button"
                className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-light py-2 px-6 text-xl rounded-2xl"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          </form>
        </>
      ) : (
        // 🚫 Access Denied Screen
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4">
          <FaUserLock size={80} className="text-red-500" />
          <h2 className="text-3xl font-bold text-white">Access Denied</h2>
          <p className="text-white/70 max-w-md text-lg">
            You need to be logged in to view your profile and manage account settings.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl text-lg transition duration-300"
          >
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;

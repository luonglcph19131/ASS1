import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

type AccountInfo = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [accountInfo, setAccountInfo] = useState<AccountInfo>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/admin/products");
  }, []);

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // validate show error
    try {
      const { data } = await axios.post(
        "https://hoadv-nodejs.vercel.app/auth/login",
        accountInfo
      );
      toast.success("Login Successfull!");
      localStorage.setItem("token", data.token);
      navigate("/admin/products");
    } catch (error) {
      toast.error("Login Failed! - " + error);
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Đăng nhập
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmitForm}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                value={accountInfo.email}
                onChange={handleChangeForm}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mật khẩu
              </label>
              <input
                value={accountInfo.password}
                onChange={handleChangeForm}
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Lưu tài khoản
                  </label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Quên mật khẩu?
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Đăng nhập
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Chưa có tài khoản?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Đăng kí
              </a>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
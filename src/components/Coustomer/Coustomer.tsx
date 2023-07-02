/* eslint-disable react-hooks/exhaustive-deps */
import { RxCrossCircled } from "react-icons/rx";
import { Input } from "@mantine/core";
import { useFormik } from "formik";
import NavigationHeader from "../Layout/Header";
import axios from "axios";
import * as Yup from "yup";

export default function Coustomer() {
  const userLoginAPI = process.env.REACT_APP_API_DEVICES_COUNT;

  const userLogin = async (formData: any) => {
    try {
      const response = await axios.post(`${userLoginAPI}`, formData);
      console.log(response, response);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      userName: "khalilahmed",
      password: "asdfasdf",
      confirmPassword: "asdfasdf",
    },
    validationSchema: Yup.object().shape({
      userName: Yup.string()
        .min(5, "User Name with 5 characters or More")
        .max(65, "Enter project name with 65 characters or less")
        .required("Please enter project name")
        // .matches(/^[a-zA-Z0-9]*$/, "No special characters are allowed")
        .matches(/^\S*$/, "No white spaces are allowed"),
      password: Yup.string()
        .min(1, "Enter password with 1 characters or more")
        .max(20, "Enter password with 20 characters or less")
        .required("Please enter your password")
        // .matches(/^[a-zA-Z0-9]*$/, "No special characters are allowed")
        .matches(/^\S*$/, "No white spaces are allowed"),
      confirmPassword: Yup.string()
        .min(1, "Enter confirm password with 1 characters or more")
        .max(20, "Enter confirm password with 20 characters or less")
        .required("Please enter your confirm password")
        // .matches(/^[a-zA-Z0-9]*$/, "No special characters are allowed")
        .matches(/^\S*$/, "No white spaces are allowed"),
    }),
    onSubmit: (values) => {
      console.log(values, "values");
      // userLogin(values);
    },
    enableReinitialize: true,
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    formik;
  // console.log(errors);

  return (
    <>
      <NavigationHeader />
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input.Wrapper
                label="User Name"
                error={
                  errors.userName && touched.userName ? (
                    <div className="p-1 rounded-md flex items-center bg-red-100">
                      <RxCrossCircled className="text-red-400 mr-2" size={20} />
                      <p className="text-black font-bold">{errors.userName}</p>
                    </div>
                  ) : null
                }
              >
                <Input
                  // icon={<IconAt />}
                  placeholder="username"
                  radius="md"
                  name="userName"
                  size="md"
                  value={values.userName}
                  onChange={handleChange}
                  error={
                    errors.userName && touched.userName ? (
                      <div className="p-1 rounded-md flex items-center bg-red-100">
                        <RxCrossCircled
                          className="text-red-400 mr-2"
                          size={20}
                        />
                        <p className="text-black font-bold">
                          {errors.userName}
                        </p>
                      </div>
                    ) : null
                  }
                />
              </Input.Wrapper>
            </div>

            <div>
              <Input.Wrapper
                label="Password"
                error={
                  errors.password && touched.password ? (
                    <div className="p-1 rounded-md flex items-center bg-red-100">
                      <RxCrossCircled className="text-red-400 mr-2" size={20} />
                      <p className="text-black font-bold">{errors.password}</p>
                    </div>
                  ) : null
                }
              >
                <Input
                  // icon={<IconAt />}
                  placeholder="password"
                  name="password"
                  radius="md"
                  value={values.password}
                  type="password"
                  size="md"
                  onChange={handleChange}
                  error={
                    errors.password && touched.password ? (
                      <div className="p-1 rounded-md flex items-center bg-red-100">
                        <RxCrossCircled
                          className="text-red-400 mr-2"
                          size={20}
                        />
                        <p className="text-black font-bold">
                          {errors.password}
                        </p>
                      </div>
                    ) : null
                  }
                />
              </Input.Wrapper>
            </div>
            <div>
              <Input.Wrapper
                label="confirm Password"
                error={
                  errors.confirmPassword && touched.confirmPassword ? (
                    <div className="p-1 rounded-md flex items-center bg-red-100">
                      <RxCrossCircled className="text-red-400 mr-2" size={20} />
                      <p className="text-black font-bold">
                        {errors.confirmPassword}
                      </p>
                    </div>
                  ) : null
                }
              >
                <Input
                  // icon={<IconAt />}
                  placeholder="confirm password"
                  name="confirmPassword"
                  radius="md"
                  value={values.confirmPassword}
                  type="password"
                  size="md"
                  onChange={handleChange}
                  error={
                    values.password !== values.confirmPassword ||
                    (errors.confirmPassword && touched.confirmPassword) ? (
                      <div className="p-1 rounded-md flex items-center bg-red-100">
                        <RxCrossCircled
                          className="text-red-400 mr-2"
                          size={20}
                        />
                        <p className="text-black font-bold">
                          {errors.confirmPassword}
                        </p>
                      </div>
                    ) : null
                  }
                />
              </Input.Wrapper>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={values.password !== values.confirmPassword}
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?
            <a
              href="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

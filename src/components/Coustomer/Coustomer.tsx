/* eslint-disable react-hooks/exhaustive-deps */
import { RxCrossCircled } from "react-icons/rx";
import { Input } from "@mantine/core";
import { useFormik } from "formik";
import NavigationHeader from "../Layout/Header";
import axios from "axios";
import * as Yup from "yup";
import SecuredRoute from "../Layout/SecuredRoute";
import { DateInput } from "@mantine/dates";
import { useState } from "react";

export default function Customer() {
  const userLoginAPI = process.env.REACT_APP_API_DEVICES_COUNT;

  const [projectEndDate, setProjectEndDate] = useState<Date | null>();

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
      firstName: "khalil",
      lastName: "ahmed",
      dateOfbirth: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .min(5, "User Name with 5 characters or More")
        .max(65, "Enter project name with 65 characters or less")
        .required("Please enter project name")
        .matches(/^\S*$/, "No white spaces are allowed"),
      userName: Yup.string()
        .min(5, "User Name with 5 characters or More")
        .max(65, "Enter project name with 65 characters or less")
        .required("Please enter project name")
        .matches(/^\S*$/, "No white spaces are allowed"),
      dateOfbirth: Yup.string()
        .min(5, "User Name with 5 characters or More")
        .max(65, "Enter project name with 65 characters or less")
        .matches(/^[0-9]+$/, "Phone must only contain numbers")
        .max(15, "Enter phone number between 10-15 digits "),
      phoneNumber: Yup.string()
        .min(5, "User Name with 5 characters or More")
        .max(65, "Enter project name with 65 characters or less")
        .matches(/^[0-9]+$/, "Phone must only contain numbers")
        .max(15, "Enter phone number between 10-15 digits "),
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
    <SecuredRoute>
      <>
        <NavigationHeader />
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Add Customers here
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input.Wrapper
                  label="First Name"
                  error={
                    errors.firstName && touched.firstName ? (
                      <div className="p-1 rounded-md flex items-center bg-red-100">
                        <RxCrossCircled
                          className="text-red-400 mr-2"
                          size={20}
                        />
                        <p className="text-black font-bold">
                          {errors.firstName}
                        </p>
                      </div>
                    ) : null
                  }
                >
                  <Input
                    // icon={<IconAt />}
                    placeholder="First Name"
                    name="firstName"
                    radius="md"
                    value={values.firstName}
                    type="password"
                    size="md"
                    onChange={handleChange}
                    error={
                      errors.firstName && touched.firstName ? (
                        <div className="p-1 rounded-md flex items-center bg-red-100">
                          <RxCrossCircled
                            className="text-red-400 mr-2"
                            size={20}
                          />
                          <p className="text-black font-bold">
                            {errors.firstName}
                          </p>
                        </div>
                      ) : null
                    }
                  />
                </Input.Wrapper>
              </div>
              <div>
                <Input.Wrapper
                  label="Last Name"
                  error={
                    errors.lastName && touched.lastName ? (
                      <div className="p-1 rounded-md flex items-center bg-red-100">
                        <RxCrossCircled
                          className="text-red-400 mr-2"
                          size={20}
                        />
                        <p className="text-black font-bold">
                          {errors.lastName}
                        </p>
                      </div>
                    ) : null
                  }
                >
                  <Input
                    // icon={<IconAt />}
                    placeholder="Last Name"
                    name="lastName"
                    radius="md"
                    value={values.lastName}
                    type="password"
                    size="md"
                    onChange={handleChange}
                    error={
                      errors.lastName && touched.lastName ? (
                        <div className="p-1 rounded-md flex items-center bg-red-100">
                          <RxCrossCircled
                            className="text-red-400 mr-2"
                            size={20}
                          />
                          <p className="text-black font-bold">
                            {errors.lastName}
                          </p>
                        </div>
                      ) : null
                    }
                  />
                </Input.Wrapper>
              </div>
              <div className="pt-2">
                <label htmlFor="dateofbirth">Date of birth</label>
                <div className="relative max-w-sm ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className=" border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                    placeholder="Select date"
                    name=""
                  />
                </div>
              </div>
              <div className="">
                <Input.Wrapper
                  label="Phone Number"
                  className="w-full h-14"
                  error={
                    errors.phoneNumber && touched.phoneNumber ? (
                      <div className="p-1 rounded-md flex items-center bg-red-100">
                        <RxCrossCircled
                          className="text-red-400 mr-2"
                          size={20}
                        />
                        <p className="text-black font-bold">
                          {errors.phoneNumber}
                        </p>
                      </div>
                    ) : null
                  }
                >
                  <Input
                    placeholder="phone"
                    name="phone"
                    onChange={handleChange}
                    value={values.phoneNumber}
                    error={
                      errors.phoneNumber && touched.phoneNumber ? (
                        <div>{errors.phoneNumber}</div>
                      ) : null
                    }
                  />
                </Input.Wrapper>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    </SecuredRoute>
  );
}

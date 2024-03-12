import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NoFooterLayout from "../NoFooterLayout";
import signChair from "../../public/sign_chair.png";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create an account",
};

export default function Signup() {
  return (
    <NoFooterLayout>
      <div className="">
        <div className="relative flex flex-col items-center gap-x-[88px] gap-y-10 md:flex-row">
          <Image
            src={signChair}
            alt="chair"
            style={ {objectFit: "cover"} }
            className="w-full object-cover md:h-screen md:w-1/2"
          />

          <div className="m-auto flex w-[87%] flex-col gap-y-7 text-left md:w-2/4">
            <div>
              <h1 className="font-poppins mb-6 text-4xl font-medium">
                Sign up
              </h1>
              <p>
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-secondary">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="mb-10 text-left md:mb-auto md:w-3/4">
              <form action="" className="form-control gap-7">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="input m-1 rounded-none border-0 border-b border-gray-400 px-0 focus:outline-none"
                />
                <input
                  required
                  type="text"
                  placeholder="Username"
                  className="input m-1 rounded-none border-0 border-b border-gray-400 px-0 focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="input m-1 rounded-none border-0 border-b border-gray-400 px-0 focus:outline-none"
                />
                <input
                  required
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className="input m-1 rounded-none border-0 border-b border-gray-400 px-0 focus:outline-none"
                />

                <label htmlFor="priv" className="label justify-normal gap-x-3">
                  <input
                    required
                    type="checkbox"
                    name=""
                    id="priv"
                    className="checkbox"
                  />
                  <span className="label-text text-base font-normal">
                    I agree with{" "}
                    <Link href="" className="font-semibold">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="" className="font-semibold">
                      Terms of Use
                    </Link>
                  </span>
                </label>

                <button
                  type="submit"
                  className="btn btn-primary text-base text-white hover:bg-transparent hover:text-primary"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </NoFooterLayout>
  );
}

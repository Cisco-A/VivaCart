import Image from "next/image";
import Link from "next/link";

export default function Signup() {
    const UNSPLASH = "https://plus.unsplash.com/premium_photo-1683288446489-71997f24255d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
      <nav>
        <Image 
        src={"/logo.svg"}
        alt="logo"
        width={180}
        height={37}
        />
      </nav>
      <main>
        <div className="flex max-w-screen-xl justify-center items-center">
          <Image className="mr-32 rounded-br-[200px]" src={UNSPLASH} width={805} height={781} alt="" />

          <div className="w-1/3">
            <h1>Create an account</h1>
            <p>Enter your details below</p>

            <form action="" className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input m-1 rounded-none border-0 border-b border-gray-400"
              />
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="input m-1 rounded-none border-0 border-b border-gray-400"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="input m-1 rounded-none border-0 border-b border-gray-400"
              />
              <button
                type="submit"
                className="hover:secondary-focus btn btn-primary"
              >
                Create Account
              </button>

              <p>
                Already have account?{" "}
                <Link href={"/login"} className="link">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

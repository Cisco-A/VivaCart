import Image from "next/image";


export default function Login() {
    return(
        <>
            <div>
                <Image 
                src={""}
                width={0}
                height={0}
                alt=""
                />

                <div>
                    <h1>Log in to Exclusive</h1>
                    <p>Enter your details below</p>

                    <form action="" className="">
                        <input type="text" placeholder="Email or Phone Number" />
                        <input type="password" name="" id="" placeholder="Password" />
                        <button type="submit" className="btn-primary">Log in</button>
                        <p>Forgot Password?</p>
                    </form>
                </div>
            </div>
        </>
    );
}
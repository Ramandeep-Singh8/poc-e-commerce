import React, { useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../../../src/features/user/userSlice";
import { useRouter } from "next/router";
function WelcomePage() {
  const user = useSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (user?.role == "admin") {
      router.push("/dashboard/admin");
    } else if (user?.role == "user") {
      router.push("/dashboard/user");
    } else {
      router.push("/");
    }
  }, [user]);
  return (
    <div className="d-grid shadow-lg gap-3 p-5  text-center w-auto">
      <div className="">
        <h1>Welcome..</h1>
      </div>
      <div>
        <Link href={"/login/user"}>
          <button className="w-100 btn btn-md btn-primary">User Login</button>
        </Link>
      </div>
      <div>
        <Link href={"/login/admin"}>
          <button className="w-100 btn btn-md btn-primary ">Admin Login</button>
        </Link>
      </div>
    </div>
  );
}
export default WelcomePage;

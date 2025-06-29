import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Main from "@/components/templates/index/main/Main";
import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import { cookies } from "next/headers";


export default async  function Home() {

  connectToDB()
  const isCookies = cookies().get("token")
  const user = await authUser()

  return (
    <>
    <Navbar isCookies={isCookies ? true : false} user={user} />
    <Main />
    <Footer />
    </>
  );
}

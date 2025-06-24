import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Main from "@/components/templates/index/main/Main";
import connectToDB from "@/configs/db";
import { cookies } from "next/headers";


export default async  function Home() {

  connectToDB()
  const isCookies = cookies().get("token")

  return (
    <>
    <Navbar isCookies={isCookies ? true : false} />
    <Main />
    <Footer />
    </>
  );
}

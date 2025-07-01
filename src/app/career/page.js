import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Overview from "@/components/templates/career/overview/Overview";
import Position from "@/components/templates/career/position/Position";
import React from "react";

function page() {
  return (
    <>
      <main id="content">
        <Breadcrumb title={"حرفه و اشتغال"} />
        <Overview />
        <Position />
      </main>
    </>
  );
}

export default page;

import { getServerSession } from "next-auth";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";

const page = async () => {
  const session = await getServerSession(options);
  console.log(session);
  return <div>page</div>;
};

export default page;

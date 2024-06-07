"use client";

import { SessionProvider } from "next-auth/react";
import React, { FC } from "react";
import { iSession } from "./types";

const SessionProviderScreen: FC<iSession> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderScreen;

import { Document } from "mongoose";
import { ReactNode } from "react";

export interface iAgent {
  name: string;
  email: string;
  role: string;
  password: string;
}
export interface iAgentData extends iAgent, Document {}

export interface iSession {
  children: ReactNode;
}

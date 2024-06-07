import { Schema, models, model } from "mongoose";
import { iAgentData } from "../types";

const agentModel = new Schema<iAgentData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      default: "agent",
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const Agent = models.Agent || model<iAgentData>("Agent", agentModel);

export default Agent;

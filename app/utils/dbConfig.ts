import { connect } from "mongoose";

export const dbConfig = async () => {
  try {
    await connect(process.env.MONGODB_STRING as string).then(() => {
      console.log("DB connected successfully ❤️🚀🚀❤️");
    });
  } catch (error) {
    console.error("error: ", error);
  }
};

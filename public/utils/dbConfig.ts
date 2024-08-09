import { connect } from "mongoose";
import { ONLINE_DB } from "./constant";
export const dbConfig = async () => {
  try {
    return await connect(ONLINE_DB as string).then(() =>
      console.log("DB connected")
    );
  } catch (error) {
    throw error;
  }
};

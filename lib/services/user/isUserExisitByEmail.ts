import { findUserByEmail } from "./findUserByEmail";

export async function isUserExisitByEmail(email: string) {
  try {
    console.log({ email });

    const user = await findUserByEmail(email);
    return user ? true : false;
  } catch (error) {
    throw error;
  }
}

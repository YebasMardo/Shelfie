import { Client, Account, Avatars } from "react-native-appwrite";

const client = new Client()
  .setProject("6a0d181a003041096af7")
  .setPlatform("dev.netninja.shelfie");

export const account = Account(client);
export const avatars = Avatars(client);

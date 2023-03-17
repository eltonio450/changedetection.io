import { client } from "../utils/client";

export const fetchMainPage = (url: string) => {
  return client.get(url);
};

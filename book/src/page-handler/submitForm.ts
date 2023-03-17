import { client } from "../utils/client";

export const submitForm = (url: string, body: string) => client.post(url, body);

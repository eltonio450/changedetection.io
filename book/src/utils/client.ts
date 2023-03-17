import axios from "axios";
import { cookie } from "./cookie";

export const client = axios.create({
  headers: {
    Referer: "https://tickets.rugbyworldcup.com/fr",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    cookie,
  },
});

import { cookie } from "../main";
import fetch from "node-fetch";

export const refreshToken = (token: string) => async () => {
  const result = await fetch("https://tickets.rugbyworldcup.com/fr", {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language":
        "fr-FR,fr;q=0.9,en-GB;q=0.8,en;q=0.7,en-US;q=0.6,es;q=0.5",
      "referrer-policy": "strict-origin-when-cross-origin",
      "sec-ch-ua":
        '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      cookie: token,
      Referer: "https://tickets.rugbyworldcup.com/fr",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  });
  console.log("refresh, status:", result.status);
};

export const refreshTokenPeriodically = (period =  20 * 60 * 1000) => setInterval(refreshToken(cookie), period);

export const ping = () =>
  setInterval(
    () =>
      console.log(
        "keepalive:",
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      ),
    60 * 1000
  );

import { client } from "./client";

export const refreshToken = async () => {
  const result = await client.get("https://tickets.rugbyworldcup.com/fr");
  console.log("refresh, status:", result.status);
};

export const refreshTokenPeriodically = (period = 20 * 60 * 1000) =>
  setInterval(refreshToken, period);

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

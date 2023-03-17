import { fetchMainPage } from "./fetch-main-page";

it("test basic page fetch", async () => {
  const url = "https://tickets.rugbyworldcup.com/fr/revente_france_uruguay";
  const page = await fetchMainPage(url);
  expect(page.status).toBe(200);
});

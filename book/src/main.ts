import { fetchMainPage } from "./fetch-main-page";

const token = "";
const url = "";

const main = async () => {
  const initialPage = fetchMainPage(url, token);
};

main().then(console.log);

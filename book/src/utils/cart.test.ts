import fs from "fs";
import HTMLParser from "node-html-parser";
import { extractCartInfo } from "./cart";

it("test cart extraction", async () => {
  const file = fs.readFileSync("./data/cart/cart-example.html");

  await extractCartInfo(file.toString());
}, 10000);

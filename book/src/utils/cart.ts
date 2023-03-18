import { client } from "./client";
import fs from "fs";
import HTMLParser from "node-html-parser";
import Turndown from 'turndown';
import { WebClient } from '@slack/web-api';

const turndown = new Turndown({});

import { IncomingWebhook } from '@slack/webhook';
const url = process.env.SLACK_WEBHOOK_URL;

const webhook = new IncomingWebhook("https://hooks.slack.com/services/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");


  
export const getCart = async () => {
  const response = await client.get(
    "https://tickets.rugbyworldcup.com/fr/cart"
  );

  fs.writeFileSync("cart-" + new Date() + ".html", response.data);
  return response;
};

export const extractCartInfo = async (cart: string) => {
    console.log("analyzing cart...")
  const parsedCartInfo = HTMLParser.parse(cart);
  const productDetails = parsedCartInfo.querySelector("div.cart-content-list")
  if(!productDetails) {
    console.log("nothing found!")
    return
  }
  //console.log(productDetails?.toString());
  const markdown = turndown.turndown(productDetails?.toString())
  //console.log(markdown)

  console.log("sending to slack...")

  await webhook.send({
    text: markdown,
    
  })
};

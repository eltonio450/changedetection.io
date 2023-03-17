var HTMLParser = require("node-html-parser");

export type NoSelectionBody = {
  nb_tickets_selector: {
    quantity: "0";
  };
  tickets_selected: "";
  form_build_id: string;
  form_token: string;
  form_id: string;
  _triggering_element_name: string;
  _triggering_element_value: "Ajouter à mon panier";
};

export const selectionPageToBody = (page: string, form: string, token: string) => {
  const parsedPage = HTMLParser.parse(page);
  const parsedForm = HTMLParser.parse(form)

  

  const selectedTickets = parsedForm.querySelector(
    'input[name^="selected_tickets_"]'
  );
  const selectedTicketsName = selectedTickets?._attrs?.name;
  const selectedTickersValue = selectedTickets?._attrs?.value;

  const regex = /"_triggering_element_name":"([a-zA-Z_0-9]+)"/;
  const match = regex.exec(page);

  const form_token = token
  const form_id = parsedForm.querySelector('input[name="form_id"]')._attrs.value;
  const form_build_id = parsedForm.querySelector('input[name="form_build_id"]')._attrs
    .value;
  return {
    form_token,
    form_id,
    form_build_id,
    //@ts-ignore
    _triggering_element_name: match[1],
    nb_tickets_selector: {
      quantity: "0",
    },
    [selectedTicketsName]: selectedTickersValue,
    tickets_selected: "",
    _triggering_element_value: "Ajouter à mon panier",
  };
};

export const noSelectionPageToBody = (page: string, form: string, token: string) => {
  const parsedPage = HTMLParser.parse(page);
  const parsedForm = HTMLParser.parse(form)

  const regex = /"_triggering_element_name":"([a-zA-Z_0-9]+)"/;
  const match = regex.exec(page);

  const form_token = token
  const form_id = parsedForm.querySelector('input[name="form_id"]')._attrs.value;
  const form_build_id = parsedForm.querySelector('input[name="form_build_id"]')._attrs
    .value;
  return {
    form_token,
    form_id,
    form_build_id,
    //@ts-ignore
    _triggering_element_name: match[1],
    nb_tickets_selector: {
      quantity: "0",
    },
    tickets_selected: "",
    _triggering_element_value: "Ajouter à mon panier",
  };
};

export const pageToFormBody = (page: string) => {
  const root = HTMLParser.parse(page);

const scriptData = root.querySelector("script[data-big-pipe-replacement-for-placeholder-with-id^='callback=hubber_resale.product_lazy_builder%3AaddToCartWithResaleForm']")
const formText = JSON.parse(scriptData.childNodes[0])[3].data

const token = scriptData._attrs['data-big-pipe-replacement-for-placeholder-with-id'].match(/token=(.+)/)

console.log(token)
  if (root.querySelector('input[name^="selected_tickets_"]')) {
    console.log("ok il y a");
    return selectionPageToBody(page, formText, token[1]);
  } else {
    return noSelectionPageToBody(page, formText, token[1]);
  }
};

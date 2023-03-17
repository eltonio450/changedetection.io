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

export const selectionPageToBody = (page: string) => {
  const root = HTMLParser.parse(page);

  const selectedTickets = root.querySelector(
    'input[name^="selected_tickets_"]'
  );
  const selectedTicketsName = selectedTickets?._attrs?.name;
  const selectedTickersValue = selectedTickets?._attrs?.value;

  const regex = /"_triggering_element_name":"([a-zA-Z_0-9]+)"/;
  const match = regex.exec(page);

  const form_token = root.querySelector('input[name="form_token"]')._attrs
    .value;
  const form_id = root.querySelector('input[name="form_id"]')._attrs.value;
  const form_build_id = root.querySelector('input[name="form_build_id"]')._attrs
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

export const noSelectionPageToBody = (page: string) => {
  const root = HTMLParser.parse(page);

  const regex = /"_triggering_element_name":"([a-zA-Z_0-9]+)"/;
  const match = regex.exec(page);

  const form_token = root.querySelector('input[name="form_token"]')._attrs
    .value;
  const form_id = root.querySelector('input[name="form_id"]')._attrs.value;
  const form_build_id = root.querySelector('input[name="form_build_id"]')._attrs
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
  if (root.querySelector('input[name^="selected_tickets_"]')) {
    console.log("ok il y a");
    return selectionPageToBody(page);
  } else {
    return noSelectionPageToBody(page);
  }
};

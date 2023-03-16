import * as fs from "fs";
import { noSelectionPageToBody } from "./page-to-form-body";

it("no selection page", () => {
  const page = fs.readFileSync("./data/ang-arg/page.html").toString();
  console.log(page);
  expect(noSelectionPageToBody(page)).toEqual({
    nb_tickets_selector: {
      quantity: "0",
    },
    tickets_selected: "",
    form_build_id: "form-9cNWwfHNR75CVKgFrqWLpoIpSal6Y37RfsgaViADUC0",
    form_token: "5vMNSg5zQaYnkhDEP6FvZzDdhMCEvHRcXgL_t57qttY",
    form_id: "hubber_resale_add_to_cart_form",
    _triggering_element_name: "add_pack31672",
    _triggering_element_value: "Ajouter à mon panier",
  });
});

it("selection page", () => {
  const page = fs.readFileSync("./data/irl-eco/page.html").toString();
  console.log(page);
  expect(noSelectionPageToBody(page)).toEqual({
    nb_tickets_selector: {
      quantity: "0",
    },
    selected_tickets_31690: "83009,83010",
    tickets_selected: "",
    form_build_id: "form-0soa4ZGFEtEuOhBfn2x7xPbUZVGM3CdipJPHn81OEvI",
    form_token: "5vMNSg5zQaYnkhDEP6FvZzDdhMCEvHRcXgL_t57qttY",
    form_id: "hubber_resale_add_to_cart_form",
    _triggering_element_name: "add_pack31690",
    _triggering_element_value: "Ajouter à mon panier",
  });
});

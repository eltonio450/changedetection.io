import * as fs from "fs"
import { pageToBody } from "./page-to-request"

it("test", () => {

    const page = fs.readFileSync("./data/ang-arg/page.html").toString()
    console.log(page)
    expect(pageToBody(page)).toEqual({
        "nb_tickets_selector": {
            "quantity": "0"
          },
          "tickets_selected": "",
          "form_build_id": "form-9cNWwfHNR75CVKgFrqWLpoIpSal6Y37RfsgaViADUC0",
          "form_token": "5vMNSg5zQaYnkhDEP6FvZzDdhMCEvHRcXgL_t57qttY",
          "form_id": "hubber_resale_add_to_cart_form",
          "_triggering_element_name": "add_pack31672",
          "_triggering_element_value": "Ajouter à mon panier",
    })
}
)
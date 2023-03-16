import { submitForm } from "./submitForm";

const body = {
  nb_tickets_selector: {
    quantity: "0",
  },
  price_slider: ["300,300", "300,300"],
  sort: ["price-asc", "price-asc"],
  tickets_selected: "",
  form_build_id: "form-9cNWwfHNR75CVKgFrqWLpoIpSal6Y37RfsgaViADUC0",
  form_token: "5vMNSg5zQaYnkhDEP6FvZzDdhMCEvHRcXgL_t57qttY",
  form_id: "hubber_resale_add_to_cart_form",
  _triggering_element_name: "add_pack31672",
  _triggering_element_value: "Ajouter à mon panier",
  _drupal_ajax: "1",
  ajax_page_state: {
    theme: "wrc8",
    theme_token: "",
    libraries:
      "addtoany/addtoany.front,ajax_loader/ajax_loader.throbber,big_pipe/big_pipe,bootstrap_barrio/form,bootstrap_barrio/global-styling,bootstrap_barrio/links,commerce_cart/cart_block,commerce_product/update_product_url,core/drupal.active-link,core/drupal.tableresponsive,core/jquery.form,hubber/hubber_filter_slider,hubber/hubber_init,hubber/hubber_loader,hubber/hubber_quantity_selector,hubber/noscript,hubber/product_header_actions,hubber/product_map_toggles,hubber/venue_config_display,hubber_cart/hubber_cart_timeout,hubber_partners/hubber_partners,hubber_reference8/global-styling,hubber_reference8/input.number.operators,hubber_reference8/select2.theme,hubber_resale/hubber_resale_seat_mode,hubber_resale/resale_display,hubber_seat_mode/hubber_seat_build,hubber_tag/hubber_tag_events,rwc/cookie,rwc_home/home_tag_events,rwc_qualifio/popin,select2/select2,select2/select2.i18n.fr,system/base,wrc8/admincss.admincss,wrc8/global-styling",
  },
};

const token =
  "SSESSd01ad0e956e3c977e4fabd0c735f147f=uN9K4PFY5ZrjjQsnfz45t1PJ8LpJ4VlXvPL%2CcgzanMfk4CTB";

console.log(body);

const querystring = require("querystring");

let queryString = querystring.stringify(body);

const promise = submitForm(
  "https://tickets.rugbyworldcup.com/fr/revente_angleterre_argentine?ajax_form=1&_wrapper_format=drupal_ajax",
  token,
  queryString
);

promise.then((response) => response.text()).then(console.log);

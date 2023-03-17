import { client } from "../utils/client";
import * as querystring from "querystring"


const baseBody = {
  "nb_tickets_selector":{
    "quantity":"0"
  },
  "price_slider":[
    "0,5000",
    "0,5000"
  ],
  "sort":[
    "price-asc",
    "price-asc"
  ],
  "selected_tickets_31852":"83430",
  "tickets_selected":"",
  "form_build_id":"form-6rLWcJ2EjoKJCP3pLcpJh-P-re2cLzox_EoUEGnFqek",
  "form_id":"hubber_resale_add_to_cart_form",
  "_triggering_element_name":"add_pack31852",
  "_triggering_element_value":"Ajouter à mon panier",
  "_drupal_ajax":"1",
  "ajax_page_state":{
    "theme":"wrc8",
    "theme_token":"",
    "libraries":"addtoany/addtoany.front,ajax_loader/ajax_loader.throbber,big_pipe/big_pipe,bootstrap_barrio/form,bootstrap_barrio/global-styling,bootstrap_barrio/links,commerce_cart/cart_block,commerce_product/update_product_url,core/drupal.tableresponsive,core/jquery.form,hubber/hubber_filter_slider,hubber/hubber_init,hubber/hubber_loader,hubber/hubber_quantity_selector,hubber/noscript,hubber/product_header_actions,hubber/product_map_toggles,hubber/venue_config_display,hubber_cart/hubber_cart_timeout,hubber_partners/hubber_partners,hubber_reference8/global-styling,hubber_reference8/input.number.operators,hubber_reference8/select2.theme,hubber_resale/hubber_resale_seat_mode,hubber_resale/resale_display,hubber_seat_mode/hubber_seat_build,hubber_tag/hubber_tag_events,rwc/cookie,rwc_home/home_tag_events,rwc_qualifio/popin,select2/select2,select2/select2.i18n.fr,system/base,wrc8/admincss.admincss,wrc8/global-styling"
  }
}
export const submitForm = (url: string, body: {}) => {
  const newBody = {
    ...baseBody,
    ...body
  }

  console.log(JSON.stringify(newBody, null, 2))
  const formDataQueryString = querystring.stringify(newBody);
  console.log(formDataQueryString);


 return client.post(url + "?ajax_form=1&_wrapper_format=drupal_ajax", body);

}

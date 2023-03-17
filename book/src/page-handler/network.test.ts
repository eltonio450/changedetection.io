import { getCart } from "../utils/cart";
import { client } from "../utils/client";
import { fetchMainPage } from "./fetch-main-page";
import { submitForm } from "./submitForm";

it("test basic page fetch", async () => {
  const url = "https://tickets.rugbyworldcup.com/fr/revente_france_uruguay";
  const page = await fetchMainPage(url);
  expect(page.status).toBe(200);
});


it("fetch carte test", async () => {
    const page = await getCart();
   // console.log(page.data)
    expect(page.status).toBe(200);
  });
  
it("post data", async () => {

    const body = "nb_tickets_selector%5Bquantity%5D=0&price_slider=216%2C216&sort=price-asc&price_slider=216%2C216&sort=price-asc&selected_tickets_31852=83430&tickets_selected=&form_build_id=form-6rLWcJ2EjoKJCP3pLcpJh-P-re2cLzox_EoUEGnFqek&form_id=hubber_resale_add_to_cart_form&_triggering_element_name=add_pack31852&_triggering_element_value=Ajouter+%C3%A0+mon+panier&_drupal_ajax=1&ajax_page_state%5Btheme%5D=wrc8&ajax_page_state%5Btheme_token%5D=&ajax_page_state%5Blibraries%5D=addtoany%2Faddtoany.front%2Cajax_loader%2Fajax_loader.throbber%2Cbig_pipe%2Fbig_pipe%2Cbootstrap_barrio%2Fform%2Cbootstrap_barrio%2Fglobal-styling%2Cbootstrap_barrio%2Flinks%2Ccommerce_cart%2Fcart_block%2Ccommerce_product%2Fupdate_product_url%2Ccore%2Fdrupal.tableresponsive%2Ccore%2Fjquery.form%2Chubber%2Fhubber_filter_slider%2Chubber%2Fhubber_init%2Chubber%2Fhubber_loader%2Chubber%2Fhubber_quantity_selector%2Chubber%2Fnoscript%2Chubber%2Fproduct_header_actions%2Chubber%2Fproduct_map_toggles%2Chubber%2Fvenue_config_display%2Chubber_cart%2Fhubber_cart_timeout%2Chubber_partners%2Fhubber_partners%2Chubber_reference8%2Fglobal-styling%2Chubber_reference8%2Finput.number.operators%2Chubber_reference8%2Fselect2.theme%2Chubber_resale%2Fhubber_resale_seat_mode%2Chubber_resale%2Fresale_display%2Chubber_seat_mode%2Fhubber_seat_build%2Chubber_tag%2Fhubber_tag_events%2Crwc%2Fcookie%2Crwc_home%2Fhome_tag_events%2Crwc_qualifio%2Fpopin%2Cselect2%2Fselect2%2Cselect2%2Fselect2.i18n.fr%2Csystem%2Fbase%2Cwrc8%2Fadmincss.admincss%2Cwrc8%2Fglobal-styling"
    const data = await submitForm("https://tickets.rugbyworldcup.com/fr/revente_france_namibie?ajax_form=1&_wrapper_format=drupal_ajax", "body")
    console.log(data.data)
   // const call = client.post()
})
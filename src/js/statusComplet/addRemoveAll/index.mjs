import {
    createrDomElement
} from "../../createrQuest/index.mjs";
import {
    styleAllSelectbtn
} from "../../styleComponents/styleComponents.mjs";
import {
    controlStateofStatus
} from "../index.mjs";


export function AddStatusSelectAllQuerys(action, element_select_all) {
    const url_checked_icon = './src/assets/icon-check.svg';

    if (element_select_all.hasChildNodes()) {

        if (action == 'toggleAll')
            AddAllStatusComplet('remove');

        element_select_all.firstChild?.remove();

        element_select_all.setAttribute('class', styleAllSelectbtn.all_select_off);

    } else {

        if (action == 'toggleAll')
            AddAllStatusComplet('add');

        element_select_all.setAttribute('class', styleAllSelectbtn.all_select_on);

        createrDomElement('img', element_select_all, 'icon_all_select', '', url_checked_icon);
    }
}


export function AddAllStatusComplet(action) {
    const all_checked_btn = document.getElementsByName('buttons_status');

    for (let index = 0; index < all_checked_btn.length; index++) {

        if (action == 'remove') {

            if (!all_checked_btn[index].getAttribute('data-status')) continue;

            controlStateofStatus('remove', index, all_checked_btn)

        } else {

            if (all_checked_btn[index].getAttribute('data-status')) continue;

            controlStateofStatus('add', index, all_checked_btn)
        }
    }


}
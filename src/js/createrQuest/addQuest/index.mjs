import { styleQuestComponents } from "../../styleComponents/styleComponents.mjs";

import {
    createrDomElement
} from "../createElements/index.mjs";

export function AddElementQuest() {
    const list_quest = document.getElementById('list_quest');
    const length_list = list_quest.childElementCount + 1;

    // criando o elemnto li...
    createrDomElement('li', list_quest, `container_questy_index-${length_list}`, styleQuestComponents.li_quest);

    // criando o elemnto button checked...
    const questy_element = document.getElementById(`container_questy_index-${length_list}`);

    createrDomElement('button', questy_element, `btn_checked_index-${length_list}`, styleQuestComponents.button_checked, '', '', 'buttons_status');

    // criando a menssgem...
    const input_value = document.getElementById('search').value;

    createrDomElement('span', questy_element, `span_message_index-${length_list}`, styleQuestComponents.span_message, '', input_value);


    // criando o elemnto button close...
    createrDomElement('button', questy_element, `btn_closed_index-${length_list}`, styleQuestComponents.button_closed);


    // crinado elemento clean
    const url_closed_icon = './src/assets/icon-cross.svg';
    const button_closed_questy = document.getElementById(`btn_closed_index-${length_list}`);

    createrDomElement('img', button_closed_questy, `icon_closed_index-${length_list}`, '', url_closed_icon);
}
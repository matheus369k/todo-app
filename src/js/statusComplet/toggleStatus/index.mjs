import { IconsObjectQuest } from "../../createObjectQuest/index.mjs";
import {
    createrDomElement
} from "../../createrQuest/createElements/index.mjs";
import {
    styleAllSelectbtn,
    styleQuestComplet,
    styleQuestComponents
} from "../../styleComponents/styleComponents.mjs";

export function controlStateofStatus(action, index, all_checked_btn) {
    const button_checked_quest = document.getElementById(`btn_checked_index-${index+1}`);
    const span_message_quest = document.getElementById(`span_message_index-${index+1}`);
    const index_quest = button_checked_quest.getAttribute('id').split('-')[1] - 1;
    const url_checked_icon = './src/assets/icon-check.svg';
    const object_list_quest = JSON.parse(localStorage.listQuests);

    if (action == 'remove') {

        button_checked_quest.firstChild.remove()

        span_message_quest.setAttribute('class', styleQuestComponents.span_message);
        button_checked_quest.setAttribute('class', styleQuestComponents.button_checked);

        button_checked_quest.removeAttribute('data-status')

        object_list_quest[index_quest].buttonChecked.status = false;
        object_list_quest[index_quest].buttonChecked.style = styleQuestComponents.button_checked;
        object_list_quest[index_quest].spanMessage.style = styleQuestComponents.span_message;

        if (btn_select_all.firstChild) {

            btn_select_all.firstChild.remove();

            btn_select_all.setAttribute('class', styleAllSelectbtn.all_select_off);
        }

    } else {

        button_checked_quest.setAttribute('class', styleQuestComplet.button_checked_complet);
        span_message_quest.setAttribute('class', styleQuestComplet.span_message_complet);

        button_checked_quest.setAttribute('data-status', 'active')

        object_list_quest[index_quest].buttonChecked.status = true;
        object_list_quest[index_quest].buttonChecked.style = styleQuestComplet.button_checked_complet;
        object_list_quest[index_quest].spanMessage.style = styleQuestComplet.span_message_complet;


        if (all_checked_btn) {

            createrDomElement('img', all_checked_btn[index], `icon_checked_index-${index+1}`, '', url_checked_icon);

        } else {

            createrDomElement('img', button_checked_quest, `icon_checked_index-${index+1}`, '', url_checked_icon);

        }
    }

    localStorage.setItem('listQuests', JSON.stringify(object_list_quest))

}
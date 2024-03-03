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
    const url_checked_icon = './src/assets/icon-check.svg';

    if (action == 'remove') {

        button_checked_quest.firstChild.remove()

        span_message_quest.setAttribute('class', styleQuestComponents.span_message);
        button_checked_quest.setAttribute('class', styleQuestComponents.button_checked);

        button_checked_quest.removeAttribute('data-status')

        if (btn_select_all.firstChild) {

            btn_select_all.firstChild.remove();

            btn_select_all.setAttribute('class', styleAllSelectbtn.all_select_off);
        }

    } else {

        button_checked_quest.setAttribute('data-status', 'active')

        button_checked_quest.setAttribute('class', styleQuestComplet.button_checked_complet);
        span_message_quest.setAttribute('class', styleQuestComplet.span_message_complet);


        if (all_checked_btn) {

            createrDomElement('img', all_checked_btn[index], `icon_checked_index-${index+1}`, '', url_checked_icon);

        } else {

            createrDomElement('img', button_checked_quest, `icon_checked_index-${index+1}`, '', url_checked_icon);

        }
    }

}
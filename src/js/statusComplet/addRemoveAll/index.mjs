import {
    createrDomElement
} from "../../createrQuest/createElements/index.mjs";
import {
    styleQuestComplet, styleQuestComponents
} from "../../styleComponents/styleComponents.mjs";

export function AddAllStatusComplet(action) {
    const all_checked_btn = document.getElementsByName('buttons_status');
    const url_checked_icon = './src/assets/icon-check.svg';

    for (let index = 0; index < all_checked_btn.length; index++) {
        const button_checked_quest = document.getElementById(`btn_checked_index-${index+1}`);
        const span_message_questy = document.getElementById(`span_message_index-${index+1}`);

        if (action == 'remove') {

            if (!all_checked_btn[index].getAttribute('data-status')) continue;

            button_checked_quest.removeChild(button_checked_quest.firstChild)

            span_message_questy.setAttribute('class', styleQuestComponents.span_message);
            button_checked_quest.setAttribute('class', styleQuestComponents.button_checked);

            button_checked_quest.removeAttribute('data-status')

        } else {

            if (all_checked_btn[index].getAttribute('data-status')) continue;

            button_checked_quest.setAttribute('data-status', 'active')

            button_checked_quest.setAttribute('class', styleQuestComplet.button_checked_complet);
            span_message_questy.setAttribute('class', styleQuestComplet.span_message_complet);

            // ciando o elemento checked...
            createrDomElement('img', all_checked_btn[index], `icon_checked_index-${index+1}`, '', url_checked_icon);
        }
    }


}
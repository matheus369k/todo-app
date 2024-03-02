import {
    createrDomElement
} from "../../createrQuest/createElements/index.mjs";
import {
    styleAllSelectbtn,
    styleQuestComplet,
    styleQuestComponents
} from "../../styleComponents/styleComponents.mjs";

export function checkedQuest() {
    document.getElementsByName('buttons_status').forEach((element, index) => {
        element.addEventListener('click', (e) => {
            e.stopPropagation()

            const button_checked_quest = document.getElementById(`btn_checked_index-${index+1}`);
            const span_message_questy = document.getElementById(`span_message_index-${index+1}`);
            const btn_select_all = document.getElementById('btn_select_all');
            const url_checked_icon = './src/assets/icon-check.svg';


            // verificar se deve remover ou adicionar o status de completa...
            if (button_checked_quest.getAttribute('data-status')) {

                button_checked_quest.removeChild(button_checked_quest.firstChild)

                span_message_questy.setAttribute('class', styleQuestComponents.span_message);
                button_checked_quest.setAttribute('class', styleQuestComponents.button_checked);

                button_checked_quest.removeAttribute('data-status')

                if (btn_select_all.firstChild) {
                    
                    btn_select_all.removeChild(btn_select_all.firstChild);

                    btn_select_all.setAttribute('class', styleAllSelectbtn.all_select_off);
                }

            } else {

                button_checked_quest.setAttribute('data-status', 'active')

                button_checked_quest.setAttribute('class', styleQuestComplet.button_checked_complet);
                span_message_questy.setAttribute('class', styleQuestComplet.span_message_complet);

                // ciando o elemento checked...
                createrDomElement('img', button_checked_quest, `icon_checked_index-${index+1}`, '', url_checked_icon);
            }
        })
    })
}
import {
    createrDomElement
} from "../createrQuest/createElements/index.mjs";
import {
    styleQuestComplet,
    styleQuestComponents
} from "../styleComponents/styleComponents.mjs";

export function checkedQuest() {
    document.getElementsByName('buttons_status').forEach((element, index) => {
        element.addEventListener('click', (e) => {            
            e.stopImmediatePropagation()

            console.log(document.getElementsByName('buttons_status'))
            const icon_checked = document.getElementById(`icon_checked_index-${index+1}`);
            const button_checked_quest = document.getElementById(`btn_checked_index-${index+1}`);
            const span_message_questy = document.getElementById(`span_message_index-${index+1}`);
            const url_checked_icon = './src/assets/icon-check.svg';
            console.log(button_checked_quest)


            // verificar se deve remover ou adicionar o status de completa...
            if (button_checked_quest.getAttribute('data-status') == 'active') {
                console.log('true')

                button_checked_quest.removeChild(icon_checked)

                span_message_questy.setAttribute('class', styleQuestComponents.span_message);
                button_checked_quest.setAttribute('class', styleQuestComponents.button_checked);

                button_checked_quest.removeAttribute('data-status')

            } else {
                console.log('false')

                button_checked_quest.setAttribute('data-status', 'active')

                button_checked_quest.setAttribute('class', styleQuestComplet.button_checked_complet);
                span_message_questy.setAttribute('class', styleQuestComplet.span_message_complet);

                // ciando o elemento checked...
                createrDomElement('img', button_checked_quest, `icon_checked_index-${index+1}`, '', url_checked_icon);
            }
        })
    })
}
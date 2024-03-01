import {
    createrDomElement
} from "../createrQuest/createElements/index.mjs";
import {
    styleQuestComplet,
    styleQuestComponents
} from "../styleComponents/styleComponents.mjs";

export function checkedQuest() {
    document.querySelectorAll('#list_quest>li>button').forEach((element, index) => {
        element.addEventListener('click', (e) => {
            e.stopPropagation()

            const icon_checked = document.getElementById(`icon_checked_index-${index-1}`);
            const button_checked_questy = document.getElementById(`btn_checked_index-${index-1}`);
            const span_message_questy = document.getElementById(`span_message_index-${index-1}`);
            const url_checked_icon = './src/assets/icon-check.svg';
            console.log(button_checked_questy)


            // verificar se deve remover ou adicionar o status de completa...
            if (button_checked_questy.getAttribute('data-status')) {

                icon_checked.remove()

                span_message_questy.setAttribute('class', styleQuestComponents.span_message);
                button_checked_questy.setAttribute('class', styleQuestComponents.button_checked);

                button_checked_questy.removeAttribute('data-status')

            } else {

                button_checked_questy.setAttribute('data-status', 'active')

                button_checked_questy.setAttribute('class', styleQuestComplet.button_checked_complet);
                span_message_questy.setAttribute('class', styleQuestComplet.span_message_complet);

                // ciando o elemento checked...
                createrDomElement('img', button_checked_questy, `icon_checked_index-${index-1}`, '', url_checked_icon);
            }

        })
    })
}
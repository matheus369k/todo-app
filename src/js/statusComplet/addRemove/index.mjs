import {
    controlStateofStatus
} from "../index.mjs";

export function checkedQuest() {
    document.getElementsByName('buttons_status').forEach((element, index) => {
        element.addEventListener('click', (e) => {
            const button_checked_quest = document.getElementById(`btn_checked_index-${index+1}`);

            if (button_checked_quest.getAttribute('data-status')) {

                controlStateofStatus('remove', index);

            } else {

                controlStateofStatus('add', index);
            }

            e.stopPropagation();
        })
    })
}
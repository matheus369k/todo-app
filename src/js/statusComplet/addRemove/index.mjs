import {
    AddStatusSelectAllQuerys,
    controlStateofStatus
} from "../index.mjs";

export function checkedQuest() {
    const all_quest = document.getElementsByName('buttons_status');
    const element_select_all = document.getElementById('btn_select_all');

    all_quest.forEach((element, index) => {
        element.addEventListener('click', (e) => {
            const button_checked_quest = document.getElementById(`btn_checked_index-${index+1}`);
            const all_list = document.querySelectorAll('#list_quest>li>[name="buttons_status"]>img');

            if (button_checked_quest.getAttribute('data-status')) {

                controlStateofStatus('remove', index);

            } else {

                controlStateofStatus('add', index);

                
                if (all_quest.length == all_list.length + 1)
                    AddStatusSelectAllQuerys('', element_select_all);
            }

            e.stopPropagation();
        })
    })
}
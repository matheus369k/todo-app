import {
    AddStatusSelectAllQuerys,
    controlStateofStatus
} from "../index.mjs";

export function checkedQuest() {
    const all_quest = document.getElementsByName('buttons_status');
    const element_select_all = document.getElementById('btn_select_all');
    console.log(all_quest)

    all_quest.forEach((element, index) => {
        element.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            const button_checked_quest = document.getElementById(`btn_checked_index-${index+1}`);

            if (button_checked_quest.getAttribute('data-status')) {

                controlStateofStatus('remove', index);

            } else {

                controlStateofStatus('add', index);

            }

            const all_list = document.querySelectorAll('#list_quest>li>[name="buttons_status"]>img');

            if (
                all_quest.length == all_list.length ||
                (
                    all_quest.length - 1 == all_list.length &&
                    element_select_all.hasChildNodes()
                )
            ) {
                AddStatusSelectAllQuerys('', element_select_all);
            }
        })
    })

}
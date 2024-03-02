import {
    AddElementQuest
} from "./createrQuest/addQuest/index.mjs";
import {
    createrDomElement
} from "./createrQuest/createElements/index.mjs";
import {
    AddAllStatusComplet
} from "./statusComplet/addRemoveAll/index.mjs";
import {
    checkedQuest
} from './statusComplet/addRemove/index.mjs';
import {
    styleAllSelectbtn
} from "./styleComponents/styleComponents.mjs";

const btn_submit = document.getElementById('btn_submit');
const btn_select_all = document.getElementById('btn_select_all');

btn_submit.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    AddElementQuest();
    checkedQuest(btn_select_all);

    if (btn_select_all.firstChild) {

        btn_select_all.removeChild(btn_select_all.firstChild);

        btn_select_all.setAttribute('class', styleAllSelectbtn.all_select_off);
    }
})

btn_select_all.addEventListener('click', AddStatusSelectAllQuerys)

function AddStatusSelectAllQuerys(action) {
    const url_checked_icon = './src/assets/icon-check.svg';

    if (btn_select_all.hasChildNodes() || action == 'remove') {

        btn_select_all.removeChild(btn_select_all.firstChild);

        btn_select_all.setAttribute('class', styleAllSelectbtn.all_select_off);

        AddAllStatusComplet('remove');

    } else {
        AddAllStatusComplet('add');

        btn_select_all.setAttribute('class', styleAllSelectbtn.all_select_on);

        createrDomElement('img', btn_select_all, 'icon_all_select', '', url_checked_icon);
    }
}
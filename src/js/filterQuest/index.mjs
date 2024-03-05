import {
    renderListQuest
} from "../renderListQuest/index.mjs";

export function filterQuest(filter) {
    const filter_option = filter.getAttribute('name');

    renderListQuest('re-render', filter_option);
}
import {
    renderListQuest
} from "../renderListQuest/index.mjs";

import {
    filterElements
} from "../styleComponents/styleComponents.mjs";

export function filterQuest(filter) {
    const filter_option = filter.getAttribute('name');
    const old_filter_element = document.querySelector('[data-filter-status=active]');

    old_filter_element?.removeAttribute('data-filter-status');

    old_filter_element.setAttribute('class', filterElements.element_default);

    filter.setAttribute('data-filter-status', 'active');

    filter.setAttribute('class', filterElements.element_active);

    renderListQuest('re-render', filter_option);
}
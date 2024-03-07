import {
    renderListQuest
} from "../renderListQuest/index.mjs";

import {
    filterElements,
} from "../styleComponents/styleComponents.mjs";

import {
    toggleSingleStyleElementThemer
} from "../themer/index.mjs";

export function filterQuest(filter) {
    const filter_option = filter.getAttribute('name');
    const old_filter_element = document.querySelector('[data-filter-status=active]');

    if (localStorage.themer == 'dark') {
        toggleSingleStyleElementThemer(
            old_filter_element,
            filterElements.element_active,
            filterElements.element_default_dark
        );
        toggleSingleStyleElementThemer(
            filter,
            filterElements.element_default_dark,
            filterElements.element_active
        );

    } else {
        toggleSingleStyleElementThemer(
            old_filter_element,
            filterElements.element_active,
            filterElements.element_default_light
        );

        toggleSingleStyleElementThemer(
            filter,
            filterElements.element_default_light,
            filterElements.element_active
        );

    }

    old_filter_element?.removeAttribute('data-filter-status');

    filter.setAttribute('data-filter-status', 'active');

    renderListQuest('re-render', filter_option);
}
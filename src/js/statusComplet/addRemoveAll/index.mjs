import {
    controlStateofStatus
} from "../index.mjs";

export function AddAllStatusComplet(action) {
    const all_checked_btn = document.getElementsByName('buttons_status');

    for (let index = 0; index < all_checked_btn.length; index++) {

        if (action == 'remove') {

            if (!all_checked_btn[index].getAttribute('data-status')) continue;

            controlStateofStatus('remove', index, all_checked_btn)

        } else {

            if (all_checked_btn[index].getAttribute('data-status')) continue;

            controlStateofStatus('add', index, all_checked_btn)
        }
    }


}
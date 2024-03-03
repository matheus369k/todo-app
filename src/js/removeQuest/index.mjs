export function removeElemetsQuest() {
    const all_quest = document.getElementsByName('buttons_close');

    all_quest.forEach(element => {
        element.addEventListener('click', () => {
            const id = element.parentNode.getAttribute('id')
            const all_list = document.getElementById(id).parentNode;
            const object_all_quest = JSON.parse(localStorage.listQuests);

            all_list.removeChild(document.getElementById(id));

            object_all_quest.filter((object, index) => {
                if (object.li.id == id)
                    object_all_quest.splice(index, 1);
            })

            localStorage.setItem('listQuests', JSON.stringify(object_all_quest));
        })
    })
}
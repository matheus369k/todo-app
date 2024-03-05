export function switchAtribute(attributo, index, element, object_all_quest) {
    const att_PartInit = {
        li: element.li.id.split('-')[0],
        buttonChecked: element.buttonChecked[attributo].split('-')[0],
        spanMessage: element.spanMessage[attributo].split('-')[0],
        buttonClose: element.buttonClosed[attributo].split('-')[0],
        iconClose: element.iconsClosed[attributo].split('-')[0]
    }


    object_all_quest[index].li.id = `${att_PartInit.li}-${index+1}`;
    object_all_quest[index].buttonChecked[attributo] = `${att_PartInit.buttonChecked}-${index+1}`;
    object_all_quest[index].spanMessage[attributo] = `${att_PartInit.spanMessage}-${index+1}`;
    object_all_quest[index].buttonClosed[attributo] = `${att_PartInit.buttonClose}-${index+1}`;
    object_all_quest[index].iconsClosed[attributo] = `${att_PartInit.iconClose}-${index+1}`;

    return object_all_quest
}
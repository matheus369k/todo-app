import { createrDomElement } from "../createrQuest/createElements/index.mjs";
import { checkedQuest } from "../statusComplet/addRemove/index.mjs";

if (localStorage.listQuests) {

    const listAllQuest = JSON.parse(localStorage.listQuests)

    for (const quest of listAllQuest) {
        Object.values(quest).map(element => {
            const fother = document.getElementById(element.dad);
                
            createrDomElement(
            element.tagName,
            fother,
            element.id,
            element.style,
            element.url,
            element.text,
            element.name
            )
        })
    }
    checkedQuest();
}
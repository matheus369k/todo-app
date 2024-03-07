export class LiObjectQuest {
    tagName;
    dad;
    id;
    style;
    constructor(
        _tagName,
        _dad,
        _id,
        _style,
    ) {
        this.tagName = _tagName;
        this.dad = _dad;
        this.id = _id;
        this.style = _style;
    }
}

export class ButtonCheckedObjectQuest extends LiObjectQuest {
    dataStatus;
    name;
    status;
    type;
    title;
    constructor(
        _tagName,
        _dad,
        _id,
        _style,
        _name,
        _status,
        _type,
        _title
    ) {
        super()
        this.tagName = _tagName;
        this.dad = _dad;
        this.id = _id;
        this.style = _style;
        this.name = _name;
        this.status = _status;
        this.type = _type;
        this.title = _title;
    }
}

export class SpanMessageObjectQuest extends LiObjectQuest {
    text;
    constructor(
        _tagName,
        _dad,
        _id,
        _style,
        _text
    ) {
        super()
        this.tagName = _tagName;
        this.dad = _dad;
        this.id = _id;
        this.style = _style
        this.text = _text;
    }
}

export class ButtonClosedObjectQuest extends LiObjectQuest {
    name;
    type;   
    title; 
    constructor(
        _tagName,
        _dad,
        _id,
        _style,
        _name,
        _type,
        _title
    ) {
        super();
        this.tagName = _tagName;
        this.dad = _dad;
        this.id = _id;
        this.style = _style;
        this.name = _name;
        this.type = _type;
        this.title = _title
    }
}

export class IconsObjectQuest extends LiObjectQuest {
    url;
    alt;
    constructor(
        _tagName,
        _dad,
        _id,
        _url,
        _alt
    ) {
        super();
        this.tagName = _tagName;
        this.dad = _dad;
        this.id = _id;
        this.url = _url;
        this.alt = _alt;
    }
}

export class QuestObjectAll {
    li;
    buttonChecked;
    spanMessage;
    buttonClosed;
    iconsClosed;
    constructor(
        _li,
        _buttonChecked,
        _spanMessage,
        _buttonClosed,
        _iconsClosed
    ) {
        this.li = _li;
        this.buttonChecked = _buttonChecked;
        this.spanMessage = _spanMessage;
        this.buttonClosed = _buttonClosed;
        this.iconsClosed = _iconsClosed;
    }
}
export class LiObjectQuest {
    tagName;
    dad;
    id;
    style;
    constructor(
        _tagName,
        _dad,
        _id,
        _style
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
    constructor(
        _tagName, _dad, _id, _style, /* _dataStatus, */ _name
    ) {
        super()
        this.tagName = _tagName;
        this.dad = _dad;
        this.id = _id;
        this.style = _style;/* 
        this.dataStatus = _dataStatus; */
        this.name = _name
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
    constructor(
        _tagName,
        _dad,
        _id,
        _style,
        _name
    ) {
        super();
        this.tagName = _tagName;
        this.dad = _dad;
        this.id = _id;
        this.style = _style;
        this.name = _name;
    }
}

export class IconsClosedObjectQuest extends LiObjectQuest {
    url;
    constructor(
        _tagName,
        _dad,
        _id,
        _url
    ) {
        super();
        this.tagName = _tagName;
        this.dad = _dad;
        this.id = _id;
        this.url = _url;
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
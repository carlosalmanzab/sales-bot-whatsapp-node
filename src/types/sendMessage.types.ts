interface BaseMessage {
    messaging_product: string;
    recipient_type: string;
    to: string;
    type: string;
}

interface TextMessage {
    preview_url: boolean;
    body: string;
}

interface ReplyContext {
    message_id: string;
}

interface ReplyButtonAction {
    type: 'reply';
    reply: {
        id: string;
        title: string;
    };
}

interface ListSection {
    title: string;
    rows: {
        id: string;
        title: string;
        description: string;
    }[];
}

interface ListInteractiveMessage<T extends object| undefined> {
    type: 'list';
    header: TextMessage;
    body: TextMessage;
    footer: TextMessage;
    action: {
        button: string;
        sections: ListSection[];
    };
}

interface ReplyButtonInteractiveMessage {
    type: 'button';
    body: TextMessage;
    action: {
        buttons: ReplyButtonAction[];
    };
}

interface BaseInteractiveMessage<T extends ListInteractiveMessage<T> | ReplyButtonInteractiveMessage> {
    messaging_product: string;
    recipient_type: string;
    to: string;
    type: 'interactive';
    interactive: T;
}

type BaseTextMessageType =  BaseMessage & {
    type: 'text';
    text: TextMessage
};

//hight level
export type TextMessageType = BaseTextMessageType;

export type ReplyTextMessage = BaseTextMessageType & ReplyContext;

export type ListInteractiveMessageType = BaseInteractiveMessage<ListInteractiveMessage<undefined>>;

export type ReplyListInteractiveMessageType = BaseInteractiveMessage<ListInteractiveMessage<ReplyContext>>;

export type ReplyButtonInteractiveMessageType = BaseInteractiveMessage<ReplyButtonInteractiveMessage>;

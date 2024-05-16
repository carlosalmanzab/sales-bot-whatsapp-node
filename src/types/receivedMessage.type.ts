export interface WhatsappMessage{
    object: string;
    entry: Entry[];
}

export interface Entry{
    id: string;
    changes: Changes[];
}

export interface Changes {
    value: Value;
    field: string;
}

export interface Value {
    messaging_product: string;
    metadata: Metadata;
    contacts?: Contact[];
    messages?: Message[];
    statuses? : Statuses[];
}

export interface Statuses {
    id: string;
    status: string;
    timestamp: string;
    recipient_id: string;
}

export interface Metadata {
    display_phone_number: string;
    phone_number_id: string;
}

export interface Contact {
    profile: Profile;
    wa_id: string;
}

export interface Profile {
    name: string;
}

export interface Message  {
    context? : Context;
    from: string;
    id: string;
    timestamp: string;
    order: Order;//catalogs
    text?: TextW;//puede ser tipo text
    reaction?: Reaction;
    image?: Image;
    sticker?: Sticker;
    location?: LocationStatic;
    errors?: Errors[];
    type: string;
}

export interface Order{
    catalog_id: string;
    product_items: ProductItems[]
    text: string;
}

export interface ProductItems {
    product_retailer_id: string;
    quantity: string;
    item_price: string;
    currency: string;
}

export interface Context {
    from: string;
    id: string;
}

export interface Errors{
    code: number;
    details: string;
    title: string;
}

export interface TextW {
    body: string;
}

export interface Reaction {
    emoji: string;
    messsage_id: string;
}

export interface Image {
    caption: string;
    mime_type: string;
    sha256: string;
    id: string;
}

export interface Sticker {
    id: string;
    animated: boolean
    mime_type: string;
    sha256: string;
}

export interface LocationStatic {
    latitude: string;
    longitude: string;
    name: string;
    address: string;
}

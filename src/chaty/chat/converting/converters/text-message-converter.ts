
import ConvertedMessage from "../converted-message";
import { HistoryMessageType } from "../../messages/message-type";
import BaseConverter from "../base-converter";
import ChatMessage from "../../messages/chat-message";
import AdditionalMessageHanlder from '../additinal-message-handler'
import { TextMessageContent } from "../../messages/message-content";



export class TextMessageConverter extends BaseConverter {
    supportsType(type: HistoryMessageType, parsedXMLObj: any): boolean {
        return type === HistoryMessageType.Text || type === HistoryMessageType.Url;
    }
    
    convert(parsedXMLObj: any): ConvertedMessage {
        return new TextConvertedMessage(parsedXMLObj);
    }
}


export class TextConvertedMessage extends ConvertedMessage {
    private _converted : ChatMessage;

    constructor(_xmlObj: any){
        super(_xmlObj);

        const message = this.getMetaMessage();
        message.content = new TextMessageContent(this._xmlObj.datadesc);
        this._converted = message;
    }
    
    getConvertedMessage(): ChatMessage {
        return this._converted;
    }

    get additionalMessageHanlder() : AdditionalMessageHanlder{
        return null;
    }
}
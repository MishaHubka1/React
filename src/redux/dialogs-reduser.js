const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alita'},
        {id: 2, name: 'Misha'},
        {id: 3, name: 'Kamalia'},
        {id: 4, name: 'Zeus'},
        {id: 5, name: 'Prometey'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your name is'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

 switch (action.type) {
     case UPDATE_NEW_MESSAGE_BODY:
         return  {...state, newMessageBody: action.body};
     case SEND_MESSAGE:
         let body = state.newMessageBody;
        return {...state, newMessageBody: '', messages: [...state.messages, {id: 6, message: body}]
   };
     default :
         return state;
 }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogsReducer;
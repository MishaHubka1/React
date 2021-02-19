const SEND_MESSAGE = 'network/dialogs/SEND_MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

 switch (action.type) {
     case SEND_MESSAGE:
         let body = action.newMessageBody;
        return {...state, messages: [...state.messages, {id: 6, message: body}]
   };
     default :
         return state;
 }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
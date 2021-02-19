/* import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

let store = {
    _state : {
    profilePage : {
        posts: [
            {id: 1, massage: 'Hi. how are you?', likesCount: 12},
            {id: 2, massage: 'Its mi first post', likesCount: 23}
        ],
        newPostText:  'Start typing'

    },
    dialogsPage : {
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
    },



},
    _callSubscriber () {
        console.log('State changed');
    },

    getState() {
     return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber (this._state);

    }
}


 */

/*export default store;*/

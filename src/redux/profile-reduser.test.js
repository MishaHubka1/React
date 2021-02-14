import React from 'react';
import profileReducer, { addPostActionCreator, deletePost } from "./profile-reduser";

let state = {
    posts: [
        {id: 1, massage: 'Hi. how are you?', likesCount: 12},
        {id: 2, massage: 'Its mi first post', likesCount: 23}
    ]
};

it('new post shood be added', () => {
    //1.test data
    let action = addPostActionCreator("new-test");
    //2.action
    let newState = profileReducer(state, action);
    //3.expectate
   expect (newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    //1.test data
    let action = addPostActionCreator("new-test");
    //2.action
    let newState = profileReducer(state, action);
    //3.expectate
   expect (newState.posts[2].massage).toBe("new-test");
});

it('after seleting length of massages should be decrement', () => {
    //1.test data
    let action = deletePost(1);
    //2.action
    let newState = profileReducer(state, action);
    //3.expectate
   expect (newState.posts.length).toBe(1);
});
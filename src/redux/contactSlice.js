import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from './functions'

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const handlePending = state => {
    return {
        ...state,
        isLoading: true
    };
};

const handleReject = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: action.payload
    };
};

const handleFetchContacts = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: null,
        items: action.payload
    };
};

const handleAddContacts = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: null,
        items: [action.payload, ...state.items]
    };
};

const handleDeleteContacts = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(item =>
            item.id !== action.payload.id)
    };
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleReject,
        [addContact.rejected]: handleReject,
        [deleteContact.rejected]: handleReject,
        [fetchContacts.fulfilled]: handleFetchContacts,
        [addContact.fulfilled]: handleAddContacts,
        [deleteContact.fulfilled]: handleDeleteContacts
    },
});


export const contactsReducer = contactsSlice.reducer;
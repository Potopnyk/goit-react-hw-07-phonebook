import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64889b760e2469c038fe1520.mockapi.io'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data
        } catch (error) {
            return thunAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunAPI) => {
        try {
            const respone = await axios.delete(`/contacts/${contactId}`);
            return respone.data;
        } catch (error) {
            return thunAPI.rejectWithValue(error.message);
        }
    }
);
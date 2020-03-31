import React from 'react';
import { Provider } from 'react-redux';
import * as Contacts from 'expo-contacts';
import { Gyroscope } from 'expo-sensors';

import store from './src/tools/store';
import Main from './src/Main';

export default function App() {

    const getContacts = () => {
        Contacts.getContactsAsync();
    };

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

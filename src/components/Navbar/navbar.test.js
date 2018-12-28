import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import Navbar from './Navbar';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Navbar />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Navbar />
            </Provider>
        )
    });
});
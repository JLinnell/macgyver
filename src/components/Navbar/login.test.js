import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import LogIn from './LogIn';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LogIn />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <LogIn />
            </Provider>
        )
    });
});
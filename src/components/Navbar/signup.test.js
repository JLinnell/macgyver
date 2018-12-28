import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import Signup from './Signup';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Signup />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Signup />
            </Provider>
        )
    });
});
import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import HackList from './HackList';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<HackList />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <HackList />); />
            </Provider>
        )
    });
    
});
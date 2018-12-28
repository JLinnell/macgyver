import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import Landing from './Landing';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Landing />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <Landing />
            </Provider>
        )
    });
    
 
});
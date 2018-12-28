import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from "redux-mock-store";
import HackForm from './HackForm';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<HackForm />', () => {
  it('Renders without crashing', () => {
        shallow(
            <Provider store={store}>
                <HackForm />
            </Provider>
        )
    });
});
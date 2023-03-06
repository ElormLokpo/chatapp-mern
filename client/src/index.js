import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import Main from './layouts/main';
import {Provider} from 'react-redux';
import {store} from './services/redux/store';

ReactDOM.render(
    <Provider store = {store}>
        <Main />
    </Provider>
, document.querySelector('#root'));
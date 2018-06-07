import ReactDOM from 'react-dom';
import routes from './Config/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();

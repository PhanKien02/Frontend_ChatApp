import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import WebRouter from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  library.add(fas);
  return (
    <div className="App">
          <Provider store={store}>
              <WebRouter/>
          </Provider>
    </div>
  );
}

export default App;

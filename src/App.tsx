import React from 'react';
import './App.scss';
// Components
import {Navigation} from "./components"
// Redux
import store, { persistor } from "./redux";
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

function App() {

  return (
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            {/* <div className={"wrapper"}> */}
              <Navigation />
            {/* </div> */}
        </PersistGate>
    </Provider>
  );
}

export default App;

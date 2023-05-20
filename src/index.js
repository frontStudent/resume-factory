import React from 'react';
import ReactDOM from 'react-dom';
import ResumeViewer from './pages/ResumeViewer';
import BasicForm from './pages/BasicForm';
import { Provider } from 'react-redux'
import store from './store'
import FormArea from './pages/FormArea';
import TopGuide from './pages/TopGuide';
const App = () => (
  <Provider store={store} >
    <TopGuide />
    <div style={{display:'flex',flexDirection:'row',marginTop:'30px'}}>
      <FormArea />
      <ResumeViewer />
    </div>

  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

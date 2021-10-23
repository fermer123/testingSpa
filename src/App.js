import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route
            path='/Dialogs'
            render={() => (
              <Dialogs
                DialogsData={props.DialogsData}
                MessageData={props.MessageData}
              />
            )}
          />
          <Route
            path='/Profile'
            render={() => <Profile PostsData={props.PostsData} />}
          />
        </div>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer ';
import ProfileContainer from './components/Profile/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
          <Route path='/Profile' render={() => <ProfileContainer />} />
          <Route path='/Users' render={() => <UsersContainer />} />
        </div>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

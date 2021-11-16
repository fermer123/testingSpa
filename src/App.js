import './App.css';
import NavBar from './components/NavBar/NavBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer ';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs/' render={() => <DialogsContainer />} />
          <Route path='/profile:userId?' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

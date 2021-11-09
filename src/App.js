import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer ';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
          <Route path='/Profile' render={() => <Profile />} />
          <Route path='/Users' render={() => <UsersContainer />} />
        </div>
        <footer></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

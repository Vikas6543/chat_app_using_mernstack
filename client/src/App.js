import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/chats' element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

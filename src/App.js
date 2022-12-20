import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Friends from './pages/Friends';
import Chat from './pages/Chat';
import Wall from './pages/Wall';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/news',
      element: <News />
    },
    {
      path: '/friends',
      element: <Friends />
    },
    {
      path: '/chat',
      element: <Chat />
    },
    {
      path: '/wall',
      element: <Wall />
    },
  ]
)


function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './components/swiggy-components/About'
import Contact from './components/swiggy-components/Contact'
import Offers from './components/swiggy-components/Offers'
import Help from './components/swiggy-components/Help'
import Cart from './components/swiggy-components/Cart'
import ResBody from './components/swiggy-components/ResBody'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ResBody />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/offers',
        element: <Offers />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ]
  },

])

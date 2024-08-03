import React, { lazy , Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Abo from './components/Abo';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
;
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import "./index.css";
//chunking
//code splitting
//dynamic binding
//lazy loading
const Grocery = lazy(() => import('./components/Grocery'));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className='app'>
      <Header />
      {/**if my path is =/ /about /contact */}
      <Outlet></Outlet>



      {/* <Body /> */}
     
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path:"/",
        element: <Body />, // Ensure <Body /> is imported correctly

      },
      {
      path: "/about",
      element: <Abo />, // Ensure <About /> is imported correctly
    },
    {
      path:"/Contact",
      element : <Contact />, // Ensure <Contact /> is imported correctly  
    },
    {
      path:"/Grocery",
      element:<Suspense fallback={<h1></h1>}><Grocery/></Suspense>

    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu />
    },{
      path:"/cart",
      element:<Cart/>
    },
  ],
    errorElement:<Error/>
},
  
]);

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter} />);

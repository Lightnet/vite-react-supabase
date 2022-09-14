/*
  Project Name: vite-react-supabase
  License: MIT
  Created by: Lightnet
*/

// https://reactrouter.com/en/main/getting-started/tutorial

import "./styles.css";

import { 
  lazy
, Suspense 
} from 'react';
import ReactDOM from "react-dom/client";
import { 
  BrowserRouter
, Routes
, Route 
} from "react-router-dom";
import AuthProvider from "./components/auth/AuthProvider";

//import App from "./components/App";
//import Home from './pages/index.jsx';

const Home = lazy(() => import('./pages/index'));
const About = lazy(() => import('./pages/about'));

const root = ReactDOM.createRoot(
  document.getElementById("app")
);
//<App />
root.render(
<AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Suspense fallback={<>Loading...</>}>
        <Home/>
      </Suspense>}>
      </Route>
      <Route path="/about" element={<Suspense fallback={<>Loading...</>}>
        <About/>
      </Suspense>}>
      </Route>
    </Routes>
  </BrowserRouter>
</AuthProvider>);

if (import.meta.hot) { //< module.hot
  //console.log(import.meta.hot)
  import.meta.hot.accept() //< module.hot.accept()
  import.meta.hot.dispose(()=>{
    root.unmount()
  }) //< module.hot.dispose(dispose)
  //console.log("Hot Reload...")
}
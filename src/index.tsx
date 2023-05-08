import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error404 from "./pages/404";
import Layout from './components/Layout';
import Home from "./pages/Home";

import './i18n'



const loadingMarkup = (
    <div className="py-4 text-center">
        <h3>Loading...</h3>
    </div>
)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Suspense fallback={loadingMarkup}>
                <div className={"transition-all duration-500"}>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="*" element={<Error404/>}/>
                        </Routes>
                    </Layout>
                </div>
            </Suspense>
        </React.StrictMode>
    </BrowserRouter>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

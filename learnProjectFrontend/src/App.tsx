import React from 'react';
import {TestPage} from './components/TestPage/TestPage';
import './App.scss';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {Menu} from "./pages/Menu/Menu";
import {About} from "./pages/About/About";
import {Gallery} from "./pages/Gallery/Gallery";
import {Login} from "./pages/Login/Login";
import {Questionnaire} from "./pages/Questionnaire/Questionnaire";
import {Register} from "./pages/Register/Register";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Menu />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="gallery" element={<Gallery />}/>
                    <Route path="login" element={<Login />}/>
                    <Route path="questionnaire" element={<Questionnaire />}/>
                    <Route path="register" element={<Register />}/>
                </Route>
                <Route path="/testpage" element={<TestPage />} />
            </Routes>
        </div>
    );
}

export default App;

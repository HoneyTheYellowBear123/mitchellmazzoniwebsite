//site map and navigation

import './MyApp.css'
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'

import HomePage from "./pages/HomePage";
import TheFunZoneMain from "./pages/TheFunZone/TheFunZoneMain";




function MyApp() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<HomePage />} />
                <Route path="/theFUNzone" element={<TheFunZoneMain />} />

            </Routes>
        </Router>
    );
}

export default MyApp;


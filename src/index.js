import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navigation,
    Footer,
    Home,
    About,
    Contact,
    Portfolio,
    Project,
    Projects
} from './components';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/' element={<Portfolio />} />
                <Route path='portfolio' element={<Projects />} />
                <Route path=':projectRoute' element={<Project />} />
        </Routes>
        <Footer />
    </Router>,

    document.getElementById('root')
)
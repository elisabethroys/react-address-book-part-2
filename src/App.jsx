import { Routes, Route } from 'react-router-dom'

import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </main>
    );
}

export default App;

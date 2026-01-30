import { createRoot } from 'react-dom/client'
import App from './App'
import {StrictMode} from "react";

console.log("success!")

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>);
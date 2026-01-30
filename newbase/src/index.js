import { createRoot } from 'react-dom/client'
import MyApp from './MyApp.tsx'
import {StrictMode} from "react";

console.log("success!")

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MyApp />
    </StrictMode>);
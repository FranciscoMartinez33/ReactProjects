import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Battle from "../pages/Battle";
import Home from "../pages/Home";



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/battle" element={<Battle />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
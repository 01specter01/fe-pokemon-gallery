import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compontents/Navbar";
import Main from "./views/Main";
import Card from "./views/Card";
import CardsOverview from "./views/PhotosOverview";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/cards/:cardId" element={<Card />} />
                    <Route path="/cards" element={<CardsOverview />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

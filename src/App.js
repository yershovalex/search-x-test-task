import HomePage from "./pages/Home/HomePage";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./pages/Search/SearchPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </div>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MemberDetail from "./pages/MemberDetail";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/member/:githubProfileID"
                    element={<MemberDetail />}
                />
            </Routes>
        </div>
    );
}

export default App;

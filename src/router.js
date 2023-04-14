import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import GameBoard from "./pages/GameBoard"
import App from "./App";
import ImageUploader from "./pages/ImageUploader";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<App/>}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/play" element={<GameBoard/>} />
            <Route path="/upload" element={<ImageUploader />} />

        </Route>
    )
)

export default router;
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import GameBoard from "./pages/GameBoard"
import App from "./App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="" element={<App/>}>
            <Route path="" element={<GameBoard/>} />

        </Route>
    )
)

export default router;
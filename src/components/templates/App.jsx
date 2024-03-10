import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <Outlet></Outlet>
        </div>
    )
}

export default App
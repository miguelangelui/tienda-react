import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

const App = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <div className="pt-16 max-w-256 m-auto"></div>
            <Outlet></Outlet>
        </div>
    )
}

export default App
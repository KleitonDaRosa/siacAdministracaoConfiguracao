import Cabecalho from "./components/Home/cabecalho/cabecalho"
import Routes from "./routes/routes"
import HomeButtons from "./components/Home/HomeButtons"
import "./App.css"

function app() {
    return (
        <div>
            <Cabecalho/>
            <HomeButtons/>
            <Routes/>
        </div>

    )
}

export default app


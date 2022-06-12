import {Redirect, Route} from "react-router-dom";
import Home from "../components/Home/Home";
import {useEffect, useState} from "react";
import history from "../services/history"


export default function ProtectedRoute({showHome, component: Component, ...props}) {
    const [isAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

    useEffect(() => {
        if (!isAuthenticated) {
            history.push("/")
        }
    }, [isAuthenticated])

    return (
        <Route {...props} render={(props) => isAuthenticated ?
            (<>
                {showHome && <Home/>}
                <Component {...props} />
            </>)

            : <Redirect to="/login"/>}/>
    )
}
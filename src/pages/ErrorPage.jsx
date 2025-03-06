import { NavLink, useRouteError } from "react-router-dom";




const ErrorPage=()=>{
    const error= useRouteError();
    console.log(error)
    return (
        <>
        <h1> this is ErrorPage </h1>
        {error && <p> {error.data}</p>}

        <button> <NavLink to="/"> Go Home </NavLink></button>

        </>


    )

} 

export default ErrorPage;
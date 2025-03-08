<<<<<<< HEAD

import Headers from "../UI/Headers"
import Footers from "../UI/Footers"
import { Outlet } from "react-router-dom"
Outlet
const AppLayout=()=>{

    return(
        <>
        <Headers/>
        <Outlet/>
        <Footers/>
        </>
    )

}


=======

import Headers from "../UI/Headers"
import Footers from "../UI/Footers"
import { Outlet } from "react-router-dom"
Outlet
const AppLayout=()=>{

    return(
        <>
        <Headers/>
        <Outlet/>
        <Footers/>
        </>
    )

}


>>>>>>> fc009b3b17dafb591ed902dfa53cb35ee1b326f5
export default AppLayout;
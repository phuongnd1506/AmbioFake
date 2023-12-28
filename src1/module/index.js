import { useState, useEffect } from "react"
import LoadingScreen from "./loading/screen/loadingcreen"
import IndexInLoading from "./loading";
import IndexInApp from "./app";
import IndexInAuth from "./auth";




export let setAppState = () => { }


function Index() {

    const [state, setState] = useState({ isLoading: true, isLogin: false })

    setAppState = setState

    console.log(state.isLoading, 1231231312321)

    return (

        state.isLoading ? <IndexInLoading/> : (state.isLogin ? <IndexInApp />  : <IndexInAuth />)

    )



}

export default Index
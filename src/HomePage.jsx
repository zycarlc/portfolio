import axios from "axios"
import ResponsiveAppBar from "./components/AppBar"
import { useEffect } from "react"
import { useState } from "react"
import About from "./modules/views/About"
import Skills from "./modules/views/Skills"
import Projects from "./modules/views/Projects"
import Contact from "./modules/views/Contact"

import "./App.css"

let PROJECT_ID = "xunxs5lx"
let DATASET = "production"
let QUERY = encodeURIComponent('*[_type == "portfolio"]')

// Compose the URL for your project's endpoint and add the query
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

export default function HomePage() {
    const [result, setResult] = useState("")

    useEffect(() => {
        axios(PROJECT_URL)
            .then(res => {
                setResult(res.data.result[0])
                console.log(res.data.result[0])
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ResponsiveAppBar />
            <About result={result} />
            <Projects result={result} />
            <Skills result={result} />
            <Contact result={result} />
        </>
    )
}

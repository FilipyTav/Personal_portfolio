import { FC } from "react";
// import "./styles/App.css";
import "./styles/index.css";

import Contacts from "./components/Contacts";
import Intro from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App: FC = () => {
    return (
        // FIX: figure out how to make the grid word
        <div className="grid grid-rows-1 md:grid-cols-[1fr_2fr] md:grid-rows-[repeat(4, 100vh)]">
            <Navbar />

            <Intro />

            <Skills />

            <Projects />

            <Contacts />
            {/*
             */}
        </div>
    );
};

export default App;

import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";

export function MainPage() {
    return (
        <>
            <Hero/>
            <About/>
            <Projects/>
        </>
    );
}
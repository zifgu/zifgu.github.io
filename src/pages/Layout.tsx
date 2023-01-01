import React from "react";
import Container from "react-bootstrap/Container";
import { NavBar } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SetAnimationPreference } from "../components/Animation";
import { Outlet } from "react-router-dom";
import "../css/Global.css";

export function Layout() {
    return (
        <Container fluid>
            <SetAnimationPreference/>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </Container>
    );
}
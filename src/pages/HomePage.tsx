import React from "react";
import {SocialMediaList} from "../components/SocialMediaList";
import {MainColumn, SideColumn, TwoColumnPageBody} from "../components/Layout/TwoColumnPageBody";
import {myHeadline, myName} from "../data/basic-info";
import { Link } from "react-router-dom";

export function HomePage() {
    return (
        <TwoColumnPageBody>
            <SideColumn title={myName} subtitle={myHeadline}>
                <p className="mb-5"/>
                <SocialMediaList />
            </SideColumn>
            <MainColumn>
                <h5 className="my-4">Welcome to my website!</h5>
                <p>
                    I am a third-year student in the Computer Science Honours program at the University of British Columbia, graduating in May 2023.
                </p>
                <p>
                    This website was created from scratch with React TypeScript! Please note that some pages are currently under development.
                </p>
                <p>
                    In the meantime, please feel free to take a look at my programming <Link to={"/projects"} className="text-decoration-none">projects</Link>.
                </p>
            </MainColumn>
        </TwoColumnPageBody>
    );
}
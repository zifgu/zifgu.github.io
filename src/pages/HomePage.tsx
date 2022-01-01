import React from "react";
import {SocialMediaList} from "../components/SocialMediaList";
import {MainColumn, SideColumn, TwoColumnPageBody} from "../components/Layout/TwoColumnPageBody";
import {myHeadline, myName} from "../data/basic-info";

export function HomePage() {
    return (
        <TwoColumnPageBody>
            <SideColumn title={myName} subtitle={myHeadline}>
                <p className="mb-5"/>
                <SocialMediaList />
            </SideColumn>
            <MainColumn>
                <div className="mt-4"/>
                <h5>Welcome to my website!</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu felis. In hac habitasse platea dictumst quisque sagittis purus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Auctor eu augue ut lectus arcu.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu felis. In hac habitasse platea dictumst quisque sagittis purus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Auctor eu augue ut lectus arcu.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu felis. In hac habitasse platea dictumst quisque sagittis purus. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Auctor eu augue ut lectus arcu.
                </p>
            </MainColumn>
        </TwoColumnPageBody>
    );
}
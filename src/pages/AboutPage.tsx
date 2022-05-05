import {MainColumn, SideColumn, TwoColumnPageBody} from "../components/Layout/TwoColumnPageBody";

export function AboutPage() {
    return (
        <TwoColumnPageBody>
            <SideColumn title={"About me"}/>
            <MainColumn>
                <div className="mt-4"/>
                <p>
                    This page is currently under construction. Check back later!
                </p>
            </MainColumn>
        </TwoColumnPageBody>
    );
}
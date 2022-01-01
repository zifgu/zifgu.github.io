import {MainColumn, SideColumn, TwoColumnPageBody} from "../components/Layout/TwoColumnPageBody";

export function AboutPage() {
    return (
        <TwoColumnPageBody>
            <SideColumn title={"About me"}/>
            <MainColumn>
                <div className="mt-4"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec mi gravida, tempus ligula ut,
                    volutpat quam. Morbi dui felis, rutrum ac ornare sed, rhoncus ac orci. Aliquam at vehicula eros.
                    Maecenas in aliquam diam, a lobortis dui. Phasellus sodales tempor bibendum. Suspendisse nec libero
                    id diam mollis rhoncus at ac nulla. Praesent elementum euismod facilisis. Suspendisse consectetur
                    tempus efficitur.
                </p>
                <p>
                    Curabitur faucibus pulvinar tortor non porta. Morbi vel nisl iaculis, mattis odio in, vehicula
                    turpis. Suspendisse rhoncus vitae erat ac vestibulum. Mauris sit amet est sit amet nibh dictum
                    pretium ac nec dolor. Etiam sodales libero velit, in iaculis massa mattis ut. Donec quis purus leo.
                    Morbi molestie enim et mattis elementum. Etiam neque odio, egestas faucibus leo mattis, semper
                    aliquet lacus. Donec suscipit est purus, ac bibendum arcu pharetra vitae. Phasellus ut lacinia
                    ipsum. Phasellus sit amet risus eget justo accumsan feugiat eget eu ligula. Nullam quam odio,
                    sollicitudin in nisl ut, interdum mollis ante. Aliquam sagittis rhoncus ante, nec sollicitudin arcu
                    euismod in. Maecenas eu mollis felis.
                </p>
                <p>
                    Donec eu tristique eros. In vestibulum faucibus nisl vel gravida. Sed feugiat convallis mauris sit
                    amet egestas. Cras at est lectus. Nullam tempus quam in purus facilisis, a pellentesque purus
                    sagittis. In viverra, metus vel finibus malesuada, metus erat blandit ligula, sit amet venenatis
                    ligula neque et nunc. Vivamus ac luctus ante. Curabitur eu metus vitae tortor fringilla imperdiet.
                </p>
                <p>
                    Nulla risus lacus, bibendum id vestibulum id, consequat eu eros. Ut facilisis, lectus nec malesuada
                    consectetur, erat tellus tempor mi, quis tempus massa mi eget enim. Suspendisse varius quam cursus
                    velit finibus, id suscipit dui molestie. Etiam dolor leo, tempor a euismod ut, porta et quam.
                    Quisque maximus dapibus ligula quis feugiat. Vivamus congue arcu sapien, vel suscipit ipsum
                    efficitur eget. Donec eget rutrum neque. Proin ac ex in tellus tempor rutrum. Vivamus nec ligula ac
                    arcu sagittis euismod at a nunc. Phasellus ante diam, lacinia vitae sollicitudin non, viverra
                    accumsan erat. Sed interdum nisl sed lorem tincidunt varius. Ut malesuada leo sit amet leo
                    pellentesque, a ultrices lorem molestie. Curabitur sit amet risus consequat, elementum libero a,
                    venenatis arcu. Vestibulum iaculis ante vel lectus dignissim posuere. Maecenas elementum nisi
                    dictum, aliquet leo et, tempus magna.
                </p>
                <p>
                    Phasellus vel tortor magna. Quisque consequat sollicitudin quam, quis tincidunt ligula pellentesque
                    at. Vestibulum ut neque sed odio ultrices rhoncus. Nam vitae nisi consectetur, ultrices arcu eu,
                    elementum dolor. Aenean diam nisl, maximus quis tellus id, condimentum tempus magna. Nulla vel
                    libero at diam blandit dictum vel vitae lectus. Nam lectus nunc, elementum sed arcu nec, consequat
                    tincidunt nisi. Aenean venenatis ante ac arcu tincidunt, in vehicula purus commodo. Vivamus elit
                    lacus, pellentesque at purus quis, vehicula egestas urna. Donec at faucibus libero, imperdiet
                    rhoncus libero. Cras gravida lorem eu aliquet condimentum. Nulla pulvinar eros bibendum mi
                    condimentum fringilla. Aliquam nec lectus varius, luctus diam dignissim, malesuada enim. Suspendisse
                    eget suscipit risus. Cras posuere purus id urna interdum, id fermentum ligula vehicula. Proin quis
                    elementum diam, eu blandit quam.
                </p>
            </MainColumn>
        </TwoColumnPageBody>
    );
}
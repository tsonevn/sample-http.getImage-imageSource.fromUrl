import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Image } from "ui/image";
import ImageSource = require( "image-source");
import http = require("http");
import {StackLayout} from "ui/layouts/stack-layout";


// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    var stacklayout:StackLayout = <StackLayout> page.getViewById("st");
    var image:Image = <Image>page.getViewById("img");
    var image2:Image = <Image>page.getViewById("img2");
    //image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/672px-SMPTE_Color_Bars.svg.png";
    ImageSource.fromUrl("https://httpbin.org/image/png")
    .then(function (res: ImageSource.ImageSource) {
        image.imageSource = res;
    }, function (error) {
        console.log(error);
    });
    http.getImage("https://httpbin.org/image/png").then(function (r) {
        image2.imageSource = r;
        
    }, function (e) {
        console.log(e)
    });
}
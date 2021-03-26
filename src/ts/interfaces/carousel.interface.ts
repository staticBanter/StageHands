"use strict";

interface Carousel extends HTMLElement{
    dataset:{
        animated?:"data-animated"
        automatic?:"data-automatic",
        waittime:string,
        paused:"data-paused",
    }
}
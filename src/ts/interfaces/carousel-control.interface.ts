"use strict";

interface CarouselControl extends HTMLButtonElement{
    dataset:{
        pageto?:string,
        slideto?:"left"|"right",
        pause?:"data-pause"|''
    }
}
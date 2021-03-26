"use strict";

(():void=>{

    function updateCarousel(carousel:HTMLElement,slides:HTMLCollection,trigger?:CarouselControl):void{


        // Returns the active slide from the group. Yes we could querySelect for the class name.
        // optional 'position' argument if set to true will return the position of the element instead
        // of the element.
        const activeSlide = ():CarouselActiveSlideObj|undefined=>{
            // Clean this up :/
            for(let i=0;i<slides.length;i++){
                if(slides[i]?.classList.contains('activeSlide')){
                    return {
                        element: slides[i]!,
                        index:i
                    };
                }
            }
            return undefined;
        }

        if(!activeSlide){throw new Error(`${carousel.dataset.name?carousel.dataset.name:"A Carousel"} did not contain an active slide...`);}


        // function updateSlide(currentIndex:number,modifier:number,slides:HTMLCollection){
        //     (currentIndex+modifier)>=slides.length?
        //         slides.item(0)?.classList.add('activeSlide'):
        //         slides.item(currentIndex+modifier)?.classList.add('activeSlide');
        // }

        if(trigger){

            if(trigger.dataset.pageto){
                activeSlide()?.element!.classList.remove('activeSlide');
                slides[Number.parseInt(trigger.dataset.pageto)]?.classList.add('activeSlide');
            }else if(trigger.dataset.slideto){

                const currentIndex:number = activeSlide()!.index;
                activeSlide()?.element!.classList.remove('activeSlide');

                if(trigger.dataset.slideto ==="left"){
                    (currentIndex+1)>=slides.length?
                    slides.item(0)?.classList.add('activeSlide'):
                    slides.item(currentIndex+1)?.classList.add('activeSlide');
                }else{
                    (currentIndex-1)<0?
                    slides.item(slides.length-1)?.classList.add('activeSlide'):
                    slides.item(currentIndex-1)?.classList.add('activeSlide');
                }
            }

        }else if(!trigger && carousel.dataset.automatic && carousel.dataset.waittime){
            
            const timer:number = Number.parseInt(carousel.dataset.waittime);
            
            if(timer<=0){throw new Error(`${carousel.dataset.name?carousel.dataset.name:"A Carousel"} has a negative waittime integer...`);}
            
            const timeOutID:number = window.setTimeout(()=>{
                updateCarousel(carousel,slides);
            },timer);

            if(carousel.dataset.paused){window.clearTimeout(timeOutID);}


            const currentIndex:number = activeSlide()!.index;
            activeSlide()?.element!.classList.remove('activeSlide');

            (currentIndex+1)>=slides.length?
            slides.item(0)?.classList.add('activeSlide'):
            slides.item(currentIndex+1)?.classList.add('activeSlide');
            timeOutID;
            
        }

        return;
    }

    document.querySelectorAll<HTMLElement>('.carousel').forEach(function(carousel:HTMLElement){

        if(carousel.dataset.automatic && carousel.dataset.waittime){
            const timer:number = Number.parseInt(carousel.dataset.waittime);
            
            if(timer<=0){throw new Error(`${carousel.dataset.name?carousel.dataset.name:"A Carousel"} has a negative waittime integer...`);}

            window.setTimeout(()=>{
                updateCarousel(carousel,carousel.querySelector<HTMLElement>('.slides')!.children);
            },timer);
        }

        carousel.querySelectorAll<CarouselControl>('.carouselControls').forEach(function(control:CarouselControl){
            control.addEventListener('click',function(){

                if(!control.dataset.pause){updateCarousel(carousel,carousel.querySelector<HTMLElement>('.slides')!.children,this);}
                if(control.dataset.pause){
                    console.log(carousel.dataset);
                    if(carousel.dataset.paused !== 'data-paused' || !carousel.dataset.paused){
                        console.log('pause');
                        carousel.dataset.paused = 'data-paused';
                        control.innerHTML = `&#${9655}`;
                    }else{
                        console.log('unpaused');
                        carousel.dataset.paused = '';
                        control.innerHTML = `||`;
                        updateCarousel(carousel,carousel.querySelector<HTMLElement>('.slides')!.children);
                    }
                   
                }

            })

        })

    });

})();
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
StageHands | preventSubmit | Script
*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
"use strict";
(()=>{

    // Just prevent test forms from being submitted
    document.body.querySelectorAll<HTMLFormElement>(".testForm").forEach((form:HTMLFormElement)=>{
        form.addEventListener("submit",(event:Event)=>{
            event.preventDefault();
        });
    });

})();
"use strict";
(() => {
    function toggleModal(target) {
        const modals = document.body.querySelectorAll(target);
        if (!modals) {
            throw new Error("-toggleModal()- Could not find target modal");
        }
        modals.forEach((modal) => {
            if (modal.getAttribute("open") === "open" || modal.dataset.open === "open") {
                modal.removeAttribute("open");
                modal.dataset.toggleOpen = "closed";
            }
            else {
                modal.setAttribute("open", "open");
                modal.dataset.toggleOpen = "open";
            }
        });
        return modals;
    }
    function toggleModalEventListener(event) {
        if (!event.target) {
            throw new Error("-ToggleModalEventListener()- A toggle modal event was called but the event had no source");
        }
        if (event.target instanceof HTMLElement) {
            const toggle = event.target;
            if (!toggle.dataset.target) {
                throw new Error("-ToggleModalEventListener()- The source did not have a target");
            }
            else {
                toggleModal(toggle.dataset.target);
            }
        }
        else {
            throw Error("-ToggleModalEventListener()- The source was not a instance of a HTMLElement.");
        }
    }
    function bindModalToggleEvents() {
        document.body.querySelectorAll(".modalToggle").forEach((toggle) => {
            toggle.addEventListener("click", toggleModalEventListener);
        });
    }
    bindModalToggleEvents();
})();
//# sourceMappingURL=dialogModal.js.map
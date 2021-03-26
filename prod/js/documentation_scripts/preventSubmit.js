"use strict";
(() => {
    document.body.querySelectorAll(".testForm").forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        });
    });
})();
//# sourceMappingURL=preventSubmit.js.map
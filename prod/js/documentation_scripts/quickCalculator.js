"use strict";
(() => {
    const in1 = document.body.querySelector("#num_x");
    const in2 = document.body.querySelector("#num_y");
    const in3 = document.body.querySelector("#op");
    const out1 = document.body.querySelector("#quickCalcResult");
    function quickCalc(x, y, op) {
        switch (op) {
            case "add":
                return (x + y);
                break;
            case "sub":
                return (x - y);
                break;
            case "mul":
                return (x * y);
                break;
            case "div":
                return (x / y);
                break;
            default:
                return "Not A Valid Operation.";
                break;
        }
    }
    in1?.addEventListener("change", function () {
        out1.innerText = quickCalc(Number.parseInt(in1.value), Number.parseInt(in2.value), in3.value).toString();
    });
    in2?.addEventListener("change", function () {
        out1.innerText = quickCalc(Number.parseInt(in1.value), Number.parseInt(in2.value), in3.value).toString();
    });
    in2?.addEventListener("change", function () {
        out1.innerText = quickCalc(Number.parseInt(in1.value), Number.parseInt(in2.value), in3.value).toString();
    });
})();
//# sourceMappingURL=quickCalculator.js.map
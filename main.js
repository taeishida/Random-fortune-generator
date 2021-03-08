"use strict";

{
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        
        const n = Math.random ();
        if (n < 0.1) {
            btn.textContent = "Best Luck";
        }  else if (n < 0.3) {
            btn.textContent = "Good Luck";
        }  else if (n < 0.6) {
            btn.textContent = "Fair Luck";
        }  else {
            btn.textContent = "Bad Luck";
        }

    });
}
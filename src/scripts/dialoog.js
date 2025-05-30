document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("project-dialog");
    const closeButton = dialog.querySelector(".dialog__close-button");

    document.querySelectorAll(".projects__link").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            dialog.setAttribute("aria-hidden", "false");
        });
    });

    closeButton.addEventListener("click", () => {
        dialog.setAttribute("aria-hidden", "true");
    });

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.setAttribute("aria-hidden", "true");
        }
    });
});
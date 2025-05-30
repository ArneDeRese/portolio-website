export function setupFilters() {
    const filterButtons = document.querySelectorAll("[data-filter]");
    const projects = document.querySelectorAll(".projects__item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            document.startViewTransition(() => {
                projects.forEach((project) => {
                    const category = project.getAttribute("data-category");
                    if (filter === "all" || category === filter) {
                        project.style.display = "block";
                    } else {
                        project.style.display = "none";
                    }
                });
            });
        });
    });

    const projectLinks = document.querySelectorAll(".projects__link");
    projectLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetUrl = link.href;

            document.startViewTransition(() => {
                window.location.href = targetUrl;
            });
        });
    });
}
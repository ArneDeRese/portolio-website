import { setupFilters } from './filter.js';
import { Switch } from './switch.js';

document.addEventListener("DOMContentLoaded", () => {
    setupFilters();
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    Array.from(document.querySelectorAll('[role^=switch]')).forEach((element) => {
        const switchInstance = new Switch(element, (isOn) => {
            if (isOn) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('dark-mode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('dark-mode', 'false');
            }
        });

        element.setAttribute('aria-checked', isDarkMode);
    });
});
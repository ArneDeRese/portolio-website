export class Switch {
    constructor(domNode, onToggleCallback) {
        this.switchNode = domNode;
        this.onToggleCallback = onToggleCallback; // Callback voor toggle-acties
        this.switchNode.addEventListener('click', () => this.toggleStatus());
        this.switchNode.addEventListener('keydown', (event) =>
            this.handleKeydown(event)
        );
    }

    handleKeydown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.toggleStatus();
        }
    }

    toggleStatus() {
        const currentState =
            this.switchNode.getAttribute('aria-checked') === 'true';
        const newState = String(!currentState);

        this.switchNode.setAttribute('aria-checked', newState);

        // Roep de callback aan als deze is ingesteld
        if (this.onToggleCallback) {
            this.onToggleCallback(newState === 'true');
        }
    }
}
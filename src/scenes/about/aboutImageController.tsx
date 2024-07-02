class AboutImgController {
    private element: HTMLElement | null;
    //private container: HTMLElement | null;

    constructor(selector: string) {
        this.element = document.getElementById(selector);
        //this.container = document.getElementById("about-img-container");
        if (!this.element) {
            throw new Error(`Element with selector ${selector} not found`);
        }
        // if (!this.container) {
        //     throw new Error(`Container with selector about-img-container not found`);
        // }
        this.setupListeners();
    }

    private setupListeners(): void {
        this.element!.addEventListener('mousemove', (event: MouseEvent) => {
            const rect = this.element!.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const width = this.element!.clientWidth;
            const height = this.element!.clientHeight;

            const centerX = width / 2;
            const centerY = height / 2;

            const deltaX = x - centerX;
            const deltaY = y - centerY;

            const maxDelta = Math.sqrt(centerX * centerX + centerY * centerY);

            const percentageX = (deltaX / maxDelta) * 30; // Adjust scaling factor as needed
            const percentageY = (deltaY / maxDelta) * 30; // Adjust scaling factor as needed

            const borderRadius = `${50 + percentageY}% ${50 + percentageX}% ${50 + percentageY}% ${50 + percentageX}% / ${50 + percentageX}% ${50 + percentageY}% ${50 + percentageX}% ${50 + percentageY}%`;
            //const borderRadius = `${60 + percentageY}% ${40 + percentageX}% ${30 + percentageY}% ${70 + percentageX}% / ${60 + percentageX}% ${30 + percentageY}% ${70 + percentageX}% ${40 + percentageY}%`;

            this.element!.style.borderRadius = borderRadius;
        });
        // this.container!.addEventListener('mousemove', (event: MouseEvent) => {
        //     const rect = this.container!.getBoundingClientRect();
        //     const x = event.clientX - rect.left;
        //     const y = event.clientY - rect.top;

        //     // const width = this.element!.clientWidth;
        //     // const height = this.element!.clientHeight;

        //     const width = this.container!.clientWidth;
        //     const height = this.container!.clientHeight;

        //     const centerX = width / 2;
        //     const centerY = height / 2;

        //     const deltaX = x - centerX;
        //     const deltaY = y - centerY;
        //     console.log('deltaX: ' + deltaX);
        //     console.log('deltaY: ' + deltaY);

        //     const maxDelta = Math.sqrt(centerX * centerX + centerY * centerY);

        //     const percentageX = (deltaX / maxDelta) * 100;
        //     const percentageY = (deltaY / maxDelta) * 100;

        //     const borderRadius = `90% 50% 50% 90%/50% 90% 90% 50%`//`${50 + percentageY}% ${50 + percentageX}% ${50 + percentageY}% ${50 + percentageX}% / ${50 + percentageX}% ${50 + percentageY}% ${50 + percentageX}% ${50 + percentageY}%`;

        //     if (this.element) {
        //         this.element.style.borderRadius = borderRadius;
        //     }
        // })
    }
}

export default AboutImgController
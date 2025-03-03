function printHallo(text) {
    console.log("hallo", text);
}

class CountEventHandler {
    constructor(element, handler = () => { }) {
        this.element = element;
        this.handler = handler;

        this.count = 0;
        this.registeredHandler = null;
    }

    register(eventType) {
        this.registeredHandler = (event) => {
            this.count++;
            this.printCount();

            this.handler(event);
        };

        this.element.addEventListener(eventType, this.registeredHandler);
        console.log("event handler registered for type ", eventType);
    }

    unregister(eventType) {
        if (this.registeredHandler) {
            this.element.removeEventListener(eventType, this.registeredHandler)
            console.log("event handler unregistered for type ", eventType);

            this.count = 0;
            this.printCount();
        }
    }

    printCount() {
        console.log("count ist", this.count);
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const clickContainer = document.querySelector("#clickContainer");

    const countHandlerCallback = (event) => {
        console.log("clickContainer clicked");
        if (event.target.tagName === "P") {
            printHallo("target is a paragraph");
        }

        countToTenHandler.printCount()
        if (countToTenHandler.count >= 10) {
            countToTenHandler.unregister("click");
        }
    };

    const countToTenHandler = new CountEventHandler(clickContainer, countHandlerCallback);

    countToTenHandler.register("click");
});

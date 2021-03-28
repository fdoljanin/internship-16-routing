Object.defineProperty(String.prototype, "beautify", {
    value: function beautify() {
        return this.trim().replace(/  +/g, ' ');
    },
    writable: true,
    configurable: true
});
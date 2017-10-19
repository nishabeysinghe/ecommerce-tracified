var Human = (function () {
    function Human(yourHumanName) {
        this.callHuman = function () {
            console.log('hello ' + this.name);
        };
        this.name = yourHumanName;
    }
    return Human;
}());
//# sourceMappingURL=human.js.map
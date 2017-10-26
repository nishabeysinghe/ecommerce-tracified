var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        alert(this.name + " moved along " + meters + "m.");
    };
    return Animal;
}());
//# sourceMappingURL=animal.js.map
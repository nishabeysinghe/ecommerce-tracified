class Animal {
    // tslint:disable-next-line:member-access
    name: string;
    constructor(theName: string) { this.name = theName; }

    // tslint:disable-next-line:no-inferrable-types
    public move(meters: number = 0) {
        alert(this.name + " moved " + meters + "m.");
    }
// tslint:disable-next-line:eofline
}
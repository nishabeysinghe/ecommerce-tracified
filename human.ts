class Human {
// tslint:disable-next-line:indent
	// tslint:disable-next-line:member-access
    name: string;
    // tslint:disable-next-line:indent
	// tslint:disable-next-line:one-line
	constructor (yourHumanName: string ){
this.name = yourHumanName;
}

// tslint:disable-next-line:member-access
callHuman = function(){
// tslint:disable-next-line:quotemark
console.log('hello ' + this.name);
// tslint:disable-next-line:semicolon
}
// tslint:disable-next-line:eofline
}
function gamerState() {
	this,objects = [];
}


gamerState.prototype.addObject = funtion(object) {
	this.objects.push(object);
}


gamerState.prototype.hasObject = function(character) {
	return character.object && this.objects.includes(character.object.name);
}

var gamerState = new gamerState();
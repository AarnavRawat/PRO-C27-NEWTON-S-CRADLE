class Roof {
	constructor(x, y, w, h) {
		var options = {
			isStatic: true
		}
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.body = Bodies.rectangle(x, y, w, h, options);
		World.add(userWorld, this.body);

	}
	display() {

		var roofPos = this.body.position;

		push();
		translate(roofPos.x, roofPos.y);
		rectMode(CENTER);
		strokeWeight(2);
		fill(128, 128, 128);
		rect(0, 0, this.width, this.height);
		pop();

	}

}
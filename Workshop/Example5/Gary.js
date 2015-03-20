(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 780,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.MyButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AC1BAIgHhBQgBgoAIgbQACgHAHAAQAIAAACAHQADANADAcIAHgGIATgUQAMgMALgDQAHgBAGAFQAGAGgDAHQgEALgMALIgVARIgMAMQANAIAfAeQALALgKALQgLAKgLgKIgkghIACAcQAIAMgSAKQgFADgEAAQgJAAgCgQgAA5A0QgigoATgvQASgrAwAAQARAAANAHQAQAJgHAPQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAQgXgOgZAJQgbAJgBAcQgDAlAPAMQAKAIAOAAQANAAAMgGQANgGAHAMQAHAMgMAHQgVANgSAAQgZAAgVgYgAjQBEQgagFgRgYQgQgWgDgZQgEgcANgVQAPgXAcABQAYABAVAPQAYARgDAXQAAAEgGgBQgJgCgQgPQgOgOgMgBQgUgDgJAQQgJAOAFATQALApAZAFQATADAIgJIAGgHQACgDAFgCQAKgEAEAHQAJAVgXAOQgQAJgQAAIgKgBgAgtBBQgggFgoABQgGAAgEgEQgEgFgBgGQgCguACgXIACgaQACgOAIgIQADgDADAEQAIAKAAARIAAAdIACAuQAjgBAgAGQAOACgEAOQgDANgLAAIgEgBgAAAA8QgGgJgBgVIgBggQgCgVABgMQAAgWAJgIQADgCADACQAJAHABASIABAeIAGA9QABAIgJAEIgGABQgFAAgEgEg");
	this.shape.setTransform(81.7,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AJMCpQgbABgwgBIhMgDQhMACjkgDQh8gBi5ABIk4ABQhRABgqgGIgDAAIgdgHQgxgLgmgZQg1gkgZg6IgGgQQgPgtAPgqIAGgPQAcg3A+gMQAVgFBiADQA3ABBTgBICJAAIKVAAIC+gCQAlAABggEQBWADAoAcIADADQA5AqgqB2QgRAxgeAoQgeAogfAJQgUAGghABIg3gBgAJ+CQQBvAGAkiaIACgLQAIgngCgXQgDgjgbgOQgggQg4ACQg/AFgbABQgxABhOgBIh/gBIlLAAIlSADQjNACiIgFQgugCgTAGQgdALgQAmQgOAiAGAmQAHAiAXAfQA9BQCUADQC2AEDhgBIGKgEIB2AAQCoAABtAHg");
	this.shape_1.setTransform(82.3,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#229AA7").s().p("ApsCXIgUgGIAdAGIADAAIgMAAgAKBCGQiRgJj6ADImKADQjhABi2gEQiUgDg9hQQgXgfgHgiQgGgmAOgiQAQgmAdgKQATgHAuACQCIAFDNgBIFSgEIFLAAIB/ABQBOABAxgBQAbAAA/gGQA4gCAgAQQAbAOADAkQACAWgIAnIgCALQgjCUhnAAIgJAAgACyhQQgIAbACAoIAHBBQADAYARgLQASgKgIgMIgDgcIAkAhQALAKALgKQALgLgLgLQgfgcgOgKIANgMIAVgRQAMgLAEgLQADgHgHgGQgGgFgHABQgKADgMAMIgUAUIgHAGQgDgcgDgNQgCgHgHAAQgHAAgDAHgAAogvQgUAvAjAoQAjApAxgeQANgHgIgMQgHgMgMAGQgNAGgMAAQgPAAgJgIQgPgMACglQACgcAagJQAZgJAYAOQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAIgPgRgJQgNgHgRAAQgwAAgRArgAkHhFQgNAVADAcQADAZAQAWQASAYAZAFQAVAEAVgMQAYgOgKgVQgDgHgLAEQgEACgDADIgGAHQgIAJgTgDQgZgFgKgpQgFgTAIgOQAKgQAUADQALABAPAOQAPAPAKACQAFABAAgEQAEgXgZgRQgVgPgYgBIgCAAQgaAAgOAWgAgvA1QAOADAEgPQAEgOgOgCQghgGgiABIgCguIAAgdQgBgRgHgKQgDgEgDADQgIAIgCAOIgCAaQgCAYACAtQAAAGAEAFQAEAEAGAAIANgBQAhAAAbAFgAgBhNQgKAIgBAWQAAAMACAVIAAAgQACAVAIAJQADAHAKgEQAJgEgBgIIgGg9IgBgeQgCgSgJgHIgDgBIgBABg");
	this.shape_2.setTransform(82,18);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAAF4C").s().p("ApsCXQgKgCgKgEIAdAGIADAAIgMAAgAKBCGQiRgJj6ADImKADQjhABi2gEQiUgDg9hQQgXgfgHgiQgGgmAOgiQAQgmAdgKQATgHAuACQCIAGDNgCIFSgEIFLAAIB/ABQBOABAxgBQAbAAA/gGQA4gCAgAQQAbAOADAkQACAXgIAmIgCALQgjCUhmAAIgKAAgAC8hXQgHAAgDAHQgIAbACAoIAHBBQADAYARgKQASgLgIgMIgDgcQAMAMAYAVQALAKALgKQALgLgLgLQgfgcgOgKIANgMIAVgRQAMgLAEgLQADgHgHgGQgGgFgHACQgKACgMAMIgUAUIgHAGQgDgcgDgNQgCgHgGAAIgBAAgAAogvQgUAwAjAnQAjApAxgeQANgHgIgMQgHgMgMAGQgNAGgMAAQgPAAgJgIQgPgMACgkQACgcAagKQAZgJAYAOQABAAAAAAQABABABAAQAAgBABAAQAAgBAAAAQAIgQgRgJQgNgGgRAAQgwAAgRAqgAkHhEQgNAVADAbQADAaAQAWQASAXAZAFQAVAFAVgNQAYgOgKgVQgDgHgLAEQgEACgDADIgGAHQgIAJgTgDQgYgFgLgpQgFgTAIgOQAKgQAUADQALACAPANQAPAPAKACQAFABAAgEQAEgXgZgRQgVgPgYgBIgDAAQgZAAgOAXgAgvA2QAOACAEgOQAEgPgOgCQglgGgeABIgCguIAAgdQgBgRgHgKQgDgEgDADQgIAJgCAOIgCAZQgCAYACAuQAAAGAEAEQAEAEAGAAIAQAAQAfAAAaAFgAgBhNQgKAJgBAVQAAAMACAVIAAAgQACAVAIAJQADAHAKgEQAJgDgBgJIgGg9IgBgdQgCgSgJgIIgDgBIgBABg");
	this.shape_3.setTransform(82,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#010202").s().p("AC1A/IgHhBQgBgoAIgbQACgGAHAAQAIgBACAHQADAOADAcIAHgHIATgUQAMgLALgDQAHgCAGAGQAGAGgDAHQgEAKgMALIgVASIgMAMQANAIAfAeQALAKgKALQgLALgLgKQgYgVgMgNIACAcQAIAMgSALQgFADgEAAQgJAAgCgRgAA5A0QgigoATgwQARgqAxAAQARAAANAHQAQAJgHAPQgBABAAABQAAAAgBAAQgBAAAAAAQgBAAgBgBQgXgNgZAJQgbAJgBAcQgDAkAPANQAKAIAOgBQANAAAMgGQANgGAHAMQAHAMgMAIQgVAMgSAAQgZABgVgYgAjQBEQgagFgRgYQgQgWgDgaQgEgbANgVQAPgYAcACQAYABAVAPQAYARgDAWQAAAEgGgBQgJgCgQgOQgOgOgMgBQgUgDgJAPQgJAOAFAUQALApAZAFQATADAIgJIAGgHQACgEAFgCQAKgEAEAIQAJAUgXAOQgQAKgQAAIgKgBgAgtBBQgggGgoACQgGAAgEgFQgEgEgBgGQgCguACgYIACgZQACgOAIgIQADgDADAEQAIAJAAARIAAAdIACAuQAfAAAkAFQAOADgEAOQgDANgLAAIgEgBgAAAA8QgGgJgBgWIgBgfQgCgWABgMQAAgVAJgIQADgCADACQAJAHABASIABAdIAGA9QABAJgJAEIgGABQgFAAgEgEg");
	this.shape_4.setTransform(81.7,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AIBCoIhMgCQhMABjkgCQh8gBi5ABIk4ABQhRAAgqgFIgDgBIgdgGQgxgMgmgYQg1gjgZg7Qgbg+Abg4QAcg4A+gMQAVgEBiACQA3ABBTAAICJgBIKVAAIC+gBQAlAABggDQBWACAoAcIADADQA5AqgqB1QgRAygeAnQgeAogfAKQgUAGghAAIg3AAIgbAAIgwgBgAJ+CPQBvAHAkiaIACgMQAIgmgCgXQgDgkgbgNQgggQg4ACQg/AFgbABQgxABhOgBIh/gBIlLAAIlSADQjNACiIgFQgugDgTAHQgdALgQAlQgOAjAGAmQAHAiAXAfQA9BQCUADQC2AEDhgBIGKgEIB3gBQCnAABtAHg");
	this.shape_5.setTransform(82.3,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#229AA7").s().p("ApsCXQgKgCgKgEIAdAGIADAAIgMAAgAKBCGQiRgJj6ADImKADQjhABi2gEQiUgDg9hQQgXgfgHgiQgGgmAOgiQAQgmAdgKQATgHAuACQCIAFDNgBIFSgEIFLAAIB/ABQBOABAxgBQAbAAA/gGQA4gCAgAQQAbAOADAkQACAWgIAnIgCALQgjCUhnAAIgJAAgACyhQQgIAbACAoIAHBBQADAYARgLQASgKgIgMIgDgcIAkAhQALAKALgKQALgLgLgLQgfgcgOgKIANgMIAVgRQAMgLAEgLQADgHgHgGQgGgFgHABQgKADgMAMIgUAUIgHAGQgDgcgDgNQgCgHgHAAQgHAAgDAHgAAogvQgUAvAjAoQAjApAxgeQANgHgIgMQgHgMgMAGQgNAGgMAAQgPAAgJgIQgPgMACglQACgcAagJQAZgJAYAOQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAIgPgRgJQgNgHgRAAQgwAAgRArgAkHhFQgNAVADAcQADAZAQAWQASAYAZAFQAVAEAVgMQAYgOgKgVQgDgHgLAEQgEACgDADIgGAHQgIAJgTgDQgZgFgKgpQgFgTAIgOQAKgQAUADQALABAPAOQAPAPAKACQAFABAAgEQAEgXgZgRQgVgPgYgBIgCAAQgaAAgOAWgAgvA1QAOADAEgPQAEgOgOgCQghgGgiABIgCguIAAgdQgBgRgHgKQgDgEgDADQgIAIgCAOIgCAaQgCAYACAtQAAAGAEAFQAEAEAGAAIANgBQAhAAAbAFgAgBhNQgKAIgBAWQAAAMACAVIAAAgQACAVAIAJQADAHAKgEQAJgEgBgIIgGg9IgBgeQgCgSgJgHIgDgBIgBABg");
	this.shape_6.setTransform(82,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AJMCpQgbABgwgBIhMgDQhMACjkgDQh8gBi5ABIk4ABQhRABgqgGIgDAAIgdgHQgxgMgmgYQg1gkgZg6IgGgQQgPgtAPgqIAGgPQAcg3A+gMQAVgFBiADQA3ABBTgBICJAAIKVAAIC+gCQAlAABggEQBWADAoAcIADADQA5AqgqB2QgRAxgeAoQgeAogfAJQgUAGghABIg3gBgAJ+CQQBvAGAkiaIACgLQAIgngCgXQgDgjgbgOQgggQg4ACQg/AFgbABQgxABhOgBIh/gBIlLAAIlSADQjNACiIgFQgugCgTAGQgdALgQAmQgOAiAGAmQAHAiAXAfQA9BQCUADQC2AEDhgBIGKgEIB2AAQCoAABtAHg");
	this.shape_7.setTransform(82.3,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.5,34);


(lib.Shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(35,31,32,0.2)").s().p("AolB8QhggWgngOQheglAAgzQAAgyBeglQAngOBggWQDkgzFBAAQFCAADlAzQBfAWAnAOQBeAlAAAyQAAAzheAlQgnAOhfAWQjlAzlCAAQlBAAjkgzg");
	this.shape.setTransform(78,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,155.9,35.1);


(lib.SlideLegs = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3GLHQhRgigdhCQgMgdABgfQAAgiARgYQAbgmAngDQAXgCA3AIQA0AEAzgMQA1gMArgZQBng9AOh6QANh8hZhVQgxgihMg+Qg+gzgMgLQgtgpgki4QgbiFgDhDQEuiVF4gMQEXgJDnA+QBnAbDhBNQD1BTAMAQQAGAIAFAWIAJAtQARA+AqAWQA1AdGhENQGtESBBAxQArAhBpBKQBbBFAnA4QAiAwgvA4QgwA5hQgIQgmgEgpgVQgQgIg4giQhUg1htg5Qg6gfiMhHQhVgqlAiAQlniOhEgGQgwAdiVAYQhyAShmAHQgzAChigHQiJgKg5gYQAIBdgcBcQgcBXg6BMQhCBmivBJQiSA+iZAAQhJAAhKgOgA3/H+QgSAPgFAYQgEAaANAZQAiBAB2ARQEnAGC2iFQChh2AUiwQA3k9kOiHQhQgohrgWQhUgNAEgDQDLgYCaBuQCQBmAcChQCKBHEBgVQDygUByhKQAqgUA1gpQA1gqAOgHQAIgEAFAGQAGAFgEAHQgOAdguAjQgiAbgrAYQBqAZEqB0QEYBtBoA0IDFBjQBxA6BRAwQAbAQA7AoQA2AgAqgCQA1ADAWgfQAagigsg2Qg1hCn8lKQnLkniFhJQg6gfgjgwQgmg0gFg+Qh6gyiag2Qk3hsi2gVQiggXj4AZQkvAgjQBdQgDAWAiCOQAlCZAbAfQAVAkBqBNQBrBNANATQAyBKgHBlQgGBig3BPQhYB7iVAGQgVABhPgFIgTAAQggAAgLAIg");
	this.shape.setTransform(0,-72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiZIYQhpgGgzhTQgLgTAUgMQAUgLALATQAPAWAbAUQAeAVAZAEQAvAHBagRQBvgVAvgwQDGi+g+i2QgWg/gUgmQgdg4glggQgRgPg+gsQgygkgXgcQgdgigehiQgfhmARgaQADgEAFACQAEABgBAFQgIAeAkBcQAiBWAVAZQAYAbBCAsQA+AqAaAfQBCBQAfBhQAjBwgeBYQghBihEBOQhNBYhaAUQhyAag7AAIgMAAg");
	this.shape_1.setTransform(-127.7,-63.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("ACpCzQhPgOiIheQiahohmgiIAtgCQA1gFAtgJQCQgeADhFQBaA0BuBaQBrBVAEAVQAJAxgOAcQgUAog8AAQgUAAgZgEg");
	this.shape_2.setTransform(125.8,-23.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AlEB4Qg7gdAGhUQADggAPgVQARgWAZAFQBKAQBxgSQCIgWAXg/IAXAbQAeAgAlAWQB3BFCNgwQgyAkhTA+QhHAzg9AWQhMAchoAAQhwAAiSgfg");
	this.shape_3.setTransform(-120.2,-18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("A2WKtQhFgQgqgsQgmgpACgtQACgvAugZQCIASB6gnQCsg2AAiWQAAiVg/hFQgXgYg6gsQhOg7gmghQgvh0gfimQgQhTgGg8QArgXBSgaQCig1C+gUQJeg9KDEtQAECIDkB5QCtBbGnEiQHQFAAUBDQgeBIgqAPQg2AShog3Qjoicmli9QmujAjKghQjJA6jKASQj5AWh+g6QAQDMhUB8Qh7C2ldBGQg0AMgvAAQgoAAglgJg");
	this.shape_4.setTransform(-0.5,-71.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-145,320.2,145.1);


(lib.HandFront = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsE2QgfgBg6g5QgfgehChMQgcgzAUjHQAUjCANAFQBSAHDrgXQAoB4A0B6QAoBaACAUQAMAtiCBxQh+BtgtAAIgBAAgAjLhVQgSCIAGAjQAFAcBPBOIBWBVQBthEAkgcQBVhCAYhDQglg4gghkQghhwgSg1QgZAMhkAEQhiADgrgHIgaCwg");
	this.shape.setTransform(-13.8,-24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADtN5QgigigohKQiBAChNgYQhzgjgphbQgDAng8gWQgogPgjgZQhFgyguhOQgnhDAHhvIAHhbQAEg1gGgmQg6hfAgk2QALhuAUhtQAShfAKgZQgrhKgchYQgtiJBDgCQAhgLD6ANQEGANASgCQAYgCAiAHQAvAJgTAWQAkAxgWBHQgGATgwBhQBFBBA5B4QAhBEA7CJQAqAMArBSQAOAbAnBbIABAEQANAgAoBUQAbBOgiAqQgoAxhXgLQhBgIhCgjQAjBUBOCxQA+CdAHB0QAEBAgTAvQgWA4g0AWQgRAHgSAAQgoAAgogogAgtEQQAtBgBrDDQBwDMAfAqQAoA3AlgBQAqgCAPhJQANhAgchWIgyiEIgEgMQglhtgVg3Qgkhhgng8QhbBBiIAigACGLTQhKiDgyhcQhciuACguQhWARhIgLQAEAPAgCdQAVBqAjA8IACACQAlA9BVAVQAqALByAEIAAAAgAjSJgQgbhLgThPQgZhlADg6QgzgRgmgbQgmgagfgoQgCByABAbQAFBSAaA3QAhBFBTAsQArAWAlAKIAAAAgAnElgQgYCHgEBjQgFB7ArBWQAzBlB4A4QAGACBKgEQBPgFAagIQCNgqBuhJQgGgfgDgcQgFg3APgBQAGAAAHAPIAIAUQARgbAohkIAwh+Qg2iEgehBQg1hyg5hJQgGAQgRgEQgSgFABgRQABgdAWgsQAbg1AJgeQAPgzgOgmQg4APhZAAIiUgEQhkAAg3gDQhhgGg1gYQgFAMAXBPQAcBmAzBMQARAVgHAIQgIAJgagPIgtDogAELgTQgeA7geAzQAEACA+AwQBJAwA7gDQBCgBADgnQACgXgchJQgVg0gjhHIg+h5QgCA1g9B6g");
	this.shape_1.setTransform(0.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3BDA3").s().p("Ag4BGQhSgxAQgfQAMgbAngxIAjgsIAsByQA5B2A9AdQhkgMhSgxg");
	this.shape_2.setTransform(31.7,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AD9927").s().p("AirAtQg1g3gFhXQAgAWBKAJQCQAQDQhKQhEBnhLA9Qg5AuhNAmQhSgigpgtg");
	this.shape_3.setTransform(-13.7,-7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0C924").s().p("AiKD4QgvgegVgsQg5h3BKlHQAtAQA5AFQBxAKA/g2QAdBeA8CQQAeBGAYA1QghAyg0A1QhoBrhgAUQg6gegbgSg");
	this.shape_4.setTransform(-13.3,-24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Al2C4QANhoAYh7QAYh9AEgfQAIhFgIgxQgLg3glg+QA1AUBnAMQDMAYD7gnQgUAlgMAnQgGATgCAMQCZEKAIAeQgdBCgwBPQhSCKhWBNQhlBZheAAQihAAiUj7g");
	this.shape_5.setTransform(-11.8,-32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4C").s().p("AjiIzQiQg9gYkAQgXj2Bfk+Qg/h+gOgkQgdhMAWgdIJ4AbQATAGAFAiQAKBChHCGQA0A6BUCgQBMCNAPA0QgdBtgiBQQgoBhglAbQAHAKASASQAMAPgRALQhRAyh1AnQhuAlhZAAQhGAAg3gXg");
	this.shape_6.setTransform(-9.3,-31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDDAC0").s().p("AAPDcQgygSg0glQgzgigXghQAMioAghaQAnhwA5A7IAdAlQAlAuAeAuQBgCTgKBiQgIBJhDAAQgdAAgqgOg");
	this.shape_7.setTransform(34.5,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3BDA3").s().p("AhhDzQhggQg/hEQh3iAAmkRQBeBkCHASQCxAWDaiCIAdAnQAdAqACATQhBAVg9AiQh6BGASBCQhBg7hdAAQgmAAgXALQgYAMAFAUIAhB6QARBOgYAAIgCAAg");
	this.shape_8.setTransform(-10.5,37.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDDAC0").s().p("AFaGAQgogPgyg2QgqgsgTgjQh/AKhagfQhRgbgug3Qjsgngpj0QgMhNAIhYIALhJQCHC6DHgiQBGgMBdgrQA0gYBfguQAiAUBWDwQAsB2AkB0QAgEAhUAAQgMAAgPgFg");
	this.shape_9.setTransform(-2.3,50.8);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.9,-92.9,107.4,186);


(lib.GunHand = function() {
	this.initialize();

	// gun
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACEVtQhdgnhcgtQhRgmgKgJQgGAQg7APQhFATg2gWQhPghgqhzQgahIgCg3QgKgKgOgTIgWgeIgBABQgJAggVBgQgTBVgPAuQgEAGhkAYQhkAZgFgEQgNgJALoxQAHloAFiDIADgxQABgXABgBQAXgUB1ghQBMgVA1gLIA3jDQAsidAAgEQAAgHgegfIgggkQADgdB0mRQB0mUAOgaQACgCDFgWQAAgHAVhXQAVhgAJgUQAcgHCYAqQCaArAPAVIhcEmQBQA1gDAHQABAEiEGuQiKHCgNAxIgCAHQA1gXAuANIAFABIACABIAGACIACAAQBjAnAICFQAEBZgmCMIgOA0QAEgCARAJQAUALATATQA2A6gBBiQAUgHAkALQAiALATAQQAnAiAQBGICTgHQCHgEAIASQgUB3iIE6QiFE0gtApQgNAFgTAAQhXAAjghdgAixHLQAUAUAPAdQAQAgALAqQAdB0gpDUQgaCLgbA7QgLAXgLALIAYAsQBcBADEBTQDkBgBzAEQAtgvB2kTQB2kTAShjQgXgIhfAGQg5AEgbABQgSAAgEgCIgBAAQANBogjCkQgoDChMAnQg0AcgzglQgsgggTg5QgFgQgDgTQgZAjgcAXQhAAxg+guQg3grgGhNQgEgpAChiQAChZACgTQg1gPgUh+QgMhTAEhyQABgkADgnQAMiaAfh+QAhiCAigdQACgECLnbQCMnbAIgPQgGgBhGgqIgGgEQg8glgBABIifIFQiYHigDAEQgZACgrgcQgTgNgngeQgCAVgPA+IgBACQgQBIgLAaIACAAIAZgEQAZgCAHAFQgDAOgaBdIhiFaQh1GcABAAQAJAGALANIAQAUQAIhHAyiZQAuiMAsg+QAQgXAQgMQAggYAdAAQAfAAAcAcgAkxIeQg3BWgsCvQguC/AgBuQAFAPAGAOQAtBmA3ALQAsAKApgHIACgBQAbgFAAgLQABgGgIgIQgTgVgQglIgNgiQAQgYANgeQAphcANiPQAPiXgQhkQgMhJgpgRQgKgEgJAAQgiAAghAygAnXBpIhFAQQi/ArgIACIABABQgGBvgDHZIgCHEQANgEAugLIAFgBQAtgNAHgIQALhOBgl9QgOADg8ADIgIAAQhEAEAAgDQgOguAQmfIABglIAAgJQAEgHB7gSIBEgKQBHgJAeABIAchVIAAAAQgFAAh1AagAFKL4IgPBEIgWBZQgPA9gSAqQgIAuAUBFQAaBUAzgVQAygUAahNQAHgVAVhoIAKg2QANhcgHhLQgPiXhkgHQgFBIgTBbgACoJmIgQAiQgnBRgzApQgXATgWAIQgDBgAAAvQAABSASA2QAbBUA9gqQAvgfAihEQAihGAVhbIACgFQAQhGALheQAcimgjhDQgOgagkgNQgfB9gdBIgAAtgSQgQARgYBHIgBADQgXBQgSBmQguELAtC3QASBKBDhDQA1g1AWgzQAag7AbhqIAVhWIAKguQAhiFAEglQAJhsg3g0QgcgagwABIgBAAQgwAAgbAagAqLJjIABBGICEgGIAShMgAqJH2IAABXICdgSIAShNgAqFFmIAAByICzgJIAfhzgAqFDnIACBeIDagNIAkhxgAmWipIgRA7IgqCKQANgBAqgJQAjgHAGAAQAKgaAUhJIAGgYQARg/ACgYQgQgOgSgUIghgkQgEAZgVBLgAgFzHIgRABQikAKgFAGQgFAGh3GLQh2GLACAMQADAQByBtIAQAPQBlBeALgMQALgLAehlIAxifQAsiBBdksQBulcgGgEQgCgBgSAAQgkAAheAGgAB80BQAtACAVADIAMADQADACgMAxQgMAzgKAaIBEAiIBQj7QgqgVg2gRQgigLgmgJIgfgHQg4gMgCAFQgTBAgTBcQAXgDAfAAIAJAAIAlAAg");
	this.shape.setTransform(0.4,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AlNKDQg3gLgthmQgHgOgEgQIACABQAjAKAhADQBcAIAlg2QgNAegQAZIANAiQAQAlATAVQAHAIAAAGQgMAJgPAHIgCABQgSADgRAAQgZAAgZgGgAFoEAIhHgfIAPhEQAThbAFhGQBkAFAPCXQAHBLgOBcQgUgfg4gggACxBpQgYgjgbgZIAQgiQAdhGAfh9QAkANAOAaQAjBDgcCkQgLBegRBGQgEhKgyhHgAA/mrQgohAgqgpQAWhIAQgRQAcgbAwABQAwgBAcAaQA3A2gJBsQgEAlghCFIgKAtQgVBMgdBfQAsi9hlikg");
	this.shape_1.setTransform(3,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD9927").s().p("AlHLeQA8gDAOgDQhgF9gLBOQgHAIgtANIgFABgAl6J4ICXgMIgSBMIiEAGgAl4ILICvgIIgSBNIidASgAl0F7IDSgKIgfBzIizAJgAl0D8IEAggIgkBxIjaANgAmRDtIABAAIgCAlgAjGB+QB6gbAAABIgcBVQgegBhHAJgAgZjtIEivFQCSgJAHAEQAGAEhuFcQhfEsgsCBIgxCfQgeBlgLALQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgTAAhXhUg");
	this.shape_2.setTransform(-26.9,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDDAC0").s().p("AEBHzQgUhFAIguQASgqAPg9IAWhZIBHAfQA4AgAUAfIgJA2QgVBogHAVQgaBNgyAUQgLAEgJAAQgkAAgVhDgAARG4QgRg2AAhSQAAgvAChgQAWgIAXgTQAzgqAnhQQAbAZAYAjQAyBHAEBKIgBAFQgVBbgiBGQgiBEgvAfQgUAOgRAAQghAAgSg4gAlrHhQghgDgjgKIgCgBQghhuAvi+QAsitA3hWQArhBArATQApARAMBJQAQBigPCXQgOCPgoBbQggAvhKAAIgXgBgAg1BFQgti1AukLQAShmAZhQIABgEQAqApAoBAQBlCkgsC9QAdhfAVhMIgVBXQgbBqgaA7QgWAxg1A1QggAfgUAAQgXAAgKgmg");
	this.shape_3.setTransform(1.9,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ABESDQjehXhlhVQAbg7AaiLQApjUgdh0QgLgqgQggIAmguQgEByANBTQATB+A2APQgDATgBBZQgCBiADApQAHBNA5ArQA7AuBAgxQAdgXAYgjQAEATAEAQQATA5AtAgQAyAlA0gcQBMgnApjCQAiikgMhoIAAAAQAEACASAAQAqAJAdAbQAYAXARApQANAehfDYQhhDdg1ArQgKAFgRAAQhGAAi+hLgAo4MDQgLgNgIgFQgBAAB1mdIBhlYIASgHQA3gVgGATQgGARhbFqQgsA9guCMQgxCZgIBHIgRgUgAkciUQgSgHhKg5QAPg+ADgVQAmAfAUAMQAqAcAZgCQADgECYniICgoFQAAgBA8AlQkfNMghBsQgWBLgfATQgKAHgNAAQgOAAgQgIgAnhkmQAVhKAFgaIAhAkQASAUAPAOQgCAYgQA/IhKg5g");
	this.shape_4.setTransform(7.8,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AlbL5QADnYAGhwIgBAAQAIgDC/grIBFgPIgHBCIhEAKQh7ATgEAGIAAAJIgBABIgBAkQgPGfAOAvQAAACBEgDIAIAAIhaHaQguALgNAFIACnFgAmHCkIACgBIgCAygABUkHQhwhsgDgQQgCgMB0mMQB3mKAFgHQAFgFCkgLIAQgBIkkPGIgQgQg");
	this.shape_5.setTransform(-39.6,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4C4C4C").s().p("AgfR/QjHhThchAIgXgsQALgLAKgXQBmBUDeBYQDtBdAxgXQA1grBijdQBejYgNgeQgQgpgZgXQgdgbgpgKQAaAAA6gEQBfgGAXAIQgTBjh1ETQh2ETgtAvQhzgEjihggAlAEVQg2g3hDAzQgPAMgRAXQBcloAFgSQAGgTg3AVIgRAHQAahdACgOQgGgFgZACIgZAEIgCAAQALgcAQhIIABgCQBKA5ARAHQAgAPAWgOQAegTAXhLQAhhtEftLIAGAEQBFAqAHABQgIAPiNHbQiIHbgCAEQgkAdghCEQgfB8gMCaQgDAngBAkIgnAtQgPgcgTgUgAo3kkIARg7IBKA5IgGAYQgUBJgLAcQgFAAgjAHQgqAJgNABIApiMg");
	this.shape_6.setTransform(14.7,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DDDDDD").s().p("AgZBGIgugBIApiPIAeAHQAmAJAiALIghB6QgVgEgrgBg");
	this.shape_7.setTransform(15.5,-133.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BABABA").s().p("AAACAQAKgaALgzQAMgxgDgCIgMgBIAhh8QA2ARAqAVIhQD5gAhrifQABgFA4AMIgpCRQggABgXADQAThcAUhAg");
	this.shape_8.setTransform(17.6,-125.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80.6,-146.4,161.9,296.4);


(lib.Foot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjJChQgggQgSgeQgIgNgHg6QgHg8AOAIQATAIAIAtQAJAwARAPQAkAeA9gQQBmgaB9hfQAngbAUgTQAogngCgYQgBgOgxABQgRABgrAEQg3AGgyAKQhVAQgDAOQgGAagVgMQgWgMAIgYQAIgYAsgRQAggMAqgIIA9gJIANgBIARgCQA7gHARAAQA7gBAcAaQArAng6BGQggAmhAAtQigB4hzAIIgKAAQgeAAgagMg");
	this.shape.setTransform(-0.4,-5.3,0.433,0.433,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD9927").s().p("Ah+CEQgjgCgqgmQgsgpALghQATAJAXgCIAQgCQBzgMBcgdQB/gqBKhHQAtA8i6BrQhBAmhGAfQg/AbgQAAIgBAAg");
	this.shape_1.setTransform(-1.3,-4.9,0.433,0.433,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0C924").s().p("AiuCNQgqgtgQghQgQggAEgfQAeguBNgoQCYhRDnAhQgFAdgrA0QgsA1g+AtQh/BkhjAAQgVAAgTgEg");
	this.shape_2.setTransform(-1.1,-5.2,0.433,0.433,38);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.1,-12.7,24.4,12.8);


(lib.DeadEyes = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgNA4QgLgKACgXQABgJAGgZIAEgSQADgKADgGQADgGAFgDIAAgBQAEgDAGABQAHABAAAGIADAJQABAEgBAEIgIAfIgFAeQgFAUgHAIQgDACgDAAQgCAAgDgCg");
	this.shape.setTransform(-1.4,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AACBUQgOghgDgxQgCgqAJgoQABgGAHAAQAFAAABAGQAEAQABAWIABAnIADAoQACAZgCASQAAAFgFACIgDAAQgDAAgCgDg");
	this.shape_1.setTransform(4.8,-10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAiBfQgWgEgQgaQgMgQgMgfQgTgqgDg9QAAgIAIgBQAIgBADAHIAQAzQAKAdAJASQAEAIAVAaQAQAUAFAPQACAHgFAFQgFAEgFAAIgDAAg");
	this.shape_2.setTransform(9.9,-9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("AhYBAQgLgJgEgNQgZgaAIgmQAGgbAbgOQAXgNAdAEQAXADAiAHIA6ALQAXAEAMAXQAMAWgGAUQgJAfggAJIAAABQgnAFgUAAQgSANgTgIQgHgDgQAEQgSAEgGAAQgOgBgLgJg");
	this.shape_3.setTransform(1.1,-8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAkB1Qg1gfgWhGQgTg8ANhEQACgHAHABQAIACAAAHQgBBCASAvQAQA0AsAtQAFAHgFAHQgDAEgEAAIgGgCg");
	this.shape_4.setTransform(-7.5,-88.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAwDLQgvhegbhmQgehngGhmQgBgIAIgBQAIgBADAHQAdBOAcB5IAyDHQABAHgGADIgEABQgEAAgCgFg");
	this.shape_5.setTransform(0.1,-90.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgBEaQgHgegEguIgFhMQgKh5gBgYQgEheADgnQAFhOAYgzQAFgLANAEQAOAEgBAMQgBAZgIAvQgJAwgBAYQgFBJADBHQACAqAHBaQAEBPgMAzQgCAFgFAAQgEAAgBgFg");
	this.shape_6.setTransform(6.2,-95.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDDAC0").s().p("AgPCBIgPgCIgHAAQgaAAgWgNQgXgNgNgWQgWgmARguIAAgJQgDgYALgaQAEgOAHgLQAZgrA0gBQAyAAAaAsIANAbQAJAFAFAJQAOAIAUAQQAXATAEAhQADAhgPAaQgaArg3AEIgLAAQgVAAgYgFg");
	this.shape_7.setTransform(-1.5,-83.3);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,-123.9,29.9,124);


(lib.DeadBlood = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A82222").s().p("Aj0DcQhNgLgLAAQhVAFhUgBQikgDg4gfQg/gLgpgsQgsgqAbhEQAYg6AjgKQArgUA/gVQB8gqB3gMICrgRQCPgOApgGQErghCsgDQFPgIBKBOQAmAdAKAoQALAngUAqQgWAuhMAlQg/AkitAdQiPAZgVgDQh7AtiPAIIiGgCQgyAFgxAAQgsAAgrgEgACDC+QAqgFA1gRQAogLArgKQBKgQAoABIB3gWQCAgcA7gcQBjg4gOhGQgIgjgbgYQgegmhMgPQg2gLhXAAQh0gHiyANQiXALiiAWQgpAFiQAPIiqARQg8ADgxAKQhYARh6A4IgBABQgyADgPA5QgPA4AbAUQAOAQAqARQAVAJASAFQAgAYBZAIQBiAJCdgNQBPAOBmgBQA0AAApgDQBtALBQgKg");
	this.shape.setTransform(-2.1,-19.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D32424").s().p("AhWDNQhoAIhTgNQglgHg1ADQg8AEgeAAQgyABhggMQhlgNgSgLQh+glAJhUQADgeAUgZQARgYAOgEQB2gtAwgQQAwgPHAgvQHKgwCCABQCFABAjAEQBvANApAzQAhAXAKAiQALAjgTApQgVAphFAiQg5AbjBAlIjBAhQhKAXg8AKQhDAMhNAAQguAAg1gFg");
	this.shape_1.setTransform(-1.9,-19.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.5,-41.6,170.7,44.9);


(lib.Body = function() {
	this.initialize();

	// bodygraphic
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA+CDQkRg2iMg2QgMgjAChPQABhIAHgNQgBACFCBCQFXBHAoAKQANAXgCBNQgBA4gFAwQhDgDjjgrgAlOhFIACBKQB7AhCUAgQDRAuCuAVIAEhEQABgqgGgbQgagMkuhAIlChDQgGANABA9gAlhiwIAAAAIAAAAg");
	this.shape.setTransform(-16.5,68);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgF9QjIgTikhuQgggUAAkKQAAj6AThkQCiAiDsAdQDLAZA8AAQAJATAZEqQAaEzgSABQhqA4iPAAQglAAgogEgAksDqQBZBACJAgQCMAhB5gVQAbgEAsgOQAzgRAUgEQgMhFgOj7QgNjoACgLQhZACjOgbQjTgchmgbQgXFpAnDVg");
	this.shape_1.setTransform(-16.2,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHBxIgIgBQgugGAtAFQg3gIgZgqQgWglAJgvQAIgvAegaQAggcAnATQAxgJAhAkQAeAgAAAwQABAygeAgQgdAdgvAAIgOAAgAgbhNIgCABQgaAKgNAWQgPAZAGAcQAHAeAXATQAaAUAjgDQAkgEATgYQAUgagLggQgKgegigNQgngPgKgMQACACgOACg");
	this.shape_2.setTransform(-11.4,-46.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgoBlIgIgDQgXgJAPAGQgngUgPgpQgRgsAYgqQAXgpA1gKQArgKAxAPQACABARAXQARAWAEAJQAUAmgLAkQgOAwg1AUQgZAJgWAAQgUAAgUgHgAg7g3QgxAvAoAuQAoAuA5gPQAfgJAOgaQAPgbgNgbQgHgOgcgSQgcgRgDgKQgyAFgTATg");
	this.shape_3.setTransform(-42.1,-52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AH8TSQkxgRlxhmQmIhskZicQgcheA+q4QAjmJAJh3QASkDgIhZQhxAnhMgGQhrgIgVhkQgPhIBBg1QBAg1CcguQFeiSHWAJQDtAEC5AjQATABA9AAQA3AAAeAEQBgANAYBFQAeBbhCAxQgWAQgkANIguAPQCwGvCmKWQBFEUAnDRQAnDUgHA9QgIAwiABxQh6Bsg7AWQgyAThHABIh9gDgADor0QAIAegHAFQB/FSCRKMQCQKQABDtQApAAABgBQADjuiIqIQh/peiEmqIgUgRQgJgKgCgNQgKAEgPABQgQAAgKgDQAIAUAGATgAhQytQmDAGjJBbQBUA5gFBQQgFBQhYA1QAUCRg7LNQgeFogICEQgODqAOA6QD8CRG2BmQF+BZEqAJQg8msicq3QiLpqgziKQg4AZhngOIifggQmth1AaguQgFAJCqA6QCiA3AhAGIC0AoQB6AUA4gfQgGg+gXgZQgXAIhJgBQhXgChdgUQkNg4iZilIADgKQAIgMAXgJQAbgKBQgPQBpgSBvgHQFGgUDrBXQASANgCAWQAAALgEAIQgFATgoBDQgoBEgTAVQgJAVALAaQAKAYANADQAcAGAhgvQAtg+AkiIQgHgTgKgnIgPg6QhGgfiPgRQh9gPiPAAIgjAAgAJGCfQCkLHgKEMQA1geBahHQBohRAcgtQgEhCg2j4Qg5kBhOkoQjKsAiJkMQg1EDhZgRQBsE/CJJOgADKtLQAEAKAFAPQAcAHAdgNIAAgSQAAgNAEgKIA7hbQAmg5AMgjQgGgJgbgHQgdgHgGgDQgRBXhxAeQhhAaiIgUQh/gShZgtQhcguASgrQgtAGgXAEQgqAIgfAOIAqAlQA5AsBGAkQDeBwENgSIABgBQAOAAAIASgArOwpQg5ANg9AVQh6ArgcApQgeArAwAmQAsAiAkgGQBdgSAQgFQA+gRAlgfQAxgogNgzQgNgzg9gRgAINwrIAkBLIBRgVQAngUgQguQgPgpg4gKQhFgGgegFQAFAXAZAzgAk6xSQgMAjBfAhQBZAeB9AKQCCALBRgUQBdgXgPg7QiFgkidgBIgGAAQhxAAixAUg");
	this.shape_4.setTransform(-1.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0C924").s().p("AhGBAQgegaAAgmQAAgkAegbQAdgbApAAQAqAAAeAbQAdAbAAAkQAAAmgdAaQgeAbgqAAQgpAAgdgbg");
	this.shape_5.setTransform(-11.1,-46.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0C924").s().p("AhFBCQgdgbgBgnQABgmAdgcQAdgcAoAAQApAAAdAcQAeAcAAAmQAAAngeAbQgdAcgpAAQgoAAgdgcg");
	this.shape_6.setTransform(-41.9,-52.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AlQgYIgDgsQgBgrAEgCICuAyQDjA5ETAeIAABag");
	this.shape_7.setTransform(-17.3,71.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AABDiIgYgIQgBhcgEhkQgJjGgTgmIAZAJQAcAEASgdQATBMAPCbQARCxgSAkQgNAJgTAAIgPgBg");
	this.shape_8.setTransform(63.9,95.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ai7AdQBHgOBTgVQCkgvA4gtQAGA+gaAsQgcAwg4APQhkAbg4ABIgDAAQhiAAgNhGg");
	this.shape_9.setTransform(-83.2,-90.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAjBXQingShNgaQhogkAAhAIBDgMQBSgMBRgFQEAgQCLBBQALA1hJAoQg+AihcAAQgdAAgggDg");
	this.shape_10.setTransform(-2.8,-105.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ahkg9QAUAHCkgTQAyBIhdAsQgdAPgmAKIgiAHQgKgygehWg");
	this.shape_11.setTransform(58.6,-101.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("AhPCUQh4gGgPiYQA9glBHgjQCNhHA0AGQBEAcAZAzQAlBIheBXQiTA5hGAAIgJAAg");
	this.shape_12.setTransform(-84,-95.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAqC7QiSgIjjh7QgLhgABhPQAEg7gCgJIBBAXQBQAaBRATQECA9CngkQAMA8ASCtQh9AeghAGQg/ANg2AAIgZgBg");
	this.shape_13.setTransform(-15.8,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("AhfFVQhggZiJhRQgVgyAGkWIAKkOQAlATEuAkQCYASCQAPQAUEsAXElQiJAuiAAAQhYAAhXgXg");
	this.shape_14.setTransform(-16.1,10.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AggBfIk3hOIgBisIKnCRIAIAtQAFA6gLA7QgKAEgTAAQhTAAkBg9g");
	this.shape_15.setTransform(-16.5,67.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C4C4C").s().p("AIbSOQgBgFgKiBQgLiZgciWQgjjCisqlQisqsgbgyQi3gDi8gvQkIhBg5h2QB4gpCsgTQFXgmELBzQgOAsg0BVQgsBHADANQBXEmBXE5QCuJvAZC5QAcDMAPDcQANDIgJAGQgOAJgTAEIgLABQgSAAgFgOg");
	this.shape_16.setTransform(8.8,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#44757A").s().p("AgOE7QoQhhlwjZQgYlWAYgfICpBMQDUBWDZAxQK1CgHfkFQAeAsATCrQAKBTAEBNQhCBBhSBAQiiCChLABIgeAAQjRAAk5g6g");
	this.shape_17.setTransform(10.6,83.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#44757A").s().p("Aj1C9Qi+hMiOhTQgGgQgLhCQgNhKgRg7QD9iLGSAQQEfAMDfBHQBaCagHCHQgLDIj2AnQguAHg1AAQjTAAkuh5g");
	this.shape_18.setTransform(-9,-92.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C4C4C").s().p("Ah0hSQAAgaBBgIQA9gIAgAQQAdAOAZA9QAZA3gFAcQgFAUhOAbIhLAXg");
	this.shape_19.setTransform(56.8,-106.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5596A5").s().p("AksQlQjJg+jGhNQijhAgwgaQgHgLgGhQQgHhcABh0QAClBA5kLQA2kCgRlTQgIipgTh1QgNh9CMhGQB4g7DdgOQC7gMDdAWQDGATCJAkQByCaDZMrQDGLeAzFgQgZBki7BrQhdA2hYAhQguAHg4AAQkGAAnaiWg");
	this.shape_20.setTransform(10.6,0.2);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.5,-123.8,214.6,247.5);


(lib.ArmShoot = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArYC7QhJgTguggIgegbQFNBjHLgOQDmgHC7gfQgngpgEheQgBg6ARgfQhzAahmAPQkOAmiIAFQk7AKjdhWQgFgCgEgNQgDgOALABICzAmQCLAZCggCQHQgDLijVQAXgHAPAZQAPAagNADQgzAOjOAvIkHA6QghAkALBUQAKBYArATQGhhlAwgcQARgJAOAQQANARgQAMQgcAXgxAOIhUAVQhCAWhHAUQiKAniVAWQi/AcjLAAQknAAlDg7g");
	this.shape.setTransform(8.4,-48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AjOAbQgHg8AMg7IB8gZQCSgdBygTQAyB7guBNQgPAZgWARIgUANQhkAkiDAoQhcgOgNh9g");
	this.shape_1.setTransform(83.3,-53.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#44757A").s().p("AgFBsQjDgggsgeQhIgvgVg0QgehKBxgWQB4AsCBAbQC1AmB9gPQgHAHgIAMQgQAXgGAXQgSBPBiA9Qi1gOiogcg");
	this.shape_2.setTransform(-54.8,-41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5596A5").s().p("ApHAqQhyhMAZhCQALgbAegKQAggKAmANQBQAdAiAJQBiAaB1AKQFVAcIGhtQgRAbgCAuQgGBaBMBiQlNAWj5AAQoSAAiVhkg");
	this.shape_3.setTransform(-21.4,-42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("AkqB5QgthkAyhNIJIiUQAYA2AEA8QAKB3heAjQheAkjIA4Ii4AxQghgjgWgxg");
	this.shape_4.setTransform(70.9,-50.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-89.3,-72.6,193.6,49.3);


(lib.ArmFront = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApVN5Qglg4AUhKQAAiDAnibQAchvA7ilQBnkYCMi6QBKhjBwh5QA/hGCFiKQBnhrA8gtQBkhMBggLIABgBIADAAIABAAQBcgLAXBCQAWA+g3BEQgqAzhQBGQhqBcgXAXQk1ExhxEAQg5CBgxDdQg9EYgXBMQgXBIgyAzQg4A4hHAIIgVACQg+AAgigzgAoIHzQg6DgAWB4QAMAiAtAAQAmABAfgTQBBgmAfheQAKghALgyIAQhRIACgHIAmiqQAYhpAUhHQgjgmg6gEQhGACgkgEQhFC0gnCZgAknB9QA6AHAmAhQBLjtC8jvQCFinDTjAIApgkQA+g4ASgUQA5hAgagYQg5g2iSBtQhOA7hhBlQjnDzhjB+QipDVhUDSQAngOAoAAIAbACg");
	this.shape.setTransform(-0.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#44757A").s().p("AkNEXIhzAKQAEgvDOjMQCuiqCLh1QBmhUBCABQA5ABAUA+QAPAsjXDZIi4C0QhpBqgxA4QAAg1hzgCg");
	this.shape_1.setTransform(19.2,-57.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5596A5").s().p("AmSHsQg9AAg0AQQAQhQBeiXQBXiNCCiiQCAikB7iBQCFiJBXg2QCkhnA0A4QAVAWgFAsQgFApgbAtQlpEziJDEQhEBig3B4QgnBYg/CuQgphVh5gBg");
	this.shape_2.setTransform(6.4,-34.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3BDA3").s().p("AhWBDQgtAJgZAaIA8jQQBug1BTAcQAqAPASAZIgPA5QgSBMgWBkQhkhbhYAQg");
	this.shape_3.setTransform(-35.5,28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDDAC0").s().p("AjCE+QASiaAbijQA1lEAvgvQBQgaBOAQQBZARgEA/QgFBXgtDVQgzDqgiAiQgMAMghAnQgfAlgbAQQgZAPgZAAQg0AAgwhFg");
	this.shape_4.setTransform(-40.3,53.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.9,-94,124.6,188.1);


(lib.ArmBack = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApcDjIhth8QhBhNgeg3Qg1hoABgDQgDgVAVASQALAJALAMQAfA4BGBTQAbAgBMBWQBNBYBHA4QBXBDBcAiQC9BFDYg1QDLgwCkiIQhMgKg5g7Qg4g7gHhNQiSC0jpAPQjtAQimiiQiIiCh3jjQhUirAiABQAOABAkBFIArBWQCJDmB3BkQCsCVDTgXQBqgMBYg5QBQg0BFhcQA0hHCFjeQAfhdBqgUQBdgSBNAuIAJAGIAJAGQA+AtAMBTQAKBLggBUIABACQiBELjmCqQj2C1kZAHIgUAAQk1AAjjj9gAIgl0QgQARhaCPQhgCagiAtQABBWBfBAQAlAZAlAKQAlAKAQgKQBLhHBBhbQA+hUAuheQAWgsgOg8QgNg6gmgqQgogugwgDIgJgBQgyAAgtAyg");
	this.shape.setTransform(0.9,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3BDA3").s().p("AiZCUQgagrgRg5IgLgwQAohLBhiMQBdg2BYA0QBGAqAUBCQAQA2gYBFQgbBShYCCQgtARglAAQhbAAg6hfg");
	this.shape_1.setTransform(62.7,-19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDDAC0").s().p("AkIBgQA/hiBBhkQCCjJAKgCQBVgPA7ANQB/AcgLCMQgLCUhzCgQgsA9guAqQgrAngTACIgWABQi2AAgujag");
	this.shape_2.setTransform(55.7,-12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#44757A").s().p("AgTFQQjqiDixlNQgZiyACg6QACh4BHAxIBMCfQA3BrA9BPQCsDfEBA8IgGAaQgDAhALAgQAlBoCvA+QkrgPivhjg");
	this.shape_3.setTransform(-41,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5596A5").s().p("AqwiDQgKgSgLg+QgMhFAAg8QAAioBfA6QAbBCAzBZQBmCxB3BzQCnCgCwAOQDeASDjjUIANBCQALAoAUAdQA3BMCeAeIhxBJQhLAwg7AeQisBZiaAHIgZAAQmiAAmKpUg");
	this.shape_4.setTransform(-16.4,-0.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-88.6,-48.1,175.7,96.2);


(lib.head = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2E9DD").s().p("AhGAjQgdgPAAgUQAAgTAdgPQAegPAoAAQApAAAdAPQAeAPgBATQABAUgeAPQgdAOgpAAQgoAAgegOg");
	this.shape.setTransform(-65.1,-83.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2E9DD").s().p("Ai2A/QhNgaAAglQAAgkBNgaQBLgaBrgBQBsABBLAaQBNAaAAAkQAAAlhNAaQhMAbhrgBQhqABhMgbg");
	this.shape_1.setTransform(-21.1,-88.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlcUZQgSgYifjyQiKjRgkgiQAAgCi3mZQi3mWACgCQABgCgIilQgIilACgCQAAg1AMhLQAXiWA/huQAZgvBKhRQCTijD0iwQAjgUBOgdQCcg5DbguIAAAAQEOgLD0AlQALABA4AdQBJAmBBAuQDJCOAeCZIA4EcQAUBqACAiIATB5QAMA6AICJIAKDCQgBAUgXAeQglAtgcAmIgCPAQglAdhfAwQiMBHibAvQj3BLjsAAQjXAAjRg/gAk3TTQCIA8DeAHQHAAPG6kEIADnHQAEnOADgcQACgUAngwQAmgsAAgVQgBiJgulbQgmkdgTheQgaifjEiNQhihHhfgnQi7gai2gBQhUgBgyACIAAAAQisAlilA7QhTAdgxAXQivCKiPCMQhyByguBCQgfAsgbBtQgdB3ADBkQAMEoACADQA3B7CUFBQCfFWADgEg");
	this.shape_2.setTransform(-46.9,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACAhQhHgDhCgSQhDgRgggcQB/ASByAFQCrAIA5gdQgzBBiWAAIgggBg");
	this.shape_3.setTransform(8.7,99.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3BDA3").s().p("AiPLHQjeAAh4gxIlZoSIA5iDQAIgRAlhAIAig9II0DUIFLAXQBRASBfAJQC8ATBCguQAOhJgdlgQgPixgRijQBmhZBTByQApA5AVBLQgFBIgFCfQgLE8gCG2Qn7Dwm4AAIgEAAg");
	this.shape_4.setTransform(-32,87.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDDAC0").s().p("AlEURQhCiDiSjUQhJhrg8hQIgGAAQiTkrg9iBQhojagThVQgyjhADiWQAGjaBsi2IHjnJQBug7CxgrQFehVFLBRQC6BJCMCjQBHBSAhBEIBwOiIhQCKIgFPKQi/BVkCBBQkeBHjlAAQi2AAiTgug");
	this.shape_5.setTransform(-48.1,24.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154.7,-111.3,215.6,273.6);


(lib.hairstyles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ArHAqQAbrGAWhZQDNAED1ASQHnAkDGBEQAQAFBlgcQByghAVgCIADAMIgcAsIgBgCQhhAniDAQQlLhAmggmQjRgSiPgGQgDB7gUD5QgUD3gDB8QgULRgWAAQgXAAAcrMg");
	this.shape.setTransform(-23.6,39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A5tO7QhGiwgGl6QgDjZAQjXQACgjAMgzQANg8ARggQAZgOA4gWQBwgqCYghQgJABgng5Qgng4ACgGQAIgSBBA/IBABCQgIgfAQiWQAQibASAAQAJgBgBCIIgCCiQBGhdDYjbQDcjgBUg6QGFgBHVAUQOtAnGYBmIBLAQQA9AOAEAIQAOACghATIglATIjrCNQjIB3hOAuQA0AdBfBTQBkBYgYAHQmTBuiQAxQgLA6hwD0QhBCNg8B4QgSg1gCgkQC3lhA6isID3hLQD4hJAGAHQgegog3gkQgfgWhEglQgVgLgWgTQgegcAigDIIOkxQoHhkt/glQm+gTlYABQgEABktE2QktE0gLACQjLAjh5AyQg8AZgUASQgaCDgMDBQgYGFBJE9IggBRg");
	this.shape_1.setTransform(1.2,-25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A322B").s().p("ABiLTIhmtAIgrgbQhCgjhygsQAIgXDfj2QBxh7Bvh2QACAfghLIIggLEg");
	this.shape_2.setTransform(-111.9,42.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3A322B").s().p("AAwB1Ii6A3QiOgnjQgkQmihGlRAPQEgiEHIiVQONkrNChOQifBRjWCCIi1ByIBuBPQBwBVADAnQn9BygGAkQg4CHjCGkg");
	this.shape_3.setTransform(42.4,-38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#564A3D").s().p("A54KHQgol+A4mqQBfhAB9gsQCOgxA6AbQB3iTCLibQEVk2BkgmQE9gDHbASQFNAMDVANQDOANEPAnQFxA1BKA3QjRBujCB2IiYBhIt3CqQt7CqgZAAIi+AAIgKCoIl3GLIiZgmIjAHtQgfhpgUi+g");
	this.shape_4.setTransform(-0.5,-25.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AADFiIgDgCIgIgvQAQgXARgiQAhhFgFg5QgIhkgOhkQgPh0gJgTQgHgQgpgbIgogXIgHhKIA3AeQA3AmAPAnQAZBEATC2QAVDVgjA+QgiA6gUAOQgFADgDAAIgCAAg");
	this.shape_5.setTransform(58.5,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#635F5C").s().p("AgxifQAMAEALAAQAkAAAhgaQANCDgKBZQgNB0gwAcQgNiwgVimg");
	this.shape_6.setTransform(60.9,38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#847E79").s().p("AgghRQgVicgWhZIAQAGQAUAJARANQA3AsAPBOQAcCLgBCKQgBC+hCAkQgPjhgZi3g");
	this.shape_7.setTransform(58.4,23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AC4F+QBkh/AghoQAWhHAAh0QAAhTiKiNQhthvg5gfQgigUg5gEQhGgFghAdQgoAig2BuQg5B0gdBxQgZBgArB1QAWA7AaAnIABALQgDAPgOAOQg+hSgUhWQgPhAADhmQADhPBSiiQBGiJAjgnQAdgfA5gLQBJgNBWAgQBdAhBsCGQBmB/AYBgQAUBOgiB4QgaBZgsBRQgbAygnAkQgUATgOAIIg8AzQgIAGgDAAQgMAABJheg");
	this.shape_8.setTransform(-127.2,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#635F5C").s().p("Ag+E1QjqhLAFgDQAVgJABgCQAIgPgpgkQgjg8gShdQgli3BUiiQAkCICIBZQCJBaCzAAQBhAABbgdQgbC2hYBkQhQBbh1AAQg4AAg+gVg");
	this.shape_9.setTransform(-127.9,32.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#847E79").s().p("AhDGzQjqhLAFgCQAVgJABgCQAIgPgpglQgjg8gShcQgli3BVijQBbivAeglQANgQANgEQAIgDAUgFQAsgOA/ACQBNADAxAiQBQA4BTBhQBZBoASBEQAMAtgLBfQgMB1goBdQhWDHivAAQg3AAhCgVg");
	this.shape_10.setTransform(-127.4,20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA5BrQiGhAgig3IgfhaIAEAFQBCBVCHBdIB8BPgAi1iZIAlAtIACAGQg7hLAUAYg");
	this.shape_11.setTransform(-41.5,-78.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AseJAQAchBgRh6QgmjtgPiBQgajnAlg/QAnhEAvgBQAbgBBZAlQA0AWBuAdQCRAlCOAVQGZA7DQhuQARgMAEgTQABgFAAgdQBpg4B1hWQCRhqAXg5IgMA8QgmBck2CmIACAlQgCAYgRALQjRBvmYgrQiQgPiPgfQhzgZgvgUQgTgIgugWQgigSgRgEQgygMglBAQgkBAAdDmQAQCCApDuQARB6gnA0QgTAagXABIgUADQARgIAOghg");
	this.shape_12.setTransform(-30.8,35.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AyQEsQAxh5BchuQBMhYBJgxQiSmsPQAAQhHhPAahhQAahfBnhAQBxhGCgAAQC2gBDJBbQG8DcBFD+QAbBggbBoQgSBGgyBZQAvBkhOExQgoCYgwCEIgXgpQAtiEAjiYQBIkwgvhiQA0hgAQg3QAchdgahUQhCjdm8jdQjHhLikAGQiRAFhcBCQhTA+gKBaQgLBbBFBQQi4AAhTAEQi4AJh9AfQlgBXBaEIQjKCFhQChQiHEOCaF2IAAAeQjhkSCFlIg");
	this.shape_13.setTransform(-51.6,-30.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3A322B").s().p("AskKrQhyhVhuhzQiJiygXjAQgViiA+ieQA0iGBghmQBXhbBKgVQg8h9BDhcQCPDbEgCFQEoCHFiAAQEbAAD8hZQDzhWCniYQhACrjjClQhxBThlAwQAHBEh6AkQhvAhi8gCQi4gCi6giQjIgliGg+QiAg7gsBXQgkBEAPCuQAFA8AnEEQAbC9gIBFQgJBGg3AAQg+AAh4hag");
	this.shape_14.setTransform(-52.1,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#564A3D").s().p("AsxPTQhyhVhuhzQiJiygXjAQgVikA+ieQA0iEBghmQBXhbBKgVQhxjvFNhuQCBgqC0gQQCagOCTAIQheiXBHhuQBAhnCygZQC3gbDVBFQDuBMDDCuQFYEzk5FRQhiBpiXBeQhMAwg4AbQAHBEh6AkQhvAhi8gCQi4gCi6giQjIgliGg+QiAg7gsBXQgkBEAPCwQAFA8AnEEQAbC9gIBFQgJBHg2AAQg+AAh5hbg");
	this.shape_15.setTransform(-50.8,-9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3A322B").s().p("Ahri2QgXhdBEh5QAhg9AlgqQA9BPAdCkQA7FHicGsQg4nWg0jTg");
	this.shape_16.setTransform(50.1,-9.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ApiOzQgYgvgPglIgOhdIAkBWQAqBgAdAwQg2n3AgmNQAZk3A8h5QBhDEDjC4QCjCFEPCfQgNgihqiAQh1iLkCkfQD5DTESCVQCPBPEQB3QC3BQA8AwQBDA3AuB1QCUmoACjrQABhggVhaQgMgxgmhsQgviHjyiPQhmg9kXh/QAcgWAegiQAmgrAYgtQgqAbiIAXQiOAZhJgLQo+iAjzDUQhUBJgwB2QgaBBgaBnQmoDZgHFyQgCB0AnB1QAUA7AUAkIgXA/QjEmACukzQB1jSDth4QB8nBGtg2QCNgSCpAbIDCAoQByACCggfQCXgeBKgiQgNAXgwBCQgyBHgkA8QFaB3C0C7QBaBeAVBGQCED/hZGEQgfCFg6CaQgfBUgyB1QgihngQghQgbg7gqgpQhRhOkjh8QkBhtixhyQhYg5glghQAwAxBGBTQCNCnBzCiQj6h6iYhoQk2jSiqj/QhGDBABHOQAAFLAhFZQgsgugvhdg");
	this.shape_17.setTransform(-42,13.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3A322B").s().p("ACXB3QgXgQgUABIgPAEQg1gYkAhpQiMg7h/hSQEfgKD8g6QD2g5C1hdQAIDshfEeQgwCPgxBhQhKjShKg1g");
	this.shape_18.setTransform(33.4,42.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A322B").s().p("AjuiRQCBAKCAAAIAEAAQB1CLBjCOQkUiLjJiYg");
	this.shape_19.setTransform(-29.7,40.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3A322B").s().p("AE6JGQgWgfgNgmQgkhgggkZQAFBsiQBVQhIArhHAUQj4lMggkdQgajjBvi8QBfBcCdBLQCaBLDKAxQgNDQAHEuQAFD+AQDiIgrg7g");
	this.shape_20.setTransform(-132.2,53.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAoDHIAggTQg0gLhBghQgqgUhpg3QA9gECFAvIB7AvIAMgkQhGjsAQhPQAhBRARAyQAXBBAKAuQALgbAQgaQgIBfgiA5QgjA8g5AAIgTgCg");
	this.shape_21.setTransform(-138.1,-55.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#564A3D").s().p("Ao/PkQgWgfgOglQgjhhggkZQAEBsiQBVQhHArhJAUQlznxBumAQBHj2D0ifQBGALAphFQAig6AHhhQCOkFEng2QDugrFEBcQExgTB6hNQgbAlgpBOQghA/gbAZQCfBDCcBXQBOArAvAeQFWD7hgIqQgeCthGC4QgjBbgdA5QhLjRhJg1QgXgRgUABIgQAFQhlgviMg5Qh7gxg9gfQjBhhl2koQBkBZB6CLQCZCtCEC+QnEjij2kIQhEhKg1hQQgigzgDAEQhBBPgGHaQgFFyAbGOIgqg8g");
	this.shape_22.setTransform(-43,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171,-121.8,344.6,237.1);


(lib.face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AghA/QgOgbAAgkQAAgkAOgaQAPgbASABQAUgBAOAbQAOAaAAAkQAAAkgOAbQgOAagUABQgSgBgPgag");
	this.shape.setTransform(49.2,-17.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmBBQgRgbAAgmQAAglARgbQAQgcAWAAQAXAAARAcQAQAbAAAlQAAAmgQAbQgRAcgXAAQgWAAgQgcg");
	this.shape_1.setTransform(-24.6,-18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai8AHQgQhQAagdQDKg3CfgLQAXBsgXBBQgHAVgLAPIgJAKQg9AVhMAmIhuA7QhOhAgThigAADhqQhTAPhBAbQgHARAEAfQAIA8A3BKQCShFBVgfQAXgTgChAQAAgggGgcQhbAGhDANg");
	this.shape_2.setTransform(51.8,-45.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#564A3D").s().p("AiLBFQgfhKgDhDQC7g5CcgNQACAJABBBQABBFgFAZQgkAOhLAiIiaBFQgQgHgbhDg");
	this.shape_3.setTransform(52.6,-45.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACuBkQhbgshLgUQjTg5ivBoQgGADgJgBQgKgCgHgGQgEgcAVg1QAVg5AZgTQAiguBvgaQDagzF7BmQAaAdgQBQQgTBihNBAIiHhGgAEuB3QA3hJAIg9QAEgfgHgQQmtiBjCBgQhbAtgZBaQBDgoB3gMQAfgDAfAAQDPAADgCGg");
	this.shape_4.setTransform(-34.4,-45.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#564A3D").s().p("ABCAjQhagjhBAAQhOAAhnAUQhrAYgPAYIAuhsQAlg0BvgeQDcg9FzBxQgDBDgeBKQgcBDgQAHIj6hug");
	this.shape_5.setTransform(-35.5,-45.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3BDA3").s().p("AgGAuIhwATQhyASgOgFQgYgGhahIQgHgdBZgdQBMgaCEgSQBigPCxBaQBYAsBFAxIhGAng");
	this.shape_6.setTransform(-39,-37.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAVQhDg1AKgWQAGgOAEAAQAJACA3A4QA1A2AUADQAEABAAAJQgBAJgDABIgIACQgaAAg4gwg");
	this.shape_7.setTransform(-35,57.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAxA1Ih7hNQhBgqgXgFIg1gHQgYgDgSgIQgEgCAAgEQAAgFAEgBQBEgdBXAmQA8AaBIA/QAfAYBQAlQBcArAWgPQAEgDACAEQACADgCADQgRAWgiAAQg5AAhog+g");
	this.shape_8.setTransform(-24.9,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghA/QgOgbAAgkQAAgkAOgaQAPgbASAAQATAAAPAbQAOAaAAAkQAAAkgOAbQgPAagTAAQgSAAgPgag");
	this.shape_9.setTransform(48.9,-21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnBCQgQgcAAgmQAAglAQgcQARgbAWAAQAXAAARAbQAQAcAAAlQAAAmgQAcQgRAbgXAAQgWAAgRgbg");
	this.shape_10.setTransform(-25,-22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAaC0Qg0gkhMglIhzg3QAFhiBChKQA4g/AnADQClCCBoB3QhIBThEAWQgVAHgRAAgAhlhoQgtAsgaBWQCTBPBHAvQAeAGAygoQAagUATgVQiAiRhpg+QgRAFgWAVg");
	this.shape_11.setTransform(52.2,-52.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#564A3D").s().p("AgsBqIiVhTQgFgRAlg7QAqhGA1grQCfB2BmBxQgGAIgzAoQg5ArgWALQgigVhFgog");
	this.shape_12.setTransform(52.2,-51.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AlGEXQgSgWgKg6QgJg7ALgdQAHg6BShLQClibF6hmQAlAMAbBPQAgBfgiBdQhgACg4AEQhkAHhMAUQjTA5hjCyQgDAGgJAEQgGACgGAAIgGgBgAkdA2Qg4BVAZBcQAkhHBhhFQDAiJEtAGQALhbgZg6QgMgdgOgLQmzBph4Cyg");
	this.shape_13.setTransform(-34,-46.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#564A3D").s().p("AlPCLQAFg/BRhQQCiijF3haQAgA7ALBSQAKBIgKANQh5APiWAQQhhAMg4AhQhEAohOBGQhRBLAAAbg");
	this.shape_14.setTransform(-34.5,-45.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3BDA3").s().p("AlFCTQgWgXA+hEQA2g6BphTQBPg/DEgKQBjgFBUAHIgpBGIkhBhIhVBIQhaBJgOAEQgGABgLAAQgjAAhWgOg");
	this.shape_15.setTransform(-33.8,-33.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ABCAjIiPgaQhMgMgYADIgzANQgXAGgUgBQgEAAgCgEQgBgEACgDQA0gzBfACQBCACBaAeQAmAKBZAEQBlAEAPgUQACgDADACQAEACgBAEQgPAyhnAAQgoAAg2gIg");
	this.shape_16.setTransform(-26,50.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLhvIAmAAIgcDVIgZAKg");
	this.shape_17.setTransform(-18.4,49.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAmQgkgVgUhAQASAWAbAWQA0ApArAAQgaAKgVAAQgVAAgQgKg");
	this.shape_18.setTransform(-51.1,69.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AirDJQgOgPhci0QhSigAYgpQAKgQAagBQAOgBAmAGQAsAGEUBdQCKAuCCAtQglATkIhIQiEgliRgtQgPgDgegIQgTACATA2QAVA7A6BqQA3BlAQARQANAMCFggQBDgQBBgTIgHAKQgMAMgVALQhDAkiIAQIgtAHIgDAAQgOAAgMgMg");
	this.shape_19.setTransform(-27.3,44.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C1C1C1").s().p("AiZAGQgnhZgGghQgGgmAggFIAiADQBKAVBLAZQCbAyATATQAJAJAEAdQADAYgCAjQhdglizgyIgigDQggAFAGAkQAHAoAzBxQglg+gphcg");
	this.shape_20.setTransform(-38.2,41.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcC6QgcgLhEiMQhCiEgIgyQgGgmAggFIAiADQBKAVBLAZQCbAyATATQAVAVgIBbQgIBbgUAUQgTAThMANQgqAIgbAAQgVAAgNgFg");
	this.shape_21.setTransform(-38.2,45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghA/QgOgbAAgkQAAgkAOgaQAOgbATABQAUgBAOAbQAOAaAAAkQAAAkgOAbQgPAagTABQgTgBgOgag");
	this.shape_22.setTransform(48.5,-17.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgnBBQgQgbAAgmQAAglAQgbQARgcAWAAQAXAAARAcQAQAbAAAlQAAAmgQAbQgRAcgXAAQgWAAgRgcg");
	this.shape_23.setTransform(-25.3,-18);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhMCCIh+gOQgchhAnhZQAhhOAmgJQDCBECNBSQgqBkg4ArQgSANgRAGIgOADQg/gRhRgLgAiPhFQgdA4AEBaQCdAaBaAWQAegDAjg2QARgbAMgbQhPgsg+gbQhNgkhFgOQgPAKgOAcg");
	this.shape_24.setTransform(54.3,-43.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#564A3D").s().p("AgUByIiogeQgJgPAPhFQARhQAkg5QC5A7CJBOQgDAGgkA3QgnA7gSASQgngKhOgOg");
	this.shape_25.setTransform(54.6,-42.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Al+C7QgLgaAGg7QAHg7ATgZQAVg0Bkg1QDJhqGHADQAgAWAFBTQAGBig6BRIiUghQhjgUhOAAQjbgDiOCTQgFAFgJAAIgEABQgHAAgIgEgAkagRQhNBBAABfQA2g6BwgpQDehREhBTQAihTgIg+QgEgfgLgOIhRgBQl+AAiUCAg");
	this.shape_26.setTransform(-36.8,-43);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#564A3D").s().p("AldAyQAXg6Bjg5QDIhzGBAPQAPBBgLBSQgJBFgOALQh4gSiVgZQhhgMg/AQQhMAUheAwQhiAygIAbg");
	this.shape_27.setTransform(-37.9,-42.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D3BDA3").s().p("AjiBoQgSgQhwghQgOgcBOgwQBEgrB7g0QBdgnDAArQBhAWBOAeIg6A4IjlB3Qg4AOg/AFQgbACgYAAQhbAAglggg");
	this.shape_28.setTransform(-34.6,-29.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AifBTQgqhJAPghQCth2CTg+QA5BeAABHQAAAWgGAQIgFAMQgzAog7A8IhVBcQhegjgyhWgAiOAAQgBASANAcQAcA4BMA0QBwhuBKg6QAPgbgWg8QgMgegOgZQiyBNhbBPg");
	this.shape_29.setTransform(49.3,-42.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#564A3D").s().p("AhjB7Qg2g+gYg9QChhzCMg/QAFAJAWA9QAYBDADAZQgeAXg8A4Ih6B0QgSgBgvg3g");
	this.shape_30.setTransform(50.6,-42.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABpCTQg7hSg2g2QigiWjMAJQgGAAgIgGQgHgGgEgJQAJgbAtgmQAugnAfgGQA0gYBtAeQDZA9EcENQAJAlg1BBQhABNhiATIhVh+gAihh+QDZBdCZECQBTgnAlgzQASgZACgSQk+k8jWgJQhmgEhBBGIARgBQBKAABiAqg");
	this.shape_31.setTransform(-35.3,-40.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#564A3D").s().p("ADQD3IinjXQg9hKg5gfQhGgmhlgdQhqgfgYAOIBdhKQA5gdBwAbQDfA1EPESQghA6hAA0Qg1ArgSAAIgCAAg");
	this.shape_32.setTransform(-36.1,-40.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D3BDA3").s().p("AgcCQIhlhGQhnhQgHg+QgCgYg7hkQAJgeBbARQBPAPB7AuQBfAjBvCjQA4BSAlBLIhRACg");
	this.shape_33.setTransform(-41.5,-33.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAQQg2hCAOgTQAKgNADABQAJAEAnBCQAqBBASAIQAEABgCAJQgCAJgEAAIgCABQgaAAgxhCg");
	this.shape_34.setTransform(-37.5,54.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAjA+IhmhmQg3g3gWgKIgxgSQgXgJgQgMQgDgCABgEQABgFADAAQBJgOBNA4QA2AnA4BLQAYAgBGA2QBRA9AZgKQADgBACAEQABADgDADQgPAMgUAAQg7AAhohhg");
	this.shape_35.setTransform(-25,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:-25.3}},{t:this.shape_22,p:{x:48.5}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_23,p:{x:-25.6}},{t:this.shape_22,p:{x:48.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.6,-62.6,147,126.7);


(lib.ear = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABWJ/QgigOgkguQhHhhh3iwQiUjcAGgXQBAkWAeh7QAUhTAlhiQAsh2AWgFQAsgLCEAzQCPA1ANAyQAxA5AjMMQgOACgolUQgvmFgWhXQgNgihcgjQhWghhMgHQhHCwgzC4QgwCqgNBtQAYBFCHDAQCLDLBEAwQAkAeA0hKQAvhQAFAAQAdAAgUA8QgSA0gPAPIADAFQgFAGgYAWQgQAPgGAOIgBAAQgeAOgaAAQgSAAgRgGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABhCjQgIg/giipQgji0gRg5QgXAAgzBBQgyA+gDgBQgNgFAfg5QAagyAOgPQAXgYAXgLQAlgTAOApQAXBHAoDSQApDTgIAOIiYCjQg9gcC3ieg");
	this.shape_1.setTransform(0.7,-3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3BDA3").s().p("Ah2iNQgEgdA0gvQAvgrAhgLQA2BPAiDTQAQBqAGBaIhGA5g");
	this.shape_2.setTransform(0.2,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDDAC0").s().p("AkpA4IDZqVIEcBiQA9CCAODOQAJB2AIDvQAIB5gVBiQgZB4hEBNIiBAEg");
	this.shape_3.setTransform(0.1,-1.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-64.6,63.6,129.1);


(lib.LegsJump = function() {
	this.initialize();

	// jumplegs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIHLJQgTg2Agg+QAcg4BRhwQBNhqAdhAIAXgyQAOghgBgUQgCgig6gzQhLhCh0geQgRARguAYQhIAphcAdQkdBZl3g5IADAkQAAAngJApQgdCDh0B2QhIBEhSAyQhZA1hYAYQhWAXhNACQhjACg+ghQg7gggHhNQgHhOA5gmQAOgKAcACIArAEQA7AEBAgNQBogWAsg+QAhgmANgmQAPgvgTgnQgPgegageQgQgUghghQhuhehakDQg+iwgPhpQgVgiBYgfQAOgFBjgZQAdgIB3gnQBageA8gKQCngcDDARQCsAPC3AxQDKA2CVAxIBnAkQBAAXAoAMQANgCALAJIAJACIgCAHIABACIAFAGQAQAgAIBJQABADC8BtQDPB/BSBVQAiAfATAbQAYAiAEAlQAIBHg4BZQhgCbibCoQiTChinArQgRAEgPAAQguAAgRgugAJcjbQAKAFABALQADA9gqA/IBjAwQBnA2AiAxQAZAiAFAgQAGAhgOAmQgPAmhOB9QhABmgoA5QgnA4gJARQgaAxAKAiQAIAdCvhZQCKhnCEi1QBtiVARg+QANgxgYgsQgMgYgugzQhHhRjOh7QiuhogegIQgJgCAAgJQAAgJAIgDIgFglQgEgXgEgPIgBgBQgTgNh3gsQiZg4iigrQnpiClEA4QhhARjDBCQACAEAAAEQgBCUA5CsQArB+AgAtQAaAiA9AsQBDAuAYAbQAyA6AABbQgBBghCBaQg9BThdAwQhSAkiCADQhiACgXgJQgBAlAVATQATATAoAGQBYAPBRgOQBZgQBXgrQBUgpBGg+QBMhCArhKQAyhXgBhaQgBhYg2hHQgrg6hWg6QgKgHADgNQADgOANACQAsAGAcAUQB8BZAgBpQK3B1DKkpQAIgLARgpQAPgiAPgPQAFgFAGAAQADAAADABgAxqHsQgcAFgEASQAMADAYADQAaAEALADQAuACBhgUQBwgWAkgbQBjhLAqhpQAyh+hRhVQgXgXg3gkQg3ghgWgYQgcgdg2h/Qg2iAgIg1QgSh5AChTQhOAcgBAEQAHA1AOA6QAPA9ARAuQA0CNAaA4QBACJA9AjQA6A4AYAhQApA6gCA2QgBBDgsA9QgnA3g+AlQhTAmh+gBQg4AAgOACg");
	this.shape.setTransform(132.9,75.8,1.002,1.002);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAAEEQpbg/jFh+QhQgzAEgyQADgwBFgkQC/hjCWgkQD5g7ESA5QBpAWDPAoQCuAlBjAfQEIBUgjB8QABAQgMAYQgYAvhDAjQiLBHkfAAQiYAAjCgUg");
	this.shape_1.setTransform(107.9,30.4,1.002,1.002);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AkaBtQg0gjgGglQgFggAegZQAdgZAwgMQAxgMAvAHQBRANBAgnQAdgRAsgsIAXAfQAdAjAgAYQBiBIBUg4QioB6inAwQhOAXhBAAQhXAAg7gpg");
	this.shape_2.setTransform(43.6,128.4,1.002,1.002);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AjnDGQgngaA6h1QA3hsB4iYIATAWQAWAZAfAQQBgA0B1g3QiiC3iNBjQhkBFgxAAQgQAAgLgIg");
	this.shape_3.setTransform(212.8,128,1.002,1.002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("AIZLKQgdgZBHhpQBniWA6hqQBUiXgSgoQgYg2huhBQh4hFg4AiQiUBWi1AvQk1BRkFhgQgDDNhlCKQilDfmRAPQg8gEgiggQgdgcgCgoQgBglAVgcQAYgdAkAAQCBAABcgnQCUg9AEiTQAChHgpgqQg+gwgoglQikiag+mxQBSgfCWhHQCLg5CQgLQGKghMiEVQAHA8ANBCIBcAyQBtA9BbA7QEjC8gDBkQgFB1jHDhQhWBhhUBEQhYBJg3AOQhGATgmAAQgaAAgLgJg");
	this.shape_4.setTransform(133.4,74.2,1.002,1.002);

	// jumpfeet
	this.instance = new lib.Foot();
	this.instance.setTransform(193.2,139.6,2.224,2.654,22.3,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.setTransform(14.3,129.7,2.654,2.654,49.7,0,0,-6,-11.5);

	this.addChild(this.instance_1,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.5,-0.4,275.6,186.7);


(lib.HeroLegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsOPRQgRABgBhjQgBg/AHi0QARmlgSiYQgIhmg1lgIhBmpQgVgiBZgfQANgFBjgYQAdgIB3goQBageA8gKQCogbDCARQCrAPC5AxQDJA1CWAyIB2ApQBHAZAwANQAtALAIBGQAFAngCBKQAGB5gBC7IABAdQAEC4gFCIQgIC8gaChQgIAygNBpQgOBegUA7IgpB/QgmBggfggQggAagrAFQgtAGgjgWQgjAegOgxQgKggABgsQADg9APhkQATh6AEgnQAMiAgBjUQAAj/AEhTQiCAilvgEQl+gFhcgxQgDBhgRDaQgRDQgCBvQgECfgnCIIgYBcQgUA5gfARQgwA+g6ATQgVAHgSAAQgsAAghgngArQr+QAdAJALBBQAGAjADA9IAQBvQAIA/ABAwQAFCXAbE8QAFAygMC0IgPDfQgEA/gFCTQgJCCghBJQB0gvAli6QAMhAAGheIAIiLQAPi8AHilQAEhuABhQQgEgsABgcQACg1AXgJQC1A6DlAPQCsAKD2gOQBbgFBcgkQApgQB6g8QA5gdAQgEQAngLguA0QgnAthaAlQACClgIDTQgRGsg6EDQAFBAA6gHQA2gGAcgvQAyhUAWiLQAWiFAcloQAcligDhnQgBhLgMiXQgLiGgCgMQnrj1ocgHQjjgCivArQiqAphHBIQAXBQANCKQASCxAHArQAPBcAMCFIATDgQAKBlgCCIQgBBPgGCfQAAAYgTCyQgKCmAjAHQARglAPifQALhuAFhjIAPjlQAKizgFgtQgTizgQkkQgFhngZiVQgPgxgGgjQgLg6AYAAIAIACg");
	this.shape.setTransform(72.8,37.3,0.359,0.359);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag4EKQgdAAgbgPQgWgMgFgLQgHgQAFiNQAEhfANjxQBFBaBqgaQA1gNAogfIgLCLQgUCegsBqQgsBshPAAIgCAAg");
	this.shape_1.setTransform(50.2,62.9,0.359,0.359);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Ag4D2QhDgKgSgkQgPgeAOhCIAliTQAahtAGhfIARAPQAXAQAZAIQBQAcBOg5QgdDMgtB9Qg3CbhCABIgLgCg");
	this.shape_2.setTransform(98.2,62.2,0.359,0.359);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("ArtPYQgkgEgRgKQBIjOhKsqQgkmWg0ltQD0hzDfgjQDIggDXAdQCoAXD0BIQCQAqFABlQA1D6g1JxQgTDqgdDQQgaDBgQAwQgbBShhAYQgmAJgfgGQgfgGgGgSQgFgSAWlWQAamogDk/QjnBamigrQiDgOiHgaIhsgWQgQDOgVDlQgpHPgWB9QgWCBhtAfQgeAJgfAAIgUgBg");
	this.shape_3.setTransform(73.1,37.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},2).wait(10));

	// Layer 9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AT2MKQg1gIgbgqQgbgoANgxQgDgFgBgHQgCgPALgWIAQgkQAQg0ALhEQATh2hAikQgohqiOguQgvgPg0gGQgngFgMACIgFABQh7A7jPArQmcBVmrhUQgkBJh8CNQhnB1gpAiQjgC7jQBHQh9ArhrgEQiIgFhKhSQg8hJA4g4QAUgUAcgLQAZgKAIADQAKAFBBgSQBHgTBPgfQDahVBMhdQBihwARjSQAGhDgEhFIgFg8QgHgygXhpQgVhmgIgzQgVgiBZgfQAOgFBigZQAegIB2gnQBageA8gKQCogcDCARQCrAPC5AxQDJA1CWAyIB2AqQBHAZAwAMQAWAGANATQAHAEAQAMQARANAdAQIAwAbQBeA7BDA2QCnCJBRCzQBGCZgfD1QgOBugcBWQgUA9gUAbQgNAgglAdQgaAVghAJQgXAGgVAAQgMAAgLgBgAPBhJQBUAWBYBBQBuBVAVBjQAdCmggCZQgUBcgWAjQAGAwAHANQAPAcAsgCQAggCAngaQAbgTAHgJQA7iVAKikQADg/gMhoQgPh/geg8QghhhiIiFQhHhFhTg/QgrgUhFgpQgQgJhOglQhOglgcgMQgwgUg+gTQgjgLhNgVQiQgshHgVQh+gkhegOQkggrjbAmQhLANhtArIizBFIgDAEIgDADIgPAYQASA/AXDWQAXDVgFA2QhFFGlbCPQhuAth9AVQhcAOgRgEQgEABgJASQgKATAEAFQAwBGBPAVQCrAtEfikQCbheCQiLQAcgaAigmIA7hDQA0g3AjhNQARgnAJgaQDEA9DHAMQDCALDRgkQB6gWD/heQAFgCBEgDIAvgBQAeAAAKADg");
	this.shape_4.setTransform(70.6,28.8,0.359,0.359);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AEAEGQnfgzlPhsQiyg4g9g3QhEg+BYg4QBbg5C0goQDBgrDagFQIigLFtDiIALA7QAFBIghA3QhUCOkjAAQhNAAhbgKg");
	this.shape_5.setTransform(70,11.9,0.359,0.359);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AnEI3QgHgBAAgJQgBgIAIgBQAPgCAaABIApABQAagCBGgKQBegMBJgkQB1g6CHhmQBFg1AuguQA7g7Ajg8QAfg1AOhDQAJgnAJhZIgEgCIgDgsQgFhkgZiZQgPgwgGgjQgMhDAhAKQAeAJAKBBQAGAjAEA9IAPBvQAIA/ABAxIABAFQAGAegBAnQgBAXgEAtQgDAWgEAOQgMBMgoBBQhNB4iMBnQhXA+g0AiQhOAyhEAdQhRAihZAJQgeADgeAAQg7AAg5gMg");
	this.shape_6.setTransform(33.3,30.5,0.359,0.359);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhjDiQgXgYgQgtIgLgpQANgjANg/QAYh9AAiMQAQAsB1AgQA7AQA4AIIgGBPQgLBggUBgQhfB8hAAAQgdAAgXgWg");
	this.shape_7.setTransform(118.9,46.9,0.359,0.359);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AlvgDQgNgxAxgJQAKgCBeAAQAtAABtgfQBRgYAmgPIAiAQQAqATApAOQCFAqBLgfQkICuiiAcQgiAFgfAAQiaAAhdiJg");
	this.shape_8.setTransform(29.1,49.9,0.359,0.359);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("AUCLwQgugHgVgoQgXgtAUhKQA/jxgliMQg8jkk3gnQlSB/jPAYQkoAilvhmQhGCgiNCWQiCCKihBlQidBjiNAiQiSAlhUgsQichRAKg9QADgYAegOQAdgMAnACQBEADBvggQCgguB0hiQFbkoixqEIAcgQQAlgTAtgSQCTg6C2gWQJChGLCE5QCZBdBOA8QCNBsBUB3QDkFEipHBQgaAygwAbQglAVgkAAIgSgCg");
	this.shape_9.setTransform(70.2,29.2,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[]},2).wait(8));

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhwJqQgwgDgkgYQgfgWgVgZQgZgggDgfQgBgMANgCQANgBADALQAlBzCFgPQBLgJBegwQBagtAohhQAlhZgNhsQgLheguh3Qg5iKgchFQgZhBgjh9QgoiRADgmQABgEAEgBQAEAAABAEQAQBDAqCFQA8C7A5B6QA4CGASBcQAZCBgdBtQgNAxgaApQgdAsgnAaQgoAagvAXQgxAXgqAOQgnAMglAAIgMAAg");
	this.shape_10.setTransform(44.9,31.3,0.359,0.359);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("APZOgQABlti9m0Qg7iGhHh/Ig9hlQjMBemHgCQh5gBiAgKQhXgIgWgEQAXBogLBdQgQCMhdCFQhcCDh+BDQh3BAiEACQiZADhUhaQgmgqgFgwQgGgzAgguQALgQAjgJQAggIAGAFQAzAmBMgUQBAgQAzgvQBBg8AThIQARhGgYhWQgGgYh4lZQhokugOhcQgWgkDShFQCxg7BxgSQHOghHUCDQDsBCCPBIIANBJQANBKACAXQBeB6BbCoQCOEFAMCwQAXCFAKBPQAPB0AABhIABB3QABBHgCAwQgEBzgjA0QgqA+g7AHIgGAAQgxAAgOhcgAKxlIQAHAHgFAIQgSAcgcAXQAYAYCHEYQCMEkAaBZQAYBUAQB0QAHA1AQCWIALBeQAEAgAQACQAQACASgXQAZggAHg5IAFhhQAIiYgRjCQgYkQhCi4Qgjh8g5h0QhMiahth/QgNgbgGgtQgJg6gEgPIgBgBQgSgMghgKIgzgRQgwgUg+gTQgjgLhNgVQiQgshHgVQh+gkhcgOQkigrjbAmQhTAPilA/QiYA7gEAJIAZBhQAQA/AMAmQAVA5ApBhQAwBvAQApQBECvAHAXQAjB2gVBYQgUBUhGBGQhFBGhUAYQhRAYhAgaQghgOgMgRIgOASQgHALgBAEQgIAaADAMQAJAhAdAZQAfAaAoAPQAnAPApACQDhAICoi2QBShZAohjQAthugNhtQgLhlgphUQgrhZhIhBQgLgJAIgOQAIgPAOAGQBCAaAwA+QAsA3AbBOQD+A1FRghQB3gMBpgVQBXgRAWgKQARgJAngYQAjgVAVgKIAGgBQAFAAAFAEg");
	this.shape_11.setTransform(76,37.9,0.359,0.359);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ak7DYQlBg6jTheQgTglgGghQgGgpAHhDQHEjrKkCSQDUAtDQBPQBpAnA+AeIAOA3QAPBCADAmQlSBvl0AAQjpAAj4gsg");
	this.shape_12.setTransform(72.8,11.5,0.359,0.359);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AizCKQhKgUgrgnQhGg+Ang2QAOgUAYgNQAVgLAMACQArAJBBgIQBqgOBrg8QAbBRCAgBQA/AAA7gRQiCDVjdAaQgcADgbAAQg6AAg5gPg");
	this.shape_13.setTransform(46.1,51.6,0.359,0.359);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhIA9Qgbj9gPhGQA9BLBOghQApgRAcggQAmDoghCaQgdCLhCANIgEABQgrAAgdjRg");
	this.shape_14.setTransform(114.3,63.4,0.359,0.359);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AP0MfQgFhJgJhMQgQiTgfiNQhkm4julZQiCAug6ATQhgAehZALQjRAZmug8QAvFAhuC6QhbCai1AwQiWAoiTgqQg/gSgmgcQgmgdABgeQgCgwAigkIAigaQDjA3Bch4QCgjRlCrAQD/BELOARQEXAGDegFQDdgFAegOQCyEPBXDxQCkHKgxIWQgdBFg3AdQgSAKgOAAQgaAAgFgpg");
	this.shape_15.setTransform(76.1,43.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},4).to({state:[]},2).wait(6));

	// Layer 5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiwIEQgJgSASgKQASgLAJASQAMAWA5gNQASgEA4gUQBFgXBPgvQB7hKAPhbQAJg9gdhEQgchAgygqQg1grh6hBQh5hBg1gsQhOhCgrhVQguhbAChhQAAgFAFAAQAFAAABAFQAGBDAqBPQAnBLAzAxQAqAoA5AmQAoAaBCAmQCFBKA4AyQBeBUAJBtQAJBrhRBWQg6A+h1A9QhCAihAANQgbAGgWAAQg3AAgSgkg");
	this.shape_16.setTransform(57.2,30.8,0.359,0.359);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhKPZQgkgBgdgOQgcgNgIgRQgXgtAvhvQAXg1A0hdQAohFCtkWQCfkKAWhiQiYALgdAAQAdBHg2BhQhwDRi/B0QjTCAjagyQg5gfAQg9QAMgxAwgsQAcgaA9gRQBGgSAXgPQA1giAlgqQAsgzAJg0QAJgyg5g5QhChDhugWQiTgmhWhTQgqgpgxhVQgSgfgjihQgeiLgLhPQgHgLAegXQAggaA7gbQCZhGDXgcQEXgkEyAyQF8A9GIC8QgKA/gUBfQgoC+g1CkQhbDvikDwIhJBuQgrA/giArQhXBxhNBqQhhCHgvA7QhBBHhVAAIgJAAgALQk6QADAEgBAEQgPAzg1AyQgtAqg4AbQhsA0hRADQgDA5gbBFQgOAmgpBSQhKCYhrCkQhjCbhVCoQgVApgEANQgOAnANARQASAiAwgUQAngQAXgcQAWgaC1j5QApg3BjiLQBsiWAfgvQCSjXBcjpQAUgyAzi0QAuikAGgaQhOgyiyhBQjchQjhgqQp7h4lvDtQABBiApCOQApCMAnApQAsA1AlAeQAzAqAzAMQDZAyBLBhQA2BEgTBVQgRBLhEBCQgoAnglAXQgqAbgwAMIg4AQQghALgRATQgaAcgFAoQCuBHDLh5QC2hrBki7QAdg2AChPQAAgghShDQhbhFgXgUQgYgVh5hQQh3hOgSgRQgDgDADgEQACgFAFABQBYAbC8B+QCiBtAkAmIBCAGQBTAEBQgJQEBgfCGieIACAAQADAAADACg");
	this.shape_17.setTransform(73,35.5,0.359,0.359);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AjPCnQgFg2A0h2QAvhrA9hbQgeBJCNASQBIAJBNgGQkqE5hUAAQgdAAgEglg");
	this.shape_18.setTransform(75.2,62.8,0.359,0.359);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("Aj6CpQhDg9Aog7QAigxA/gJQA3gJBJgtQBPgyAfg4IATAZQAZAeAbAWQBWBGBOglQiwCNhdArQhhAth+AAQgZAAgagBg");
	this.shape_19.setTransform(60.6,47,0.359,0.359);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AnXCyQiMgsiGg3IhqguQgDgNgFgXQgJgygDg+QEKidFLgUQENgREiBLQDiA6DBBhQCkBRADAeQAKBMhYA+QiKBhlcAaQgzADg1AAQkoAAl6h2g");
	this.shape_20.setTransform(73.2,11.3,0.359,0.359);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C4C4C").s().p("Ah8OyQg9gUAqhVQAOgcBciYQBti2A+hsQDimMgfhXIijAPQgzAEgfAGQATArgXBcQgbBuhEBeQjBEImJgfQhSgwBLhBQAtgnBZglQChhDA1hgQBdipmSiSQhJgLhLhUQiWingGlrIAdgQQAngUAwgSQCag6C6gVQJShCK5FOQgnEsizFyQjfHKmLHWQhJAagxAAQgXAAgRgGg");
	this.shape_21.setTransform(73,35.4,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},6).to({state:[]},2).wait(4));

	// Layer 7
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AKvLEQgWgkgihUQgghRgagnQhbiKhkhaIhoheQg+g1gyggQgugdhDgjIhwg+QgugahQglQhegrghgRQhog2hshSQhhhKgyhgQg1hlAFh1QAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAABAAQAAAAABABQAAAAAAABQABABAAABQAIBMAfBKQAhBOAyA1QAlAnAzAmQAmAcA7AmQAvAdA/AhIBwA4QBOAnCXBXQD5CLCiCpQBtBwAwBYQASAhAhBQQAeBLAXAmQAJAPgQAJQgGADgFAAQgIAAgFgJg");
	this.shape_22.setTransform(71.2,33.7,0.359,0.359);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AJnNCQgOgCh1i2Qh4i7gpgRQgWAHgoAWQgpAXgVAHQgwAShVAQQiUAdh2gWQiegfhfg+Ig2gkQgggXgRgUQgagXABgjQABgbAKgMQA4g6BqAiQCqAxCUggQBagUAigeQh6hLiSg+Qicg+hLghQiAg8hUhIQgjgeg+hPQg2hEgHgNQhMjhAIhXQHRkVKiCCQDUAoDgBRQBxAoBfAnQAPAEAKAKIgGAsIAAACQgwFEh1DdQgoBNg2BKIhOBmQBRByAsBqQAkBVALAxQATBSgSBKQgQAggiARQgYAMgaAAQgKAAgKgCgAs+p4QgWCuBrCZQBaCBCQBFQBJAiCeBDQCGA2BOAoQDnB4CfCWQBoBkA0BWIBFB3QA1BaANANQALAOASABQATACAQgNQApgfgQhOQggifhfiZQinkMlPjaQgwgZgYgOQgogZgNggQgEgKAKgHQAJgGAJAFIBzA8QBuBCB7BvQBIAAAygFQBCgHA0gTQAFgCAEAFQAEAFgEAEQgWAghVATQg5APgkACIBEBNQBGBRAfAoQACgFAzhEQA8hUAvhUQCYkYgFkBQhHgpijg4QjUhJjYgmQjIgjixAAQl1AAkHCcgAn8EdQgTAHgLAKQgNAMABAPQAvA9BYAvQBcAwBuASQEGAqDfiUIhMhCQhCg2gmgUQgtAhhaATQihAijKgwIg0gMQgNgCgKAAQgPAAgMAEg");
	this.shape_23.setTransform(71.9,30.5,0.359,0.359);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("ABZDpQgJgCheiSQhyishKhSQBuAoBYgwQAqgXAVggQAcA3AkBTQA8CGAQBFQARBHg1AhQggAUgfAAIgLAAg");
	this.shape_24.setTransform(90.6,50.8,0.359,0.359);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AiLCHQhegbhYg4QgbgRhGg0QgxglAxgkQAUgOAagFQAcgEATAKQEbBFCZg4QBOgcAVgqQAWgCBEA+QAoAlBnBoQjOB4jFAAQhaAAhZgag");
	this.shape_25.setTransform(67.2,43.9,0.359,0.359);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("ABfEbQlggMlPizQhpg4hag/IhFg3QFykZJ5BuQFfA9FECWQA2AagcA2QgcA6hfA4QhrA/iWAjQiUAiinAAIg6gBg");
	this.shape_26.setTransform(71.9,11.3,0.359,0.359);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C4C4C").s().p("AI+MFIh+jaQhcicgggGQhuBQipAfQlOA+kkj2QAFgrAegSQAhgTA0ARQBxAjCYAEQDYAEA2hkQhQg5jFhRQjghahagzQiphghSh9QhlibALjcIAcgOQAkgSAtgQQCRg1C0gUQI+hALGEdQg1FRg/CvQhPDZiHBnQBcClAcA4QBOCegHAyQgJBDgvAmQgWARgTAAQgbAAgXgjg");
	this.shape_27.setTransform(72.1,30.9,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},8).to({state:[]},2).wait(2));

	// Layer 11
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AB5QSQgWgDgRgRQgMgNgOgcQgPgdgfiJIgliyQgoi1h1jBQh4jGiViIQh9hphmhbQjFiygkhPIgiinQgVhoAIgwQGOkwLoCeQF3BPEsCVQAZAqAmC4QAjCoAGBPQAUECiKC2QiGC0jBBUQgsAUh0ARQhsAPghgDQAiDZALBsQAQCmgXAhQgoA3hEAAQgLAAgNgCgAt3szQADBIAKBIQAKBSARA8QAUBDC9CaQBiBQB+BgQCnCaBpCzQBsC7AsC4IArDTQAhCiAJAQQAGAJAhALQAiAKAJgFQAqgaADg7QABgxgojPQgpjWgfhYQgminh7i8QhjiZhPhDQgJgIAHgLQAHgLALADQA8ARA2A3QGVATDniCQBOgsA5g+QATgWArg7QAHgKANAEQANAFgFANQgiBihaBKQAVAnACBaQADBvglBbQhqEMl0geQAoBlANAwIB0gIQB/gOA+glQDCh0BgiSQA9hcAThrQAQhegMh8QgHhIg0kbQkMiElYhSQkVhCjqAAQlWABj1CMgAAuAqQBCB+AVA0IACAAQBfAVBjggQBhgfBHhHQBKhJAahdQAbhngmhqQhEAqhwAnQjfBMjlgOQAaAlBCCCg");
	this.shape_28.setTransform(73.8,36.9,0.359,0.359);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AG5N1QgDg9gQhSIgeiOIgbiFQgQhMgPg4Qhbk9imitQhEhIh8hzIhghUQg5gzgkgkQhDhFg9h7QgYgzgLgoQgOg0AGgtQABgHAIgCQAIgBABAIQAtDrDVC0QB3BkBQBOQBpBnBJBeQBDBWAxB5IAyB/QAaBIAPA6QANA1AQBQIAcCFQASBYAHApQALBJAAA6QAAASgSAAQgSAAgBgSg");
	this.shape_29.setTransform(62.4,40.9,0.359,0.359);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgQEmQgWgEgpjPQgwkDgZhsQA+AnBSgWQAngLAcgUQANAUAkDZQAYCLAUCOQAJA8hLAPQgXAEgYAAQgbAAgcgFg");
	this.shape_30.setTransform(77.5,62.5,0.359,0.359);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AkLBzQgQgqgTg+IgPg0IApACQAzACAzgGQCjgSBghQIAWARQAbATAdAOQBaAsBBgbQihCEiOA0QhUAghJAAQhDAAg6gbg");
	this.shape_31.setTransform(89.4,47.2,0.359,0.359);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C4C4C").s().p("ABjPkQgXgJAAgSQAAglgbh/Qgjitg2ihQitntkei1QkbizhmjsQgghKgJhHIgEg4QFTjoIHA/QFQApJCDQQDaKJlHExQh2BviwAzQiKAoh3gIQATAuAYDTQAYDbgMA1QgNA2hLAJIgRABQgUAAgOgGgAgWg8QBECOBJCPQFlAdB0jpQArhVABhuQABhdgchIQjlCDj9AdQhPAJhGgCIg5gEg");
	this.shape_32.setTransform(73.7,37.5,0.359,0.359);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},10).wait(2));

	// feet
	this.instance = new lib.Foot();
	this.instance.setTransform(94.2,70.2,0.945,0.956,0,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.setTransform(48.2,72.7,1,1,0,0,0,-6,-11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:0,x:48.2,y:72.7,regY:-11.5}},{t:this.instance,p:{rotation:0,x:94.2,y:70.2,regY:-11.5}}]}).to({state:[{t:this.instance_1,p:{rotation:91.5,x:17.8,y:49.7,regY:-11.5}},{t:this.instance,p:{rotation:-22.2,x:115.2,y:54.7,regY:-11.5}}]},2).to({state:[{t:this.instance_1,p:{rotation:138,x:36.8,y:48.8,regY:-11.5}},{t:this.instance,p:{rotation:-34.9,x:114.2,y:73.7,regY:-11.5}}]},2).to({state:[{t:this.instance_1,p:{rotation:114.3,x:52.3,y:48.8,regY:-11.5}},{t:this.instance,p:{rotation:-1.5,x:69.2,y:69.7,regY:-11.5}}]},2).to({state:[{t:this.instance_1,p:{rotation:-54.2,x:96.1,y:58.7,regY:-11.5}},{t:this.instance,p:{rotation:65.6,x:53.7,y:41.2,regY:-11.6}}]},2).to({state:[{t:this.instance_1,p:{rotation:-8.3,x:78.2,y:72.3,regY:-11.4}},{t:this.instance,p:{rotation:125.8,x:70.2,y:47.8,regY:-11.6}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.5,0.8,71.9,83.4);


(lib.Head = function() {
	this.initialize();

	// Ear
	this.instance = new lib.ear("synched",0);
	this.instance.setTransform(-138.3,41.4);

	// Hair
	this.hair = new lib.hairstyles();
	this.hair.setTransform(-2.5,-39.7);

	// Face
	this.face = new lib.face();
	this.face.setTransform(-18.5,65.7);

	// Head
	this.instance_1 = new lib.head("synched",0);
	this.instance_1.setTransform(-50.5,24.8,1,1,0,0,0,-47,25.5);

	this.addChild(this.instance_1,this.face,this.hair,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-173.6,-161.5,344.5,323.2);


(lib.GunShoot = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GunHand("synched",0);
	this.instance.setTransform(11.6,45.8,0.373,0.373,67.4,0,0,4.2,127.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0.5,108.2,64.6);


(lib.DeadLegs = function() {
	this.initialize();

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Ak/FTQhrgVg5hRQhfiIgRhcQggikB/i+QATgCAHANQAEAGAAAHQgOATgRAbQghA1gNAlQgWBDAMBiQAQCCBRBhQBXBnBrgHQBEgEAzgqQAsgkA+gjQBVgwA9gFQBagGCmAPQDAARAtAfQAKARgMAGQgLAFgegIQhSgUhhgNQimgXhmATQhhAShOA8QhIA+gcAOQglATgzAAQgeAAgigHg");
	this.shape.setTransform(42.6,-167.5,0.949,0.949);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("ABiEgQighyhDgdQgSDqhJBaQgzA/hpAJQgqAEgUgSQgUgRgFgsQgFgnAPjsQANi8AkhYQAhhUBfhiQAZiJAnhJQASghAtgyQAYgaAlAIQAgAIADARQABAFgnBfQguBugQBJQAuhFAfgVQAUgNAhAAQAXAAgIApQgEASgiBXQCYBUCvCjQBYBSA4BCQgBAFAAAYQgCAWgKAGQhniNkTi9QgTAYgjAlQgtAsgNABQhyANgfgdQgbgbhMhlQg+B1gVD3QgNCeADAlQAFBGAtACQAxACAwgtQAwgsALg4IAWiLQAUh6AMgkQANgpAQAgQAOAegDAdQAlgSD/DDQCABiB5BmIAXAqQAWAugCASQiqiajFiLgAk0isIA6BIQAyA8AKADQARAFAiACQAnACAKgHQAPgKBPhRIgUgPQg3AkhGgCQhegCg2hWQgKAJgJAOgAhClHQgfAYhFCPIgDAGQAaAIAbABIAXgwQAvhtgCgYQgBgHgFAAQgEAAgIAGgAhPiSQAWgBAXgHIgggWgAiBoVQgiAMgkBgQgiBegNBsQgKADgLAHQAXAYAjATQARhzAwhzQAxhlAGgQQAIgUgXAAg");
	this.shape_1.setTransform(-44.5,-85.7,0.949,0.949);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2DDC0").s().p("AgqBtQgjgDABgRQANgvAVgvQAphhAigFQAdgEAIACQALAEgHASIhSDEIgRABIgRgBg");
	this.shape_2.setTransform(-53.7,-109.3,0.949,0.949);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2DDC0").s().p("Ag6CrQgogEAAgaQAQhKAZhKQAziWAugIQAlgJAMAEQAQAGgMAbQgXA3hYD8QgMACgMAAIgQgBg");
	this.shape_3.setTransform(-60.5,-122.9,0.949,0.949);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Ah7DGQgih1AylKIAZAbQAeAfAfAWQBgBIA/gqQgQC/gXBAQgxCKiCgFIgGABQgXAAgOg0g");
	this.shape_4.setTransform(-73.2,-59.9,0.949,0.949);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AkIP0QhfhEg5hnQhBh1gKicQgIiUBFjIQA4ijBDhhQjHhPhniZQhXiBgNiqQgLiMAniJQAhh4AvgtQBKhHBQA7QAfAWASAhQARAfgGATQgYAwgMAnQgUBGAMBxQAOB+ByAZQBmAWBkhCQBRg2BwgTQBGgLC5gGQB9gEB6AXQA9AMAkAMQAnAsgiAIQgKACgRgCIgPgCQj2g2jpAeQi9AYhDA2QhIA6hlADQiBAEhAhzQg+hvAQh5QAHgwAkheQAHgTgJgVQgJgTgTgLQgvgcgoAtQgoAtgPA3QgKApgWCpQgTCYBzCxQBuCrB/AlQBoAdBngtQAigPAlgZIAsgfQAbgRAGAOQADAGgDAKQgyBNh5AwQglAPgpAKIggAHIgMAOQgPAVgRAkQg5B0g/DWQhADcBXDEQAzBwBaBWQAzAwAGASQABAFgEAAQgMAAg7gpg");
	this.shape_5.setTransform(39.7,-106,0.949,0.949);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDDAC0").s().p("AggBiQg/gXhTiIIArgoIAPAVQAWAYAcAPQBVAwBzg3QARAHARAXQAKALAFAJIg6AsQg+AsgVADIgcAIQgJABgGAAQgOAAgNgEg");
	this.shape_6.setTransform(-58.2,-96.1,0.949,0.949);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0351").s().p("AgEAoQg4gIgkgSQglgPADgRQACgRAogGQAogGA1AJQA3AIAlARQAlAPgCARQgDARgpAGQgRACgUAAQgaAAgdgEg");
	this.shape_7.setTransform(-58.7,-104,0.949,0.949);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ah2A2QAXiNAjhyQAahUBSAdQAeALAbAWQAaAUAEAMQADAJgUBzQgYCGAEByQgZgfhlA2IhjA8QgSguAbikg");
	this.shape_8.setTransform(-12.5,-178,0.949,0.949);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("ACEQQQgtgLhYhxQhbhxgThEQlhkZirhfQg2gegdgHIgSgCIgLBdQgPBtgTBOQgKAtgnAdQgkAagsAEQgtAEgegVQgigWgCgtQgEhrAaiqQAejAAwhvQAvhoB6ASQBWANB4BJQBLAvCoCmQBUBUBEBJQB9ljA6iFQllirgklMQgNh3Afh8QAYhgAmg/QA2hXBCAwQAZASAMAeQANAfgKAUQgkBPgCBdQgDCRBgBTQBcBRCLgwQAngOBOgmQBNgmAmgNQBegfETAZQCKANB2ASQgEASiDD/QiKENiZEcQmjMOgsAAIgBAAg");
	this.shape_9.setTransform(10.3,-104.9,0.949,0.949);

	this.instance = new lib.Foot();
	this.instance.setTransform(-76.2,-40.9,2.394,2.422,163.5,0,0,-6,-11.5);

	this.instance_1 = new lib.Foot();
	this.instance_1.setTransform(-2.5,-204.2,2.533,2.533,-5.5,0,0,-6,-11.5);

	this.addChild(this.instance_1,this.instance,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.8,-211.7,233.3,205.8);


(lib.Hero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,run:1,shoot:13,jump:25,"jump":27,death:39,slide:62,tunneldeath:78});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.gotoAndPlay("run");
	}
	this.frame_24 = function() {
		this.gotoAndPlay("run");
	}
	this.frame_38 = function() {
		this.gotoAndPlay("jump");
	}
	this.frame_61 = function() {
		this.stop();
		this.dispatchEvent("killed");
	}
	this.frame_77 = function() {
		this.stop();
		this.dispatchEvent("slideComplete");
	}
	this.frame_91 = function() {
		this.dispatchEvent("killed");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12).call(this.frame_24).wait(14).call(this.frame_38).wait(23).call(this.frame_61).wait(16).call(this.frame_77).wait(14).call(this.frame_91).wait(1));

	// eyesdead
	this.instance = new lib.DeadEyes();
	this.instance.setTransform(400.8,-6.1,0.382,0.382,-5.2,0,0,-0.1,-62);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(1).to({regX:0,x:436.2,y:-5.9},0).wait(1).to({x:465.1,y:-5.7},0).wait(1).to({x:487.6,y:-5.6},0).wait(1).to({x:503.7,y:-5.5},0).wait(1).to({x:513.3,y:-5.4},0).wait(1).to({regX:-0.1,x:516.5},0).to({_off:true},7).wait(26).to({_off:false,regY:-61.9,rotation:-168.7,x:-3.3,y:-53.5},0).to({regY:-62,rotation:-161.2,x:-2.4,y:-51.5},3).wait(1));

	// head
	this.head = new lib.Head();
	this.head.setTransform(13.3,-144.9,0.373,0.373,0,0,0,-40.3,151.5);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1).to({regX:-40.1,scaleY:0.38,rotation:-1.4,x:12.3,y:-151.6},5).to({regX:-40.3,scaleY:0.37,rotation:0,x:13.3,y:-144.9},6).to({regX:-40.1,scaleY:0.38,rotation:-1.4,x:12.3,y:-151.6},1).wait(2).to({regX:-40,rotation:2.1,x:9.7,y:-151.5},2).to({regX:-40.1,rotation:-1.4,x:12.3,y:-151.6},7).to({regX:-40.3,scaleY:0.37,rotation:0,x:13.3,y:-145.9},1).to({regY:151.6,rotation:0.7,x:9.7,y:-256.4},2).to({regX:-39.9,regY:151.3,rotation:-69,x:1.4,y:-277.5},2).to({regX:-40,regY:151.5,rotation:-149.9,x:4.7,y:-298.1},2).to({regY:151.3,rotation:-219.8,x:5.2,y:-286.2},2).to({regY:151.2,rotation:-284.8,x:25.2,y:-258.1},2).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},3).wait(2).to({regY:151.6,rotation:-277,x:363.7,y:-9.6},9).wait(1).to({regX:-2.6,regY:0,rotation:-276.7,x:457,y:-2},0).wait(1).to({rotation:-276.5,x:486,y:-1.5},0).wait(1).to({rotation:-276.3,x:508.6,y:-1.1},0).wait(1).to({rotation:-276.2,x:524.7,y:-0.9},0).wait(1).to({rotation:-276.1,x:534.4,y:-0.7},0).wait(1).to({regX:-40.5,regY:151.7,x:479.8,y:-8.7},0).wait(6).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},1).to({regX:-40.4,regY:151.4,rotation:-403.4,x:-10.8,y:-76.9},5).wait(1).to({regX:-40.6,regY:151.5,rotation:-409.9,x:-13.8,y:-73.9},3).to({regX:-40.4,regY:151.4,rotation:-403.4,x:-10.8,y:-76.9},3).to({regX:-40.3,regY:151.5,rotation:-360,x:13.3,y:-144.9},3).wait(1).to({regX:-40.2,regY:151.2,rotation:-445.9,x:29.4,y:-133.8},4).to({regX:-40.4,regY:151.3,rotation:-442.2,y:-41.7},5).to({regX:-40.3,rotation:-436.9,x:29.3,y:-36.8},2).to({regY:151.2,rotation:-431.5,y:-31.8},2).wait(1));

	// body
	this.instance_1 = new lib.Body("synched",0);
	this.instance_1.setTransform(24.5,-66.6,0.373,0.373,0,0,0,28.2,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).to({regX:27.9,scaleX:0.36,scaleY:0.39,rotation:-1.4,x:24.4,y:-69.6},5).to({regX:28.2,scaleX:0.37,scaleY:0.37,rotation:0,x:24.5,y:-66.6},6).to({regX:27.9,scaleX:0.36,scaleY:0.39,rotation:-1.4,x:24.4,y:-69.6},1).to({startPosition:0},2).to({regX:28,rotation:-2,x:21.5},2).to({regX:27.9,rotation:-1.4,x:24.4},7).to({regX:28.2,scaleX:0.37,scaleY:0.37,rotation:0,x:24.5,y:-67.6},1).to({regX:28.1,regY:102,rotation:-7.2,x:29.5,y:-190.1},2).to({regY:101.9,rotation:-65.5,x:72.5,y:-256.8},2).to({rotation:-129,x:54.9,y:-352.4},2).to({regY:101.8,rotation:-193.7,x:-22.4,y:-354.8},2).to({regX:27.9,regY:101.9,rotation:-258.7,x:-48.8,y:-262.2},2).to({regX:28.2,regY:101.8,rotation:-360,x:24.5,y:-66.6},3).to({startPosition:0},1).wait(1).to({startPosition:0},0).to({regX:28,regY:101.9,rotation:-265.6,x:284.8,y:-4.6},9).wait(1).to({regX:-1.3,regY:-0.1,rotation:-263.5,x:359.3,y:-11.2},0).wait(1).to({rotation:-261.9,x:388.5,y:-10},0).wait(1).to({rotation:-260.6,x:411.2,y:-9.1},0).wait(1).to({rotation:-259.6,x:427.4,y:-8.5},0).wait(1).to({rotation:-259.1,x:437.1,y:-8.1},0).wait(1).to({regX:28.1,regY:101.8,rotation:-258.9,x:400.9,y:-4.6},0).to({startPosition:0},6).to({regX:28.2,rotation:-360,x:24.5,y:-66.6},1).to({regX:27.9,regY:101.9,rotation:-398.4,x:52.5,y:-34.7},5).to({startPosition:0},1).to({regX:28.2,regY:101.6,rotation:-401.9},3).to({regX:27.9,regY:101.9,rotation:-398.4},3).to({regX:28.2,regY:101.8,rotation:-360,x:24.5,y:-66.6},3).to({startPosition:0},1).to({regX:28.1,regY:101.7,rotation:-408,x:92,y:-86.7},4).to({regX:28.2,regY:101.8,rotation:-475.4,x:92.8,y:-85.7},5).to({regX:27.9,regY:101.9,rotation:-459,x:101.1,y:-63.5},2).to({regX:28.2,rotation:-442.7,x:109.4,y:-41.3},2).wait(1));

	// handfront
	this.instance_2 = new lib.HandFront("synched",0);
	this.instance_2.setTransform(-45.9,-79.3,0.373,0.373,0,0,0,-18.8,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).to({regY:-81.8,scaleY:0.35,rotation:14,x:-52.8,y:-84.1},5).to({regY:-81.7,scaleY:0.37,rotation:0,x:-45.9,y:-79.3},6).to({regX:-18.9,regY:-81.8,scaleY:0.35,rotation:8.5,x:-47.3,y:-80.1},1).to({regX:-18.8,rotation:14,x:-52.8,y:-84.2},2).to({regX:-18.9,regY:-81.7,rotation:8.3,x:-52.5,y:-81},2).to({regX:-18.8,regY:-81.8,rotation:14,x:-52.8,y:-84.1},7).to({regY:-81.7,scaleY:0.37,rotation:0,x:-45.9,y:-80.3},1).to({regX:-18.7,regY:-81.8,rotation:-18.9,x:-28.6,y:-189.3},2).to({regX:-18.5,regY:-81.7,rotation:-64.5,x:33,y:-198.6},2).to({regX:-18.6,rotation:-128.2,x:88.4,y:-289.5},2).to({regX:-18.5,rotation:-211.6,x:27.9,y:-363.3},2).to({regY:-81.6,rotation:-252.9,x:-17.9,y:-331.5},2).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},3).to({startPosition:0},1).wait(1).to({startPosition:0},0).to({regX:-18.7,regY:-81.4,rotation:-255.6,x:292.6,y:-55.5},9).wait(1).to({regX:0.7,regY:0,rotation:-258.4,x:296.1,y:-51.2},0).wait(1).to({rotation:-260.7,x:324.7,y:-47.2},0).wait(1).to({rotation:-262.5,x:346.9,y:-44.2},0).wait(1).to({rotation:-263.8,x:362.8,y:-42},0).wait(1).to({rotation:-264.5,x:372.4,y:-40.6},0).wait(1).to({regX:-18.9,regY:-81.8,rotation:-264.8,x:406.5,y:-44.7},0).to({regY:-81.4,rotation:-263.3},6).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},1).to({regX:-18.9,regY:-81.8,rotation:-297.5,x:-60.4,y:-10.9},5).to({startPosition:0},1).to({regX:-19,regY:-82,rotation:-292.4,x:-62.8,y:-13},3).to({regX:-18.9,regY:-81.8,rotation:-297.5,x:-60.4,y:-10.9},3).to({regX:-18.8,regY:-81.7,rotation:-360,x:-45.9,y:-79.3},3).to({startPosition:0},1).to({regX:-18.9,rotation:-421.9,x:49.5,y:-48.9},4).to({regX:-18.7,regY:-81.8,rotation:-496.4,x:109.5,y:-39},5).to({regY:-81.9,rotation:-451.9,x:93.5,y:18.6},4).wait(1));

	// armfront
	this.instance_3 = new lib.ArmFront("synched",0);
	this.instance_3.setTransform(-8.5,-137.1,0.373,0.373,0,0,0,50.9,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).to({regX:51,regY:-81.9,rotation:5.8,x:-9.7,y:-138},5).to({regX:50.9,regY:-81.7,rotation:0,x:-8.5,y:-137.1},6).to({regX:51,regY:-81.9,rotation:0.3,x:-9.4,y:-137.8},1).to({regX:50.9,regY:-82,rotation:5.8,x:-9.7,y:-138},2).to({regX:50.6,regY:-81.8,rotation:1.4,x:-13.7},2).to({regX:51,regY:-81.9,rotation:5.8,x:-9.7},7).to({regX:50.9,regY:-81.7,rotation:0,x:-8.5,y:-138.1},1).to({regX:50.8,rotation:-18.9,x:-12,y:-256.1},2).to({regX:51,rotation:-64.5,x:-3.2,y:-257.3},2).to({regX:51.1,rotation:-128.2,x:19.8,y:-283.1},2).to({regY:-81.8,rotation:-211.6,x:26.4,y:-294.4},2).to({regX:51.2,regY:-81.9,rotation:-252.9,x:26.6,y:-278.7},2).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},3).to({startPosition:0},1).wait(1).to({startPosition:0},0).to({regX:51.1,regY:-81.8,rotation:-283.8,x:357.6,y:-32.8},9).wait(1).to({regX:-0.6,regY:0,rotation:-287,x:358.2,y:-42.1},0).wait(1).to({rotation:-289.7,x:386.8,y:-40.4},0).wait(1).to({rotation:-291.7,x:409.1,y:-39.1},0).wait(1).to({rotation:-293.2,x:425.1,y:-38.1},0).wait(1).to({rotation:-294,x:434.6,y:-37.5},0).wait(1).to({regX:51,regY:-81.8,rotation:-294.3,x:473.6,y:-32.4},0).to({startPosition:0},6).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},1).to({regX:51.1,regY:-81.9,rotation:-353.3,x:-16.5,y:-63.9},5).to({startPosition:0},1).to({regX:50.9,regY:-81.8,rotation:-350.3,x:-16.3,y:-63.7},3).to({regX:51.1,regY:-81.9,rotation:-353.3,x:-16.5,y:-63.9},3).to({regX:50.9,regY:-81.7,rotation:-360,x:-8.5,y:-137.1},3).to({startPosition:0},1).to({regX:51,rotation:-421.9,x:16.1,y:-109.2},4).to({regX:51.1,rotation:-496.4,x:42.4,y:-22.9},5).to({regX:50.9,rotation:-451.9,x:34.3,y:-16.9},4).wait(1));

	// gunhand
	this.instance_4 = new lib.GunHand("synched",0);
	this.instance_4.setTransform(82.5,-134.2,0.373,0.373,0,0,0,4,127.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).to({regY:127.2,rotation:9.5,x:83.5,y:-132.8},5).to({regY:127.4,rotation:0,x:82.5,y:-134.2},6).to({regY:127.2,rotation:9.5,x:83.5,y:-132.8},1).wait(1).to({regX:3.9,regY:127.1,rotation:17.9,x:86.1,y:-132.3},0).to({_off:true},1).wait(10).to({_off:false,regX:4,regY:127.4,rotation:0,x:82.5,y:-135.2},0).to({regX:4.1,regY:127.5,rotation:30,x:70,y:-230.8},2).to({regX:4.2,regY:127.6,rotation:-28.3,x:59.3,y:-312.6},2).to({regY:127.8,rotation:-91.8,x:-0.9,y:-365.4},2).to({regY:127.7,rotation:-180.7,x:-61,y:-286.9},2).to({regY:127.8,rotation:-245.7,x:-3.4,y:-198.4},2).to({regX:4,regY:127.4,rotation:-360,x:82.5,y:-134.2},3).to({startPosition:0},1).wait(1).to({startPosition:0},0).to({regY:127.3,rotation:-294.3,x:396.7,y:32.4},9).wait(1).to({regX:0.4,regY:1.8,rotation:-298.7,x:474.5,y:5.7},0).wait(1).to({rotation:-302.3,x:503.6,y:0.8},0).wait(1).to({rotation:-305.1,x:526,y:-3},0).wait(1).to({rotation:-307.1,x:542,y:-5.7},0).wait(1).to({rotation:-308.3,x:551.6,y:-7.3},0).wait(1).to({regX:3.9,regY:127.2,rotation:-308.7,x:519.1,y:22.5},0).to({startPosition:0},6).to({regX:4,regY:127.4,rotation:-360,x:82.5,y:-134.2},1).to({regY:127.3,rotation:-419.9,x:34.4,y:-135.2},5).to({startPosition:0},1).to({regX:4.2,regY:127.2,rotation:-426.4,x:27.9,y:-137.4},3).to({regX:4,regY:127.3,rotation:-419.9,x:34.4,y:-135.2},3).to({regY:127.4,rotation:-360,x:82.5,y:-134.2},3).to({startPosition:0},1).to({regX:4.2,rotation:-439.2,x:52.6,y:-168.2},4).to({regY:127.6,rotation:-472,x:15.2,y:-105.4},5).to({regY:127.5,rotation:-490.3,x:-2.9,y:-81.1},4).wait(1));

	// gunhandshoot
	this.instance_5 = new lib.GunShoot();
	this.instance_5.setTransform(131.2,-148.4,1,1,4.5,0,0,54.2,33.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).wait(2).to({regX:54.1,rotation:3.7,x:121.5},0).to({scaleX:0.94,scaleY:0.99,rotation:0,skewX:-59.9,skewY:-62.1,x:78.8,y:-217.7},3).wait(1).to({skewX:-67.6,skewY:-69.8},0).to({skewX:-59.9,skewY:-62.1,x:96.3,y:-176.2},3).to({_off:true},1).wait(67));

	// armback
	this.instance_6 = new lib.ArmBack("synched",0);
	this.instance_6.setTransform(26.4,-135.8,0.373,0.373,0,0,0,-81.7,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0},0).to({regY:-33.6,rotation:8,x:28.1,y:-142.3},5).to({regY:-33.5,rotation:0,x:26.4,y:-135.8},6).to({regY:-33.6,rotation:8,x:28.1,y:-142.3},1).wait(1).to({regY:-33.5,scaleX:0.42,rotation:6,x:26.4,y:-143.8},0).to({_off:true},1).wait(6).to({_off:false,regY:-33.4,rotation:-42.2},0).to({regY:-33.5,rotation:6},3).wait(1).to({scaleX:0.37,rotation:0,y:-136.8},0).to({regX:-81.5,regY:-33.4,rotation:30,x:22.3,y:-260.2},2).to({rotation:-28.3,x:9.1,y:-287.5},2).to({rotation:-91.8,x:-0.9,y:-309.4},2).to({regX:-81.4,regY:-33.2,rotation:-180.7,x:-4.8,y:-285.9},2).to({rotation:-245.7,x:21.2,y:-248.9},2).to({regX:-81.7,regY:-33.5,rotation:-360,x:26.4,y:-135.8},3).to({startPosition:0},1).wait(1).to({startPosition:0},0).to({regX:-82,regY:-33.2,rotation:-294.3,x:374.9,y:-19.3},9).wait(1).to({regX:-0.8,regY:-0.1,rotation:-298.7,x:412.3,y:12.3},0).wait(1).to({rotation:-302.3,x:441.9,y:11.3},0).wait(1).to({rotation:-305.1,x:464.9,y:10.4},0).wait(1).to({rotation:-307.1,x:481.3,y:9.7},0).wait(1).to({rotation:-308.3,x:491.2,y:9.3},0).wait(1).to({regX:-82,regY:-33.2,rotation:-308.7,x:485.1,y:-22.2},0).to({startPosition:0},6).to({regX:-81.7,regY:-33.5,rotation:-360,x:26.4,y:-135.8},1).to({regX:-81.9,rotation:-419.9,x:4.8,y:-87.4},5).to({startPosition:0},1).to({regX:-81.5,regY:-33.3,rotation:-426.4,x:4,y:-86.5},3).to({regX:-81.9,regY:-33.5,rotation:-419.9,x:4.8,y:-87.4},3).to({regX:-81.7,rotation:-360,x:26.4,y:-135.8},4).to({regX:-81.6,rotation:-439.2,x:40.4,y:-113.4},4).to({regX:-81.5,rotation:-472,x:34.6,y:-52.7},5).to({regX:-81.7,rotation:-490.3,x:32,y:-37.1},4).wait(1));

	// armbackshoot
	this.armshoot = new lib.ArmShoot();
	this.armshoot.setTransform(64.1,-141.1,0.377,0.455,0,0,0,11,-51.4);
	this.armshoot._off = true;

	this.timeline.addTween(cjs.Tween.get(this.armshoot).wait(15).to({_off:false},0).wait(2).to({x:54.4},0).to({regY:-51.5,scaleX:0.35,rotation:-43.7,x:47.5,y:-160.3},3).to({_off:true},1).wait(71));

	// legsbroken
	this.instance_7 = new lib.DeadLegs();
	this.instance_7.setTransform(16.1,-43.7,0.4,0.4,-114.3,0,0,0,-114.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({regX:-0.1,regY:-114.9,rotation:-19.8,x:262.2,y:-14.8},9).wait(1).to({regX:-13.3,regY:-116.2,rotation:-18.6,x:292.4,y:-13.9},0).wait(1).to({rotation:-17.6,x:321.4,y:-14.2},0).wait(1).to({rotation:-16.8,x:344,y:-14.5},0).wait(1).to({rotation:-16.3,x:360.1,y:-14.7},0).wait(1).to({rotation:-15.9,x:369.8,y:-14.8},0).wait(1).to({regX:-0.2,regY:-114.8,rotation:-15.8,x:378.2,y:-15.8},0).to({_off:true},7).wait(28).to({_off:false,regX:-0.4,rotation:150.2,x:133.2,y:-45.7},0).wait(1).to({regX:-0.3,rotation:156.7,y:-33.7},0).wait(1));

	// legsjump
	this.instance_8 = new lib.LegsJump();
	this.instance_8.setTransform(26.9,-68.3,0.382,0.382,0,0,0,130.8,25.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).to({regX:130.9,regY:25.7,rotation:-19.7,x:32.3,y:-197},2).to({regX:131.1,regY:25.8,rotation:-77.9,x:68.2,y:-262.9},2).to({regX:130.9,rotation:-127.9,x:47.5,y:-351.2},2).to({regX:131,regY:25.7,rotation:-188.6,x:-24.5,y:-347.7},2).to({regX:130.9,regY:25.8,rotation:-266.4,x:-42.1,y:-256.1},2).to({regX:130.8,regY:25.9,rotation:-360,x:26.9,y:-67.3},3).to({_off:true},1).wait(53));

	// legslide
	this.instance_9 = new lib.SlideLegs("synched",0);
	this.instance_9.setTransform(35,-49.5,0.325,0.689,0,0,0,0,-72.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(63).to({_off:false},0).to({scaleX:0.4,scaleY:0.42,x:64.5,y:-30},4).wait(1).to({startPosition:0},0).to({scaleX:0.41,scaleY:0.41,x:67,y:-29},3).to({scaleX:0.4,scaleY:0.42,x:64.5,y:-30},3).to({scaleX:0.33,scaleY:0.69,x:35,y:-49.5},3).to({_off:true},1).wait(14));

	// Foot
	this.instance_10 = new lib.Foot();
	this.instance_10.setTransform(83,-5.9,0.945,0.956,-16.7,0,0,-6,-11.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(63).to({_off:false},0).to({rotation:-12.2,x:123,y:-6.4},4).wait(1).to({x:126},3).to({x:123},3).to({rotation:-16.7,x:83,y:-5.9},3).to({_off:true},1).wait(14));

	// Foot2
	this.instance_11 = new lib.Foot();
	this.instance_11.setTransform(-16.9,-9.4,1,1,8.7,0,0,-6,-11.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(63).to({_off:false},0).to({rotation:114.5,x:3},4).wait(1).to({rotation:117.5,x:3.9,y:-9.3},3).to({rotation:114.5,x:3,y:-9.4},3).to({rotation:8.7,x:-16.9},3).to({_off:true},1).wait(14));

	// legs
	this.instance_12 = new lib.HeroLegs("single",0);
	this.instance_12.setTransform(17.1,-37.8,1,1,0,0,0,70.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:10},0).to({_off:true},2).wait(14).to({_off:false,startPosition:0},0).to({_off:true},1).wait(22).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({rotation:-41.2,x:104.1,y:-58.8},4).to({rotation:-126.5,x:127.1,y:-100.7},4).to({regY:42.8,rotation:-98.6,x:131.1,y:-59.8},3).to({_off:true},1).wait(2));

	// shadow
	this.instance_13 = new lib.Shadow();
	this.instance_13.setTransform(23.5,-0.1,0.601,0.601,0,0,0,78,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25).to({regX:77.9,scaleX:0.35,scaleY:0.35},7).wait(2).to({regX:78,scaleX:0.6,scaleY:0.6},4).wait(2).to({regX:77.9,scaleX:1.83,scaleY:0.72,x:364,y:23.9},9).to({x:468},6,cjs.Ease.get(1)).wait(7).to({regX:78,scaleX:0.6,scaleY:0.6,x:23.5,y:-0.1},0).to({scaleX:1.08,x:61},5).wait(11).to({scaleX:0.6,x:23.5},0).to({regX:77.9,scaleX:1.2,x:46.4},6).wait(8));

	// deadblood
	this.instance_14 = new lib.DeadBlood();
	this.instance_14.setTransform(320.6,25,1,1,0,0,0,0,-19.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(49).to({_off:false},0).to({scaleX:2.13,x:414.1},6).to({scaleX:2.24,scaleY:1.22,x:422.5,y:27.7},6).to({_off:true},1).wait(28).to({_off:false,scaleX:1,scaleY:1,rotation:-0.5,x:49.5,y:-3},0).wait(1).to({scaleX:1.09},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.7,-261.7,170.1,272.2);


// stage content:



(lib.Gary = function() {
	this.initialize();

	// Layer 1
	this.shootBtn = new lib.MyButton();
	this.shootBtn.setTransform(603.2,340.4);
	new cjs.ButtonHelper(this.shootBtn, 0, 1, 2, false, new lib.MyButton(), 3);

	this.gary = new lib.Hero();
	this.gary.setTransform(164.3,204.3,1,1,0,0,0,26.3,-125.7);

	this.addChild(this.gary,this.shootBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(469.3,268.3,688.4,306.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
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


// stage content:
(lib.GaryButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//SD:Dispatch a custom event within maintimeline.
		//this.dispatchEvent("eventTimeline");
		//SD:Create event handler for button instance.
		//this.myButton.on("click", handleClick, this);
		
		function handleClick(event) {
		    //SD:Need to use events target to determine correct scope.	
			//var target = event.target;
		    //SD:Dispatch custom event.	(good)
			//target.dispatchEvent("buttonClick");
			//SD:Call Javascript directly (bad)
			//alert("Clicked");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Button
	this.myButton = new lib.MyButton();
	this.myButton.setTransform(275,200,1,1,0,0,0,82.2,17);
	new cjs.ButtonHelper(this.myButton, 0, 1, 2, false, new lib.MyButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.myButton).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(467.8,383,164.5,34);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
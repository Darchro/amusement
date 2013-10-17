(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.gBotInteraction = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.RollOver();
	this.instance.setTransform(720.4,140.6,1,1,0,0,0,63.8,81.5);

	// Layer 7
	this.instance_1 = new lib.MouseOver();
	this.instance_1.setTransform(301.4,140.5,1,1,0,0,0,88.2,81.5);

	// Layer 2
	this.instance_2 = new lib.Jaw();
	this.instance_2.setTransform(719.2,372.5,1,1,0,0,0,43.2,17.3);

	this.instance_3 = new lib.Body();
	this.instance_3.setTransform(719.1,434.9,1,1,0,0,0,35.3,54.5);

	this.instance_4 = new lib.LeftLeg();
	this.instance_4.setTransform(695.4,548.8,1,1,0,0,0,19.7,73.5);

	this.instance_5 = new lib.RightLeg();
	this.instance_5.setTransform(744.9,548.8,1,1,0,0,0,19.2,73.5);

	this.instance_6 = new lib.Head();
	this.instance_6.setTransform(717.1,307.8,1,1,0,0,0,53,61.1);

	// Layer 8
	this.instance_7 = new lib.RightArm1();
	this.instance_7.setTransform(749.7,404.9);

	this.instance_8 = new lib.LeftArm1();
	this.instance_8.setTransform(683.2,403.4);

	// Layer 4
	this.instance_9 = new lib.Jaw();
	this.instance_9.setTransform(298.2,372.5,1,1,0,0,0,43.2,17.3);

	this.instance_10 = new lib.Body();
	this.instance_10.setTransform(298.1,434.9,1,1,0,0,0,35.3,54.5);

	this.instance_11 = new lib.RightArm();
	this.instance_11.setTransform(246.7,467,1,1,0,0,0,26.4,74.2);

	this.instance_12 = new lib.LeftArm();
	this.instance_12.setTransform(402.9,401.4,1,1,0,0,0,80.8,17);

	this.instance_13 = new lib.LeftLeg();
	this.instance_13.setTransform(274.4,548.8,1,1,0,0,0,19.7,73.5);

	this.instance_14 = new lib.RightLeg();
	this.instance_14.setTransform(323.9,548.8,1,1,0,0,0,19.2,73.5);

	// Layer 5
	this.instance_15 = new lib.Head();
	this.instance_15.setTransform(296.1,307.8,1,1,0,0,0,53,61.1);

	// Layer 9
	this.instance_16 = new lib.Speech1();
	this.instance_16.setTransform(877.3,357.1,1,1,0,0,0,98.5,64.5);

	// Layer 3
	this.instance_17 = new lib.Speech();
	this.instance_17.setTransform(142.9,337.2,1,1,0,0,0,98.5,58.8);

	// Layer 1
	this.instance_18 = new lib.BG();
	this.instance_18.setTransform(512,330);

	this.addChild(this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.7,-68.9,1097.5,798);


// symbols:
(lib.Speech1 = function() {
	this.initialize();

	// speech
	this.speech = new cjs.Text("Hey that is a bad touch, I need an adult, immediately.", "bold 17px Arial Black");
	this.speech.textAlign = "center";
	this.speech.lineHeight = 17;
	this.speech.lineWidth = 128;
	this.speech.setTransform(114.9,7.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.898)").ss(4,0,1).p("APYlBIAAKEQAAEIkJAAIwQAAQjGAAg3j3QkzAZhmhMQG8hygvnwQAAkJEJAAIQQAAQEJAAAAEJg");
	this.shape.setTransform(98.4,58.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlBJLQjGAAg3j3QkzAZhmhMQG8hygvnwQAAkJEJAAIQQAAQEJAAAAEJIAAKEQAAEIkJAAg");
	this.shape_1.setTransform(98.4,58.8);

	this.addChild(this.shape_1,this.shape,this.speech);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197,131);


(lib.Speech = function() {
	this.initialize();

	// Layer 1
	this.speech = new cjs.Text("", "bold 17px Arial Black");
	this.speech.textAlign = "center";
	this.speech.lineHeight = 17;
	this.speech.lineWidth = 128;
	this.speech.setTransform(73.9,7.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.898)").ss(4,0,1).p("AFCpKIwQAAQkJAAAAEJIAAKEQAAEIEJAAIQQAAQDGAAA3j3QEzAZBmhMQm8hyAvnwQAAkJkJAAg");
	this.shape.setTransform(98.5,58.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ArOJLQkJAAAAkIIAAqEQAAkJEJAAIQQAAQEJAAAAEJQgvHwG8ByQhmBMkzgZQg3D3jGAAg");
	this.shape_1.setTransform(98.5,58.8);

	this.addChild(this.shape_1,this.shape,this.speech);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,197,131);


(lib.RollOver = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3A35").s().p("Ao6L2QgMgNgJgSQgjhGAAi1QAAihAjhCQAjhEBWAAQBLAAAlA0QAGAIAFALQAPAgAJAwQALA7AAByQAACggkBDQgjBEhUAAQhDAAgkgqgAoOEuQgOAwAACPQAACFAPAzQAHAYAPAMQAOAMAUAAQApAAAPgtQAQgtAAh5QAAidgPgzIgDgKQgPgpgngBQgrAAgOAwgAIqMYIgJAAIhbjyIgUg2IAAEoIg9AAIgUAAIAApbIBrAAQBCAAAhAfQAOAOAJAUQASAlAAA3QAABBgVAnQgWAogoAIIBuEmgAGyHIIAUgBQAggEAPgRQAUgWgBg0QAAgcgDgTIgEgPQgDgKgGgIQgJgNgOgGQgOgFgTgBIgOAAgABSMYIgUAAIAApbIDYAAIAAAeIAAAnIiHAAIAAC/IAUAAIBkAAIAAAdIAAAnIh4AAIAADOIAUAAIBzAAIAAAfIAAAmgAiUMYIgPAAIh1pbIBRAAIAEAeIBBGoIAIgwIBCmWIBJAAIgFAeIhvI9gAjQjeQgMgNgIgRQgkhHAAi0QAAihAjhDQAkhEBUAAQBMAAAjA1QAGAIAFAKQAPAgAJAxQALA6AABzQAACfgjBDQgiBEhUAAQhDAAgkgqgAikqmQgOAwgBCQQABCEAPAzQAHAZAPAMQAOAMAUgBQApABAPguQAQgsAAh6QAAidgOgyIgEgLQgPgpgnAAQgrAAgOAvgAGdi7IgTAAIAApbIBRAAIAAAdIAAH5IATAAIByAAIAAAeIAAAngACVi7IgUAAIAApbIBRAAIAAAdIAAH5IAUAAIBwAAIAAAeIAAAngAl9i7IgJAAIhbjzIgUg1IAAEoIg9AAIgUAAIAApbIBrAAQBCAAAhAfQAOAOAKAUQARAkAAA3QAABBgWAoQgVAngoAJIBuEmgAn1oLIAUgCQAggEAPgRQAUgVgBg0QABgcgEgUIgEgOQgEgKgFgJQgJgMgOgGQgOgGgTAAIgOAAg");
	this.shape.setTransform(62.8,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#779560").s().p("ApgLUQAkAqBDAAQBUAAAjhEQAkhDAAigQAAhygLg7QgJgwgPggIAJALQAYAjALBAQALA7AAByQAACggjBDQgkBDhUAAQhXAAgkhHgAIPMUIgLgeIBJAAIhukmQAogIAWgoQAVgnAAhBQAAg3gSglQAmApAABRQAABBgVAnQgXAognAJIBuElgAFPMUIAAgeIA9AAIAAkoIAUA2IAAEQgAAsMUIAAgeIDEAAIAAgmIAUAAIAABEgAi1MUIgFgeIAxAAIBxo9IAYAAIh1JbgABpKxIAAjOIB4AAIAAgnIAUAAIAABGIh4AAIAACvgAozKDQgPgzAAiFQAAiPAOgwQAOgwArAAQAnABAPApQgNgLgVAAQgrAAgOAvQgOAwgBCPQABCEAPA0IACAGQgPgMgHgYgAjpC5IAPAAIA6F4IgIAwgAGMDdIAOAAQATABAOAFQAOAGAJANQAGAIADAKIgMgHQgOgFgTAAIgOAAIAACpIgUABgABpGfIAAi/ICHAAIAAgnIAUAAIAABFIiHAAIAAChgAj2kAQAkAqBDAAQBUAAAkhEQAhhDAAifQAAhzgKg6QgIgxgPggIAJALQAWAkALA/QALA7AABzQAACgghBDQgkBDhTAAQhYAAgkhIgAF3jAIAAgdIDDAAIAAgnIAUAAIAABEgABvjAIAAgdIDBAAIAAgnIAVAAIAABEgAmYjAIgLgdIBJAAIhukmQAogJAVgnQAWgoAAhBQAAg3gRgkQAlApAABRQAABAgVAnQgWAogoAJIBuElgApYjAIAAgdIA9AAIAAkoIAUA1IAAEQgAG1kiIAAn5IATAAIAAH5gACskiIAAn5IAUAAIAAH5gAjJlRQgPgzgBiEQABiQAOgwQAOgvArAAQAnAAAPApQgNgLgVAAQgrAAgPAwQgOAvAACQQAACEAPAzIADAHQgPgMgHgZgAobr2IAOAAQATAAAOAGQAOAGAJAMQAFAJAEAKIgMgHQgOgGgTAAIgOAAIAACpIgUACg");
	this.shape_1.setTransform(66.6,83.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,127.5,163);


(lib.MouseOver = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C3A35").s().p("AowL2QgMgNgJgSQgjhGAAi1QAAihAjhCQAjhEBWAAQBLAAAlA0QAGAJAFAKQAQAgAIAwQALA7AABzQAACfgkBDQgjBEhUAAQhCAAglgqgAoFEuQgOAwABCPQgBCFAPAzQAIAZAPAMQAOALAVAAQApAAAOgtQAQgtAAh5QAAidgPgzIgCgKQgQgpgmAAQgsAAgPAvgAI0MYIgJAAIhbjyIgUg1IAAEnIg9AAIgUAAIAApbIBrAAQBCAAAhAgQAOAOAKAUQARAkAAA3QAABBgWAnQgVAogpAJIBvElgAG8HIIAUgBQAggEAPgRQAUgVAAg0QAAgdgFgTIgDgOQgEgLgFgIQgJgMgOgGQgOgGgTAAIgOAAgABcMYIgUAAIAApbIDYAAIAAAeIAAAnIiHAAIAAC/IAUAAIBkAAIAAAeIAAAnIh4AAIAADOIAUAAIBzAAIAAAeIAAAmgAiLMYIgOAAIh0pbIBQAAIAEAeIBBGoIAIgwIBCmWIBJAAIgFAeIhuI9gAF6jDQgKgGgKgHIAAhRQArAgAjAAQAiAAASgWQAUgWgBgmQAAgcgKgWIgEgJIgVgdIhUhaIgLgNQgMgQgHgMQgTgiAAg1QAAhGAlgqQAlgqA/AAQArAAAnAVIAAAVIAAA6QglgagdAAQghAAgUAXQgUAVgBAkQAAAgAPAWIAMAOIA5BAQAsAsATAjIAEAIQASAjAAA0QAABGgnAtQgoAsg9AAQgnAAgegPgAAWjXQgGgHgGgJQgVgiAAhjIAAmqIBNAAIAAAeIAAGMQAABBANAWQAEAJAKAFQANAHAUAAQAkAAALgTQAMgTgBg6IAAm2IBQAAIAAAeIAAGYQAABigeAjQgkAnhJAAQhEAAgjgjgAldjdQgMgOgIgRQgkhHAAi0QAAihAjhDQAkhDBUAAQBMAAAlA0QAGAIAFAKQAPAgAJAxQALA7AAByQAACggjBDQgkBDhUAAQhDAAgkgpgAkxqlQgOAvgBCQQABCEAPA0QAHAYAPAMQAOAMAUAAQApAAAPgtQAQgtAAh5QAAidgOgzIgEgLQgPgpgnAAQgrAAgOAwgAKki7IgUAAIAApbIDYAAIAAAeIAAAmIiHAAIAAC/IATAAIBkAAIAAAeIAAAnIh3AAIAADOIATAAIB0AAIAAAeIAAAngAoIi7IgSAAIgSkrIgDhrIAAgDIgBgHIhNGgIgpAAIgNAAIg/k2IgRhqIgXGgIg2AAIgXAAIAypbIBFAAIAHAeIBAE0IAPBhIACgKIAAgFIAGgkIBImAIBGAAIADAeIA1I9g");
	this.shape.setTransform(87.2,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#779560").s().p("ApELUQAlApBCAAQBUAAAjhDQAkhDAAifQAAhzgLg7QgIgxgQggIAJAMQAYAjALBAQALA7AAByQAACggkBDQgjBEhUAAQhXAAgkhIgAIrMUIgLgeIBJAAIhvklQApgKAVgnQAWgnAAhBQAAg3gRgkQAlAoAABRQAABBgVAnQgWAogoAIIBuEmgAFrMUIAAgeIA9AAIAAknIAUA1IAAEQgABIMUIAAgeIDEAAIAAgnIAUAAIAABFgAiZMUIgGgeIAzAAIBuo9IAZAAIh0JbgACFKyIAAjPIB4AAIAAgmIAUAAIAABEIh4AAIAACxgAoYKDQgPg0ABiEQgBiQAOgvQAPgwAsABQAmgBAQApQgPgKgTgBQgsAAgOAwQgOAvgBCQQABCFAPAzIACAHQgPgMgIgZgAjNC5IAQAAIA5F4IgIAwgAGoDeIAOAAQATgBAOAHQAOAFAJANQAFAIAEALIgMgHQgOgHgTAAIgOAAIAACqIgUABgACFGeIAAi/ICHAAIAAgmIAUAAIAABEIiHAAIAAChgAFmjVIAAgQQAeAPAnAAQA9AAAogsQAngtAAhGQAAg0gSgjIgEgIQAPAUAJARQASAkAAA0QAABGgnAtQgoAsg9AAQg1AAgkgdgAAKjrIgIgOQAjAjBEAAQBJAAAkgnQAegkAAhiIAAmXIAVAAIAAG1QgBBjgeAiQgjAohLAAQhRAAghgzgAlxj/QAkApBDAAQBUAAAkhDQAjhDAAigQAAhygLg8QgJgwgPggIAJAMQAYAiALBBQALA7AAByQAACfgjBDQgkBEhTAAQhYAAgkhHgAKQi/IAAgfIDEAAIAAgmIATAAIAABFgAoai/IgCgfIA8AAIg1o8IARAAIA4JbgAq0i/IgGgfIApAAIBNmfIABAHIAAADIADBrIg9FJgAtni/IADgfIA2AAIAXmfIARBqIgUFUgALNkiIAAjOIB3AAIAAgnIAUAAIAABFIh4AAIAACwgAA7k4QgNgVAAhBIAAmMIAVAAIAAGpQgBAwAHAYQgKgGgEgJgAlElQQgPg0gBiFQABiPAOgwQAOgvArAAQAnAAAPApQgNgLgVAAQgrAAgPAvQgOAwAACQQAACEAPAzIADAHQgPgMgHgYgAq9nmIhAk0IANAAIBKFiIgGAjIAAAGIgCAKgAHYmvIhUhaQgVgYgJgRIgBgDIALAOIBUBaIAVAcIAEAKgALNo1IAAi/ICHAAIAAgmIATAAIAABEIiHAAIAAChgAGdpxQgPgXAAgfQABgkAUgWQAUgWAhAAQAdAAAlAaIAAg6QAKADAKAGIAABPQglgbgdAAQghAAgUAYQgUAVAAAkQgBAUAHARg");
	this.shape_1.setTransform(89.2,83.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176.4,163.1);


(lib.Path_35 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A5258").p("AlTAAIKnAA");
	this.shape.setTransform(34,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_32 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4A5258").p("AhyAAIDlAA");
	this.shape.setTransform(11.5,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_31 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],4.7,-5.1,-4.6,5.2).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_30 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.2,-6.9,0.4,7).s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_29 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(64,72,79,0)","#40484F","rgba(64,72,79,0)"],[0,0.416,1],-3.9,0,4,0).s().p("AgnEJIAAoRIBPAAIAAIRg");
	this.shape.setTransform(4,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,53);


(lib.Path_28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],7,-0.2,-6.9,0.4).s().p("AgwAxQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(64,72,79,0)","#40484F","rgba(64,72,79,0)"],[0,0.416,1],-4.4,0,4.5,0).s().p("AgsEJIAAoRIBZAAIAAIRg");
	this.shape.setTransform(4.5,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,53);


(lib.Path_26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],1.8,1.6,-1.6,-1.4).s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape.setTransform(2.3,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,4.7);


(lib.Path_25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0,0.859,1],-5.9,14,5.6,-9.7).s().p("AisBVIAAglQAAg2AqgnQApgnA3AAIBRAAQAkAAAcAPQAeAOARAbIAKAWQAFAIAAAJIgzAHIgBgLQgLgXghgLQgWgGgmAAIgtAAQghgBgZAWQgaAVAAAgIAAAsg");
	this.shape.setTransform(17.3,8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.7,17);


(lib.Path_24 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0,0.859,1],-5.5,9.3,5.6,-13.5).s().p("AgiBQQg3AAgpgnQgqgoAAg1IAAgbIA8AAIAAAhQAAAhAaAVQAZAVAhAAIAtAAQAmABAWgIQAhgJALgZIABgLIAzAHQAAAJgFAJIgKAVQgRAbgeAPQgdAPgjAAg");
	this.shape.setTransform(17.3,8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.7,16);


(lib.Path_23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],1.7,-1.4,-1.6,1.6).s().p("AgBAXQgJgBgGgIQgGgHAAgIQABgJAHgHQAIgGAHABQAKABAGAHQAHAIgBAHQgBAKgHAGQgHAGgIAAIgBAAg");
	this.shape.setTransform(2.3,2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,4.7,4.7);


(lib.Path_22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0,0.859,1],-9.7,-7,12.9,6.5).s().p("AgaCkIgUgMQgZgTgMgeQgMgeADgkIAHhQQAEg3AqgmQApgmA4AFIAkADIgFA7IgqgDQghgDgXAYQgYAXgDAhIgEAtQgDAlAFAXQAHAiAZAMIAJADIgKAyQgIgBgLgGg");
	this.shape.setTransform(9.4,17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.9,34.3);


(lib.Path_21 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0.529)","rgba(255,255,255,0)"],[0,0.859,1],-13.6,-6.3,8.2,6.7).s().p("AglCvIgDgzIAMgBQAagJALgfQAJgWADglIAEgtQADghgUgbQgSgcghgDIgggDIAFg7IAaACQA2AFAkAtQAiAtgEA2IgIBQQgDAkgRAcQgRAcgcAOIgUAJQgKADgIAAIgCAAg");
	this.shape.setTransform(7.7,17.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,35.1);


(lib.Path_20 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],1.8,1.6,-1.6,-1.4).s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape.setTransform(2.3,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,4.7);


(lib.Path_19 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(64,72,79,0)","#40484F","rgba(64,72,79,0)"],[0,0.416,1],0,-4.9,0,5).s().p("AkIAxIAAhiIIRAAIAABig");
	this.shape.setTransform(26.5,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,10);


(lib.Path_18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],7.6,6,-3.5,-4).s().p("AghBSQgEAAgHgOQgGgNAAgEIAAhHQAAgFAGgDQAFgDAFAAIBRg3QABAAABAAQAAAAABABQAAAAAAABQAAABAAABIgCAHIAACcIADAFQAAAAAAAAQAAAAAAABQAAAAgBAAQgBAAAAAAg");
	this.shape.setTransform(5.1,8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.3,17.5);


(lib.Path_17 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],1.6,-1.6,-1.4,1.8).s().p("AgOAQQgHgGgBgKQAAgHAHgHQAHgHAIgBQAJAAAHAHQAHAHAAAIQAAAJgHAHQgGAHgKAAIAAAAQgIAAgGgHg");
	this.shape.setTransform(2.3,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,4.7);


(lib.Path_16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-7.2,-3.8,3.8,6.1).s().p("AgxBWIABgFIAAicIABgHQABgEAEAAIBPA3QAFAAAEADQAEADAAAFIAABHQAAAFgDAMQgFAOgEAAIhUAFQgBAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAg");
	this.shape.setTransform(5.1,8.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,17.5);


(lib.Path_15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(64,72,79,0)","#40484F","rgba(64,72,79,0)"],[0,0.416,1],-4.9,0.1,5,0).s().p("Ag2kLIBigCIALIZIhiACg");
	this.shape.setTransform(5.6,27.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,54.2);


(lib.Path_14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40484F").s().p("AhjBkQgqgqAAg6QAAg6AqgpQApgqA6AAQA6AAAqAqQAqApAAA6QAAA6gqAqQgqAqg6AAQg6AAgpgqg");
	this.shape.setTransform(14.2,14.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,28.4);


(lib.Path_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40484F").s().p("AhjBkQgqgqAAg6QAAg6AqgpQApgqA6AAQA6AAAqAqQAqApAAA6QAAA6gqAqQgqAqg6AAQg6AAgpgqg");
	this.shape.setTransform(14.2,14.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,28.4);


(lib.Path_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40484F","#5F666D","#888F95","#A6AFB4","#B5BFC3"],[0,0.275,0.6,0.851,1],9.7,8.7,-9.5,-8.5).s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmg");
	this.shape.setTransform(13,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,25.9);


(lib.Path_11_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-11.3,-33.4,11.4,32.8).s().p("AjSEgQgmAAgagXQgbgWAAggQgJhjAAh0QAAh3AJheQAAggAbgWQAagXAmAAIGlAAQAmAAAbAXQAaAWAAAgQAJBwAABtQAABvgJBgQAAAggaAWQgbAXgmAAQiDAHhQAAQhPAAiDgHg");
	this.shape.setTransform(31.2,29.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.3,59.2);


(lib.Path_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-20.6,12.5,21.5,-16.9).s().p("Ai+BQQgigBgXgSQgZgVAAgeIgFhZIIrAAQgDAzgDAmQAAAegYAVQgXASgjABg");
	this.shape.setTransform(27.9,8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55.7,16);


(lib.Path_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],1.1,6.6,-0.9,-6.4).s().p("Ag4A5QgFAAgEgDQgDgDAAgFIAAhbQAAgFADgDQAEgDAFAAIBxAAQAFAAAEADQADADAAAFIAABbQAAAFgDADQgEADgFAAg");
	this.shape.setTransform(7.1,6.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.4,13.9,11.6);


(lib.Path_9_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40484F").s().p("Ai5C7QhOhOAAhtQAAhsBOhOQBNhNBsAAQBtAABOBNQBNBOAABsQAABthNBOQhOBNhtAAQhsAAhNhNg");
	this.shape.setTransform(26.4,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.9,52.9);


(lib.Path_9_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-13.1,-4.8,16.4,5.8).s().p("AheDmQgEAAgDgEQgCgFAAgEQgCgaABgoQABhSAJhMIAbjXQAAgGAJAAICZAAIAHgBQABAAABAAQAAAAABAAQAAABAAAAQABABAAABIAAG3QAAAFgEAGQgDAGgEAAg");
	this.shape.setTransform(10.6,23.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,46.2);


(lib.Path_9_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.7,-5.1,0.9,5.3).s().p("AgvAuQgEAAgDgDQgCgCAAgEIAAhJQAAgJAJAAIBfAAQAJAAAAAJIAABJQAAAEgCACQgDADgEAAg");
	this.shape.setTransform(7.8,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,1,11.6,9.3);


(lib.Path_9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-4.5,0,4.7,0).s().p("AgfAeQgOgNAAgRQAAgQAOgNQANgNASAAQATAAAOANQANANAAAQQAAARgNANQgOANgTAAQgSAAgNgNg");
	this.shape.setTransform(4.7,4.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.4,8.6);


(lib.Path_8_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],1.1,6.6,-0.9,-6.4).s().p("Ag5A5QgEAAgEgDQgDgDAAgFIAAhbQAAgFADgDQAEgDAEAAIByAAQAGAAACADQAEADAAAFIAABbQAAAFgEADQgCADgGAAg");
	this.shape.setTransform(6.6,6.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0.4,13.9,11.6);


(lib.Path_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-7.5,-27.7,4.9,26.3).s().p("AiwD/IAAn9IAGAAQBbAACQACQArAAAdATQAdASABAcQAKBVAABmQAABngKBTQgBAcgdAUQgeAUgqABg");
	this.shape.setTransform(17.8,25.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.5,51);


(lib.Path_7_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.7,-5.1,0.9,5.3).s().p("AgvAuQgDAAgDgDQgEgCAAgEIAAhJQAAgDAEgDQADgDADAAIBfAAQAEAAADADQACADAAADIAABJQAAADgCADQgDADgEAAg");
	this.shape.setTransform(7.8,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,1,11.6,9.3);


(lib.Path_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-19.3,-17.7,25.5,17.3).s().p("AhAEDQguAAgggUQghgVABgbQgMhjAAheQAAhhALhVQAAgcAfgUQAhgTAuAAQCigHBaAAIAAIFg");
	this.shape.setTransform(18.8,26);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.5,51.9);


(lib.Path_6_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292929").s().p("AhoBpQgsgrAAg+QAAg8AsgsQAsgsA8AAQA+AAArAsQAsAsAAA8QAAA+gsArQgrAsg+AAQg8AAgsgsg");
	this.shape.setTransform(15,15);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.Path_6_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],1.1,6.6,-0.9,-6.4).s().p("Ag5A5QgFAAgDgDQgDgDAAgFIAAhbQAAgFADgDQADgDAFAAIBzAAQAEAAAEADQADADAAAFIAABbQAAAFgDADQgEADgEAAg");
	this.shape.setTransform(7.3,6.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0.4,13.9,11.6);


(lib.Path_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40484F","#5F666D","#888F95","#A6AFB4","#B5BFC3"],[0,0.275,0.6,0.851,1],9.7,8.7,-9.5,-8.5).s().p("AhaBbQgmgmAAg1QAAg0AmgmQAmgmA0AAQA1AAAmAmQAmAmAAA0QAAA1gmAmQgmAmg1AAQg0AAgmgmg");
	this.shape.setTransform(13,13);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,25.9);


(lib.Path_5_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0.604)","rgba(255,255,255,0)"],[0,0.141,1],-1.5,-7.4,1.9,7.7).s().p("AijAoQgHAAgHgIQgHgGAAgIIAAgkQAAgHAHgHQAHgGAHgBIFWAAQAGABAAAGIgBAOIAAAkIABAOQAAAIgGAAg");
	this.shape.setTransform(18.5,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,8);


(lib.Path_5_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.7,-5.1,0.9,5.3).s().p("AgvAuQgEAAgCgDQgEgDAAgDIAAhJQAAgDAEgDQACgDAEAAIBeAAQAFAAADADQACADAAADIAABJQAAAEgCACQgDADgFAAg");
	this.shape.setTransform(7.8,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,1,11.6,9.3);


(lib.Path_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-41.9,0,42).s().p("AgEGjIAAtGIAIAAIAANGg");
	this.shape.setTransform(0.5,42);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1,84);


(lib.Path_4_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.7,9.5,0.9,-9.4).s().p("Ag/BDQgbgcAAgnQAAgmAbgcQAbgcAkAAQAlAAAbAcQAbAcAAAmQAAAngbAcQgbAcglAAQgkAAgbgcg");
	this.shape.setTransform(9.2,9.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,19.1);


(lib.Path_4_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-3.1,-4.4,1.7,9).s().p("AiRArQANgmApgWQAogZAzAAQA0AAApAZQAoAWAMAmg");
	this.shape.setTransform(14.6,4.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,8.8);


(lib.Path_4_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],1.1,6.6,-0.9,-6.4).s().p("Ag4A5QgFAAgDgDQgEgDAAgFIAAhbQAAgFAEgDQADgDAFAAIBxAAQAGAAACADQAEADAAAFIAABbQAAAFgEADQgCADgGAAg");
	this.shape.setTransform(6.8,6.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0.4,13.9,11.6);


(lib.Path_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#505050").p("AAnAFQACABACAAQASAAACgRQABgTgKgCQgIgCgHAlQAAABAAABgAgkBYQABgagCgcQgBgOgBgKQgEACgEACQgPAIAAggQAAgiANANQAHAIADAhQANgHADgDQAIgJAAgYIAAgGQAAAHABAHQAEAhAKAAQAKAAAEgQQACgKAAgYQAAACAEAPQAGAaANAEQgGAoADAr");
	this.shape.setTransform(6.8,5.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.9,12.7,13.2);


(lib.Path_3_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3DAEDD","rgba(76,177,223,0.941)","rgba(143,199,232,0.608)","rgba(190,220,241,0.345)","rgba(223,237,248,0.157)","rgba(244,249,253,0.039)","rgba(255,255,255,0)"],[0,0.039,0.29,0.518,0.722,0.89,1],-0.3,5,0.5,-4.8).s().p("AguAjQgUgPAAgUQAAgTAUgPQATgOAbAAQAbAAAUAOQAUAPAAATQAAAUgUAPQgUAOgbAAQgbAAgTgOg");
	this.shape.setTransform(6.8,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,10);


(lib.Path_3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-0.7,-5.1,0.9,5.3).s().p("AgvAuQgEAAgDgDQgCgCAAgEIAAhJQAAgJAJAAIBfAAQAEAAACADQADADAAADIAABJQAAADgDADQgCADgEAAg");
	this.shape.setTransform(5.8,4.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.4,11.6,9.3);


(lib.Path_3_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-4.5,0,4.7,0).s().p("AgfAeQgOgNAAgRQAAgQAOgNQANgNASAAQATAAAOANQANANAAAQQAAARgNANQgOANgTAAQgSAAgNgNg");
	this.shape.setTransform(4.7,4.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.4,8.6);


(lib.Path_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],1.8,1.6,-1.6,-1.4).s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape.setTransform(2.3,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,4.7);


(lib.Path_2_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-34.4,0,34.5,0).s().p("AlYAEIAAgIIKxAAIAAAIg");
	this.shape.setTransform(34.5,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,1);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(64,72,79,0)","#40484F","rgba(64,72,79,0)"],[0,0.416,1],0,-4.9,0,5).s().p("AkNAxIAAhiIIbAAIAABig");
	this.shape.setTransform(27,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54,10);


(lib.Path_1_15 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-34.4,0,34.5,0).s().p("AlYAJIAAgSIKxAAIAAASg");
	this.shape.setTransform(34.5,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,2);


(lib.Path_1_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-11.4,0,11.5,0).s().p("AhyAJIAAgSIDlAAIAAASg");
	this.shape.setTransform(11.5,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,2);


(lib.Path_1_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.416,1],4,0,-3.9,0).s().p("AgnEJIAAoRIBPAAIAAIRg");
	this.shape.setTransform(4,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,53);


(lib.Path_1_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.416,1],4.5,0,-4.4,0).s().p("AgsEJIAAoRIBZAAIAAIRg");
	this.shape.setTransform(4.5,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,53);


(lib.Path_1_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],5.2,4.7,-5.1,-4.6).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_1_9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],5.1,-4.6,-5,4.8).s().p("AgFBFQgdgCgSgWQgTgXADgbQACgdAWgSQAWgTAbADQAdACATAWQATAXgDAbQgCAdgXASQgTARgZAAIgFgBg");
	this.shape.setTransform(7.1,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_1_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],5.2,4.7,-5.1,-4.6).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_1_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.416,1],0,5,0,-4.9).s().p("AkIAxIAAhiIIRAAIAABig");
	this.shape.setTransform(26.5,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,10);


(lib.Path_1_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],4.6,-5.2,-4.5,5.3).s().p("AgvAyQgVgUgBgdQAAgbAUgVQAUgVAdgBQAbAAAVAUQAVAUABAdQABAbgVAVQgUAVgdABIgBAAQgbAAgUgUg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_1_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.416,1],5,0,-4.9,0.1).s().p("Ag2kLIBigCIALIZIhiACg");
	this.shape.setTransform(5.6,27.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,54.2);


(lib.Path_1_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40484F").s().p("AjnAeQgqAAgcgIQgdgHAAgMQgEgWgDgKIKjAAQgDAKgEAWQAAAMgdAHQgdAIgqAAg");
	this.shape.setTransform(33.8,3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67.7,6);


(lib.Path_1_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-41.9,0,42).s().p("AgEGjIAAtGIAIAAIAANGg");
	this.shape.setTransform(0.5,42);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1,84);


(lib.Path_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],5.2,4.7,-5.1,-4.6).s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcAAQAcAAAVAVQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.416,1],0,5,0,-4.9).s().p("AkNAxIAAhiIIbAAIAABig");
	this.shape.setTransform(27,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54,10);


(lib.Path_1_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],6.3,-3,-6.1,3.2).s().p("AgYBBQgbgLgMgbQgMgaALgZQALgbAbgMQAagMAaALQAbALALAbQALAagKAZQgLAbgaAMQgOAGgOAAQgLAAgNgFg");
	this.shape.setTransform(7,7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,14.1);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.416,1],4.7,1.9,-4.5,-1.7).s().p("AiQDoIDEn0IBdAlIjEH0g");
	this.shape.setTransform(14.6,27);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,53.9);


(lib.Path_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],2.1,-0.9,-2,1.1).s().p("AgHAVQgJgEgEgIQgEgJAEgHQADgJAJgEQAIgEAIAEQAJADAEAJQAEAIgEAIQgDAJgJAEQgFACgEAAQgDAAgEgCg");
	this.shape.setTransform(2.3,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.7,4.7);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(64,72,79,0)","#40484F","rgba(64,72,79,0)"],[0,0.416,1],-4.5,-1.7,4.7,1.9).s().p("AiQDoIDEn0IBdAlIjEH0g");
	this.shape.setTransform(14.6,27);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,53.9);


(lib.Path_8_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D6659").s().p("EgqtAFBQh3uXEpBOQBehBBwhCQDfiEBXgEQBTgEAag7IAUg1QAMggASgSQASgSAEggQACgkAEgPQAMgyB4AbQBjAXBkAdQA6AMAngmQAfgeAmg7QAmgpBKALQBLAMBrADQA1ACAmAAIAbgiQAjgmAhgRQBsg4A+CjQAfBRAcBpIAoCaQAUBJAUAfQAYAmAjAAQBeAADOgMQDngOBTgOIBWgPQAvgHAhAEQBUAMBLBqQApA6BYA0QBTAxBhAcQBjAdBMgFQBSgFAdgtQA3hWCAgyQBygsA1ATQASAGAIAJIANAVQAbAjBuA2QBiAwBlAAQA1AAAcAEQAyAJA8AcQB3A4A1A6QAaAdApBSQAOAbAPAMQALAIAbAHQBcAZBQArQCGBFBfCHQBfCFAPCHQAMBwgFEmQgCCTgFB9MhTDACLQh3ncg7nMg");
	this.shape_1.setTransform(276.8,125.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,553.8,251.6);


(lib.Path_5_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F4A42").s().p("A2iX5IACgKQASg/BDgfQA1gYBhgJQA4gFB0gFQBkgGA0gRQBvglCGjFQAzhJCKj1QAig7AxgaQAmgUBEgJICHgPQBZgNBMgeQBYgjAeg4QAZgygMhUQgHgtgmiKQgniPgQhgQgjjYBniAQAbghA2g0QApgtAGgoQANhSBsgMQAcgDBZgCQBXgCA5gHQCRgSALgxQALgshdgeQgngNgBgyQgBguAdg5QAeg5AugmQAygpAxABQBpACA0gpQA1gpgZhDQgWhABThQQBKhICOhHQAngTA2gMMgAPAwLg");
	this.shape_1.setTransform(144.4,154.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,288.8,308.6);


(lib.Path_4_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#27ACA0","#3EAF98","#5DB588","#72BB78","#80C06C","#89C465","#8EC761","#8FC860"],[0,0.055,0.18,0.314,0.455,0.608,0.776,1],0,-17.3,0,17.5).s().p("A4BCjQgjgLAFgSQAFgRAogOQAqgPA+gDQBzgHA1gaQAPgIBTg+QAygmAtgBQAZAAAnAGQAZgBA+AaIB+A2QA7AaBGgTQAygNCzg7QCEgoAugeQA8goAcgLQBEgbBtAVQAbAFBxAgQAaAHBXAsQBZAoA/gBQBBgBAlgPIBHgfIBaghQA3gWA2gOQBAgRBSAoQBHAhAkAuQAbAkBDAWQA7AWAugBQBTgBBGAIQB2ANAiAiQAhAiguANIg1AGMgtbAAnIgMAAQhHAAgkgLg");
	this.shape_1.setTransform(156.9,17.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,313.8,34.9);


(lib.Path_3_3 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#27ACA0","#3EAF98","#5DB588","#72BB78","#80C06C","#89C465","#8EC761","#8FC860"],[0,0.055,0.18,0.314,0.455,0.608,0.776,1],0,-34,0,34.1).s().p("A4BE+QgjgVAFgiQAFghAogcQAqgdA+gHQBzgNA1gzQAWgVAZgnIAzhOQAxhKAtgCQANAAAWAGQAUAGAKgBQAZgCA9AzQAlAeBaBOQAiAcAdACQAcACAmgUQAXgMBEgtQBPgyA7gjQCEhOAug7QAMgQAVgeQAWgbAhgaQBDg1BuApQAYAJBzA/QAbAOBWBVQBZBOBAgBQBBgCAkgdIAggdQAUgTAUgNQASgMBHg1QA4gqA2gcQA/ghBTBOQBHBBAjBaQAcBFBDAuQA7AqAtAAQBXgBBCAOQB3AZAiBDQAhBBgvAaQgOAIgVADMgtsABNIgMABQhGAAglgXg");
	this.shape_1.setTransform(156.9,34.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,313.8,68.2);


(lib.Path_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#27ACA0","#3EAF98","#5DB588","#72BB78","#80C06C","#89C465","#8EC761","#8FC860"],[0,0.055,0.18,0.314,0.455,0.608,0.776,1],-81.7,-81.9,-81.7,82.1).s().p("A89L9IAAtqIBSgEQA3gGAdgaQA5gyAwh8QBEi+BCidQBVjHDcA8QB7AiCNBpQAwAlAKDNQAFBngFBgQBghEDRA0QCDAgCEBAQA0AZAZBSIAVBBQAPAlAWAXQAwAyBJANQBDANAggXQBWg9DHgoQBzgWCaBBQBXAkB3BNQAuAdBEBbQA6BMAcADQAIABBhgDQBugDBVADQEgALCOBTQCOBTi5CGQg6AqhUAqIhIAhg");
	this.shape_1.setTransform(348.9,82);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(163.5,0,370.8,164.1);


(lib.Path_33 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(79,74,66,0)","rgba(67,64,60,0.275)","rgba(55,54,52,0.592)","rgba(47,47,46,0.816)","rgba(42,42,42,0.953)","#292929"],[0,0.157,0.376,0.592,0.804,1],0,-49.4,0,49.5).s().p("EhViAHvIAAvdMCrFAAAIAAPdg");
	this.shape_1.setTransform(547.5,49.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1095,99);


(lib.Group = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4A42").s().p("A0r81QAOANAvAKQD1AwAUAFQBsAiAwBMQBCBnBCCYQBPC0AYCEQA7E6DYCxQBfBPDME8QBnClCDDVQAZAjAHA4QAEAcACBYQAGC2A0CCQA/CgBkCNQAwBEB2CMQAfAkBdAuIC5BbQD/CLBYDfQAPAlAeA/QxgAL33gBg");
	this.shape.setTransform(132.5,217.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,32.9,264.9,369.2);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_11();
	this.instance.setTransform(-5.3,-0.3,1,1,0,0,0,27.9,8);
	this.instance.alpha = 0.16;

	this.instance_1 = new lib.Path_1_4();
	this.instance_1.setTransform(3.5,13.6,1,1,0,0,0,33.8,3);
	this.instance_1.alpha = 0.148;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#757A7F").p("AGwiBIteAAQADBaAFA3QAAAvAmAhQAlAiA1AAIJOAAQA1AAAlgiQAlghAAgvQAFg3AEhag");
	this.shape.setTransform(0,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],5.5,18.5,-2.9,-21.4).s().p("AknCCQg0AAgmgiQglggAAgxQgFg1gDhaINeAAQgEBagFA1QAAAxglAgQglAig1AAg");
	this.shape_1.setTransform(0,4.1);

	this.instance_2 = new lib.Path_3_1();
	this.instance_2.setTransform(27.8,-11.1,1,1,0,0,0,5.8,4.2);
	this.instance_2.alpha = 0.211;
	this.instance_2.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,1,0);

	this.instance_3 = new lib.Path_4_0();
	this.instance_3.setTransform(27.8,-11.2,1,1,0,0,0,6.8,6.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,1,0);

	this.instance_4 = new lib.Path_5_0();
	this.instance_4.setTransform(9.3,-11.2,1,1,0,0,0,7.8,5.6);
	this.instance_4.alpha = 0.211;
	this.instance_4.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,2,3);

	this.instance_5 = new lib.Path_6_0();
	this.instance_5.setTransform(9.2,-11.2,1,1,0,0,0,7.2,6.1);
	this.instance_5.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,1,0);

	this.instance_6 = new lib.Path_7_0();
	this.instance_6.setTransform(-10.3,-11.2,1,1,0,0,0,7.8,5.6);
	this.instance_6.alpha = 0.211;
	this.instance_6.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,2,3);

	this.instance_7 = new lib.Path_8_0();
	this.instance_7.setTransform(-10.4,-11.2,1,1,0,0,0,6.5,6.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,1,0);

	this.instance_8 = new lib.Path_9_0();
	this.instance_8.setTransform(-28.8,-11.2,1,1,0,0,0,7.8,5.6);
	this.instance_8.alpha = 0.211;
	this.instance_8.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,2,3);

	this.instance_9 = new lib.Path_10();
	this.instance_9.setTransform(-28.9,-11.2,1,1,0,0,0,7,6.1);
	this.instance_9.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,1,0);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.1,-17,86.4,34.2);


(lib.RightLeg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_32();
	this.instance.setTransform(15,97.1,1,1,0,0,180,11.5,0.5);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Path_1_13();
	this.instance_1.setTransform(15,95.6,1,1,0,0,180,11.5,1);
	this.instance_1.alpha = 0.262;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],-4.2,-9.2,2.4,9.1).s().p("AAAhnQAAgHACADIAaAzIgTCOIgkAXg");
	this.shape.setTransform(23.4,114.5,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],0.7,4.2,-0.5,-4.1).s().p("AitAPQgEAAgGgGQgFgGgBgDIAAgEQABgEAFgCQAFgEAFAAIFfAAQAFAAAEAEQACACAAAEIAAAEQAAAEgCAFQgFAGgEAAg");
	this.shape_1.setTransform(19.5,145.1,1,1,0,0,180);

	this.instance_2 = new lib.Path_4_1();
	this.instance_2.setTransform(21,129.2,1,1,0,0,180,14.6,4.4);
	this.instance_2.alpha = 0.23;

	this.instance_3 = new lib.Path_5_1();
	this.instance_3.setTransform(20,138.6,1,1,0,0,180,18.5,4);
	this.instance_3.alpha = 0.621;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#757A7F").p("AiPg/QA3g1BZAAQBbAAA2A1QAbAbAJAaQAGAAADAEQAEAEAAADIAABkQAAAGgEAFQgDAFgFAAIloAAQgFAAgGgFQgGgGAAgFIAAhkQAAgDAFgEQAEgEAFAAQAKgaAbgbg");
	this.shape_2.setTransform(19.5,135.3,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],3.2,16.2,-4.6,-11.3).s().p("AiyB1QgFAAgFgGQgGgFABgFIAAhkQgBgEAFgDQAEgEAFAAQAKgaAbgbQA3g1BZAAQBbAAA2A1QAbAbAJAaQAFAAAEAEQADADABAEIAABkQAAAFgDAFQgEAGgFAAg");
	this.shape_3.setTransform(19.5,135.3,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#40484F","#434B52","#4D555C","#60676E","#7F868D","#B0BABF","#B5BFC3"],[0,0.157,0.345,0.549,0.765,0.988,1],-2.6,-15.6,2.9,16.2).s().p("Ag+CbQgCAAgCgEIgCgGQgEhFAKhRIATiPQAAgFAGAAIBnAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgCAAIAAElIACAJQACAGgCAAg");
	this.shape_4.setTransform(16.1,124,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#757A7F").p("AgxjMICJAAQAEAAAAANIAAF/QAAANgEAAIiqAAQgDAAgDgEQgCgEAAgEQgCgVABgkQABhHAIhBIAYjAQAAgEADgEQADgEADAAg");
	this.shape_5.setTransform(18.3,123.6,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],0.6,-20.5,0,20.7).s().p("AhSDNQgDgBgDgDQgCgDAAgEQgCgXABgjQABhHAIhBIAYjAQAAgEADgDQADgFADAAICJAAQAEAAAAANIAAF+QAAANgEABg");
	this.shape_6.setTransform(18.3,123.6,1,1,0,0,180);

	this.instance_4 = new lib.Path_9_1();
	this.instance_4.setTransform(17.1,110.5,1,1,0,0,180,10.6,23.1);
	this.instance_4.alpha = 0.25;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#757A7F").p("AhRkwIDTAAQAGAAAFADQAFAEAAAFIAAJJQAAAFgFAEQgFADgGAAIkFAAQgFAAgEgEQgDgEAAgFQgCggAAg2QABhsAOhlIAlkhQAAgFADgEQAEgDAFAAg");
	this.shape_7.setTransform(16.7,113.6,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#40484F","#444C53","#525960","#6D737A","#99A2A7","#B5BFC3"],[0,0.145,0.353,0.604,0.882,1],13.1,30.7,-12.1,-28.8).s().p("AiDExQgFgBgEgDQgDgDAAgFQgCgiAAg1QABhsAOhlIAlkhQAAgFADgEQAEgDAFAAIDTAAQAGAAAFADQAFAEAAAEIAAJKQAAAFgFAEQgFADgGAAg");
	this.shape_8.setTransform(16.7,113.6,1,1,0,0,180);

	this.instance_5 = new lib.Path_31();
	this.instance_5.setTransform(18.6,73.5,1,1,0,0,180,7,3.6);
	this.instance_5.alpha = 0.34;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40484F").s().p("AhFBGQgcgeAAgoQAAgnAcgeQAdgdAoAAQApAAAdAdQAdAeAAAnQAAApgdAdQgdAcgpAAQgoAAgdgcg");
	this.shape_9.setTransform(15.6,79.9,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#47494B").p("AhUhUQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjQgjgkAAgxQAAgxAjgjg");
	this.shape_10.setTransform(14.3,78.7,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C4247").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");
	this.shape_11.setTransform(14.3,78.7,1,1,0,0,180);

	this.instance_6 = new lib.Path_28();
	this.instance_6.setTransform(16.2,13.3,1,1,0,0,0,7,7);
	this.instance_6.alpha = 0.34;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#40484F").s().p("AhEBGQgegdAAgpQAAgoAegdQAcgdAoAAQAoAAAdAdQAdAdAAAoQAAApgdAdQgdAcgoAAQgoAAgcgcg");
	this.shape_12.setTransform(13.7,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#47494B").p("AAAh3QgwAAgkAjQgjAjAAAxQAAAyAjAjQAkAjAwAAQAyAAAjgjQAjgkAAgxQAAgxgjgjQgjgjgyAAg");
	this.shape_13.setTransform(12.4,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C4247").s().p("AhUBVQgjgjAAgyQAAgxAjgjQAkgjAwAAQAyAAAjAjQAjAjAAAxQAAAxgjAkQgjAjgyAAQgwAAgkgjg");
	this.shape_14.setTransform(12.4,12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],-2,-5.7,2.1,5.8).s().p("AgxAqQgVgRAAgZQAAgXAVgSQAVgSAcAAQAdAAAVASQAUASABAXQgBAZgUARQgVASgdAAQgcAAgVgSg");
	this.shape_15.setTransform(12.2,22.3);

	this.instance_7 = new lib.Path_27();
	this.instance_7.setTransform(15,48.1,1,1,0,0,0,4.5,26.5);
	this.instance_7.alpha = 0.281;

	this.instance_8 = new lib.Path_1_11();
	this.instance_8.setTransform(15,48.1,1,1,0,0,0,4.5,26.5);
	this.instance_8.alpha = 0.281;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#757A7F").p("AhPkNIAAIbICfAAIAAobg");
	this.shape_16.setTransform(12,47.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],9,0.3,-8.8,-0.2).s().p("AhOENIAAoaICdAAIAAIag");
	this.shape_17.setTransform(12,47.1);

	this.addChild(this.shape_17,this.shape_16,this.instance_8,this.instance_7,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.instance_6,this.shape_11,this.shape_10,this.shape_9,this.instance_5,this.shape_8,this.shape_7,this.instance_4,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_3,this.instance_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39,147.1);


(lib.RightArm1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Path_23();
	this.instance.setTransform(103.6,11.4,0.999,0.999,-104.9,0,0,2.5,2);
	this.instance.alpha = 0.34;

	this.instance_1 = new lib.Path_1_9();
	this.instance_1.setTransform(99.2,12,0.999,0.999,-104.9,0,0,7.5,7.5);
	this.instance_1.alpha = 0.34;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40484F").s().p("AgHBiQgpgDgaggQgbgfAEgnQAEgpAfgaQAfgbAnAEQApAEAaAfQAbAfgEAnQgDApggAaQgcAYgiAAIgIgBg");
	this.shape.setTransform(99.8,9.9,0.999,0.999,-104.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#47494B").p("AAKh3QAyAFAgAmQAgAmgEAwQgEAygnAgQgmAggwgEQgygEgggnQgggmAEgwQAEgyAnggQAmggAwAEg");
	this.shape_1.setTransform(98.4,8.9,0.999,0.999,-104.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C4247").s().p("AgJB4QgygFgggmQgggmAEgwQAEgyAnggQAmggAwAEQAyAEAgAnQAgAmgEAwQgEAygnAgQgiAcgrAAIgJAAg");
	this.shape_2.setTransform(98.4,8.9,0.999,0.999,-104.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],3,1.8,-3.1,-1.3).s().p("AgDAVQgSgNgGgcIALgGIAIAVQALAVAZADIgQAIQgIAAgHgGg");
	this.shape_3.setTransform(124,14.3,0.999,0.999,-104.9);

	this.instance_2 = new lib.Path_22();
	this.instance_2.setTransform(114.3,16.2,0.999,0.999,-104.9,0,0,9.5,16.9);
	this.instance_2.alpha = 0.34;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#757A7F").p("AgQBNQALAZAdADIgOBKQg2gFgggrQgggqAFg6IAIhVQAFg5AsgkQAsgkA3AFIAzAEIgGBGIghgDQgggCgZAXQgWAXgDAiIgEAwQgEAmAJAUg");
	this.shape_4.setTransform(114.9,15.3,0.999,0.999,-104.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-10.2,-7.3,14.1,7.2).s().p("AhMCDQgfgqAFg6IAHhVQAFg4AsgkQAsglA3AGIAzAEIgGBGIgggDQghgDgZAYQgWAXgDAiIgEAwQgDAmAJAUQAKAYAdADIgOBKQg2gFgggrg");
	this.shape_5.setTransform(114.9,15.3,0.999,0.999,-104.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],3.3,1.7,-2.9,-1.4).s().p("AgQAYIgPgLQAbgBAOgQIALgTIALAGQgLAbgVAKQgGAEgHAAIgDAAg");
	this.shape_6.setTransform(121.4,-0.5,0.999,0.999,-104.9);

	this.instance_3 = new lib.Path_21();
	this.instance_3.setTransform(110.7,-0.3,0.999,0.999,-104.9,0,0,7.5,17);
	this.instance_3.alpha = 0.34;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#757A7F").p("AhUi1IgGBFIAgADQAhADAUAbQASAbgDAiIgFAwQgDAmgKATQgPAWgfgCIACBLQA1AFAnglQAmgkAGg6IAHhVQAFg5glgrQglgrg3gFg");
	this.shape_7.setTransform(111.4,0.6,0.999,0.999,-104.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-15.2,-7,9.1,7.5).s().p("Ag1C2IgBhLQAfACAPgWQAKgTADgmIAEgwQADgigRgbQgVgbghgDIgggDIAGhFIAzAEQA3AFAlArQAmArgFA5IgIBVQgFA6gmAkQgiAgguAAIgNAAg");
	this.shape_8.setTransform(111.4,0.6,0.999,0.999,-104.9);

	// Layer 3
	this.instance_4 = new lib.Path_17();
	this.instance_4.setTransform(56.8,37.8,1,0.999,-119.9,0,0,2.4,2.9);
	this.instance_4.alpha = 0.34;

	this.instance_5 = new lib.Path_1_6();
	this.instance_5.setTransform(52.5,40.9,1,0.999,-119.9,0,0,6.5,6.7);
	this.instance_5.alpha = 0.34;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40484F").s().p("AhDBHQgegdgBgpQAAgnAcgdQAcgeApgBQAnAAAeAcQAeAcAAApQABAngcAeQgdAegpAAIgBABQgnAAgcgcg");
	this.shape_9.setTransform(51.8,38.3,1,0.999,-119.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#47494B").p("AgBh3QAxgBAkAiQAkAjAAAyQABAwgiAkQgjAkgyABQgwABgkgiQgkgjgBgyQgBgwAjgkQAigkAygBg");
	this.shape_10.setTransform(50.1,37.8,1,0.999,-119.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C4247").s().p("AhSBXQgkgjgBgyQgBgwAjgkQAigkAygBQAxgBAkAiQAkAjAAAyQABAwgiAkQgjAkgyABIgCAAQgvAAgjghg");
	this.shape_11.setTransform(50.1,37.8,1,0.999,-119.9);

	this.instance_6 = new lib.Path_15();
	this.instance_6.setTransform(81.2,23.9,1,0.999,-119.9,0,0,4.5,27.2);
	this.instance_6.alpha = 0.281;

	this.instance_7 = new lib.Path_1_5();
	this.instance_7.setTransform(81.2,23.9,1,0.999,-119.9,0,0,4.5,27.2);
	this.instance_7.alpha = 0.281;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#757A7F").p("ABUkJIALIQIiyADIgLoQg");
	this.shape_12.setTransform(77.9,21.4,1,0.999,-119.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],9.9,0.2,-9.8,0).s().p("AhekGICygDIALIQIiyADg");
	this.shape_13.setTransform(77.9,21.4,1,0.999,-119.9);

	// Layer 4
	this.instance_8 = new lib.Path_0();
	this.instance_8.setTransform(4.9,9.6,1,1,-74.9,0,0,2.8,2.5);
	this.instance_8.alpha = 0.34;

	this.instance_9 = new lib.Path_1_0();
	this.instance_9.setTransform(0.9,7,1,1,-74.9,0,0,6.6,7.8);
	this.instance_9.alpha = 0.34;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40484F").s().p("AgjBbQgmgOgQgmQgRgmAPgkQAPgmAmgQQAmgQAkAPQAmAOAQAmQARAmgQAkQgPAmglAQQgUAJgTAAQgRAAgSgIg");
	this.shape_14.setTransform(3.2,5.4,1,1,-74.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#47494B").p("AAshvQAvATAUAuQAUAtgTAtQgTAvgtAUQgvAUgsgTQgvgSgUguQgUguATgtQATguAtgUQAugUAtASg");
	this.shape_15.setTransform(3,3.7,1,1,-74.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C4247").s().p("AgrBwQgugSgVgvQgUguATgsQATgvAtgTQAugVAtATQAvASAUAvQATAtgSAtQgTAvguATQgXALgYAAQgVAAgWgJg");
	this.shape_16.setTransform(3,3.7,1,1,-74.9);

	this.instance_10 = new lib.Path();
	this.instance_10.setTransform(26.3,25.3,1,1,-74.9,0,0,14.8,26.4);
	this.instance_10.alpha = 0.281;

	this.instance_11 = new lib.Path_1();
	this.instance_11.setTransform(26.3,25.3,1,1,-74.9,0,0,14.8,26.4);
	this.instance_11.alpha = 0.281;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#757A7F").p("AC2jYIjEH0IinhCIDEn1g");
	this.shape_17.setTransform(27.9,22.6,1,1,-74.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],9.1,4,-9,-3.8).s().p("Ai1DaIDEn1ICnBDIjEH0g");
	this.shape_18.setTransform(27.9,22.6,1,1,-74.9);

	this.addChild(this.shape_18,this.shape_17,this.instance_11,this.instance_10,this.shape_16,this.shape_15,this.shape_14,this.instance_9,this.instance_8,this.shape_13,this.shape_12,this.instance_7,this.instance_6,this.shape_11,this.shape_10,this.shape_9,this.instance_5,this.instance_4,this.shape_8,this.shape_7,this.instance_3,this.shape_6,this.shape_5,this.shape_4,this.instance_2,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,-12.6,142.6,62.7);


(lib.RightArm = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_23();
	this.instance.setTransform(16.8,121.1,1,1,0,0,0,2.3,2.4);
	this.instance.alpha = 0.34;

	this.instance_1 = new lib.Path_1_9();
	this.instance_1.setTransform(17.2,116.1,1,1,0,0,0,7,7);
	this.instance_1.alpha = 0.34;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40484F").s().p("AgHBiQgpgDgaggQgbgfAEgnQAEgpAfgaQAfgbAnAEQApAEAaAfQAbAfgEAnQgDApggAaQgcAYgiAAIgIgBg");
	this.shape.setTransform(19.6,117.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#47494B").p("AAKh3QAyAFAgAmQAgAmgEAwQgEAygnAgQgmAggwgEQgygEgggnQgggmAEgwQAEgyAnggQAmggAwAEg");
	this.shape_1.setTransform(20.9,116.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C4247").s().p("AgJB4QgygFgggmQgggmAEgwQAEgyAnggQAmggAwAEQAyAEAgAnQAgAmgEAwQgEAygnAgQgiAcgrAAIgJAAg");
	this.shape_2.setTransform(20.9,116.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],3,1.8,-3.1,-1.3).s().p("AgDAVQgSgNgGgcIALgGIAIAVQALAVAZADIgQAIQgIAAgHgGg");
	this.shape_3.setTransform(9,139.7);

	this.instance_2 = new lib.Path_22();
	this.instance_2.setTransform(10,130.3,1,1,0,0,0,9.5,17.1);
	this.instance_2.alpha = 0.34;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#757A7F").p("AgQBNQALAZAdADIgOBKQg2gFgggrQgggqAFg6IAIhVQAFg5AsgkQAsgkA3AFIAzAEIgGBGIghgDQgggCgZAXQgWAXgDAiIgEAwQgEAmAJAUg");
	this.shape_4.setTransform(10.5,130.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-10.2,-7.3,14.1,7.2).s().p("AhMCDQgfgqAFg6IAHhVQAFg4AsgkQAsglA3AGIAzAEIgGBGIgggDQghgDgZAYQgWAXgDAiIgEAwQgDAmAJAUQAKAYAdADIgOBKQg2gFgggrg");
	this.shape_5.setTransform(10.4,130.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],3.3,1.7,-2.9,-1.4).s().p("AgQAYIgPgLQAbgBAOgQIALgTIALAGQgLAbgVAKQgGAEgHAAIgDAAg");
	this.shape_6.setTransform(24.1,141.1);

	this.instance_3 = new lib.Path_21();
	this.instance_3.setTransform(26.6,131.2,1,1,0,0,0,7.7,17.6);
	this.instance_3.alpha = 0.34;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#757A7F").p("AhUi1IgGBFIAgADQAhADAUAbQASAbgDAiIgFAwQgDAmgKATQgPAWgfgCIACBLQA1AFAnglQAmgkAGg6IAHhVQAFg5glgrQglgrg3gFg");
	this.shape_7.setTransform(25.5,131.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-15.2,-7,9.1,7.5).s().p("Ag1C2IgBhLQAfACAPgWQAKgTADgmIAEgwQADgigRgbQgVgbghgDIgggDIAGhFIAzAEQA3AFAlArQAmArgFA5IgIBVQgFA6gmAkQgiAgguAAIgNAAg");
	this.shape_8.setTransform(25.6,131.1);

	this.instance_4 = new lib.Path_17();
	this.instance_4.setTransform(16.9,66.8,1,1,0,0,0,2.3,2.3);
	this.instance_4.alpha = 0.34;

	this.instance_5 = new lib.Path_1_6();
	this.instance_5.setTransform(16.8,61.8,1,1,0,0,0,7,7);
	this.instance_5.alpha = 0.34;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40484F").s().p("AhDBHQgegdgBgpQAAgnAcgdQAcgeApgBQAnAAAeAcQAeAcAAApQABAngcAeQgdAegpAAIgBABQgnAAgcgcg");
	this.shape_9.setTransform(19.4,63.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#47494B").p("AgBh3QAxgBAkAiQAkAjAAAyQABAwgiAkQgjAkgyABQgwABgkgiQgkgjgBgyQgBgwAjgkQAigkAygBg");
	this.shape_10.setTransform(20.6,61.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C4247").s().p("AhSBXQgkgjgBgyQgBgwAjgkQAigkAygBQAxgBAkAiQAkAjAAAyQABAwgiAkQgjAkgyABIgCAAQgvAAgjghg");
	this.shape_11.setTransform(20.6,61.8);

	this.instance_6 = new lib.Path_15();
	this.instance_6.setTransform(17.4,95.2,1,1,0,0,0,5.5,27.1);
	this.instance_6.alpha = 0.281;

	this.instance_7 = new lib.Path_1_5();
	this.instance_7.setTransform(17.4,95.2,1,1,0,0,0,5.5,27.1);
	this.instance_7.alpha = 0.281;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#757A7F").p("ABUkJIALIQIiyADIgLoQg");
	this.shape_12.setTransform(20.9,94.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],9.9,0.2,-9.8,0).s().p("AhekGICygDIALIQIiyADg");
	this.shape_13.setTransform(20.9,94.1);

	this.instance_8 = new lib.Path_0();
	this.instance_8.setTransform(34.6,15.4,1,1,0,0,0,2.3,2.3);
	this.instance_8.alpha = 0.34;

	this.instance_9 = new lib.Path_1_0();
	this.instance_9.setTransform(36.4,10.8,1,1,0,0,0,7,7);
	this.instance_9.alpha = 0.34;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40484F").s().p("AgjBbQgmgOgQgmQgRgmAPgkQAPgmAmgQQAmgQAkAPQAmAOAQAmQARAmgQAkQgPAmglAQQgUAJgTAAQgRAAgSgIg");
	this.shape_14.setTransform(38.3,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#47494B").p("AAshvQAvATAUAuQAUAtgTAtQgTAvgtAUQgvAUgsgTQgvgSgUguQgUguATgtQATguAtgUQAugUAtASg");
	this.shape_15.setTransform(39.9,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C4247").s().p("AgrBwQgugSgVgvQgUguATgsQATgvAtgTQAugVAtATQAvASAUAvQATAtgSAtQgTAvguATQgXALgYAAQgVAAgWgJg");
	this.shape_16.setTransform(39.9,12.2);

	this.instance_10 = new lib.Path();
	this.instance_10.setTransform(24.7,40.3,1,1,0,0,0,14.6,26.9);
	this.instance_10.alpha = 0.281;

	this.instance_11 = new lib.Path_1();
	this.instance_11.setTransform(24.7,40.3,1,1,0,0,0,14.6,26.9);
	this.instance_11.alpha = 0.281;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#757A7F").p("AC2jYIjEH0IinhCIDEn1g");
	this.shape_17.setTransform(28.1,41.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],9.1,4,-9,-3.8).s().p("Ai1DaIDEn1ICnBDIjEH0g");
	this.shape_18.setTransform(28.1,41.1);

	this.addChild(this.shape_18,this.shape_17,this.instance_11,this.instance_10,this.shape_16,this.shape_15,this.shape_14,this.instance_9,this.instance_8,this.shape_13,this.shape_12,this.instance_7,this.instance_6,this.shape_11,this.shape_10,this.shape_9,this.instance_5,this.instance_4,this.shape_8,this.shape_7,this.instance_3,this.shape_6,this.shape_5,this.shape_4,this.instance_2,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.1,149.4);


(lib.LeftLeg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_32();
	this.instance.setTransform(24,97.1,1,1,0,0,0,11.5,0.5);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Path_1_13();
	this.instance_1.setTransform(24,95.6,1,1,0,0,0,11.5,1);
	this.instance_1.alpha = 0.262;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],-4.2,-9.2,2.4,9.1).s().p("AAAhnQAAgHACADIAaAzIgTCOIgkAXg");
	this.shape.setTransform(15.6,114.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],0.7,4.2,-0.5,-4.1).s().p("AitAPQgEAAgGgGQgFgGgBgDIAAgEQABgEAFgCQAFgEAFAAIFfAAQAFAAAEAEQACACAAAEIAAAEQAAAEgCAFQgFAGgEAAg");
	this.shape_1.setTransform(19.5,145.1);

	this.instance_2 = new lib.Path_4_1();
	this.instance_2.setTransform(18.1,129.2,1,1,0,0,0,14.6,4.4);
	this.instance_2.alpha = 0.23;

	this.instance_3 = new lib.Path_5_1();
	this.instance_3.setTransform(19,138.6,1,1,0,0,0,18.5,4);
	this.instance_3.alpha = 0.621;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#757A7F").p("AiPg/QA3g1BZAAQBbAAA2A1QAbAbAJAaQAGAAADAEQAEAEAAADIAABkQAAAGgEAFQgDAFgFAAIloAAQgFAAgGgFQgGgGAAgFIAAhkQAAgDAFgEQAEgEAFAAQAKgaAbgbg");
	this.shape_2.setTransform(19.5,135.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],3.2,16.2,-4.6,-11.3).s().p("AiyB1QgFAAgFgGQgGgFABgFIAAhkQgBgEAFgDQAEgEAFAAQAKgaAbgbQA3g1BZAAQBbAAA2A1QAbAbAJAaQAFAAAEAEQADADABAEIAABkQAAAFgDAFQgEAGgFAAg");
	this.shape_3.setTransform(19.5,135.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#40484F","#434B52","#4D555C","#60676E","#7F868D","#B0BABF","#B5BFC3"],[0,0.157,0.345,0.549,0.765,0.988,1],-2.6,-15.6,2.9,16.2).s().p("Ag+CbQgCAAgCgEIgCgGQgEhFAKhRIATiPQAAgFAGAAIBnAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABABQAAAAAAAAQAAAAgBAAQAAAAgBAAIgCAAIAAElIACAJQACAGgCAAg");
	this.shape_4.setTransform(22.9,124);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#757A7F").p("AgxjMICJAAQAEAAAAANIAAF/QAAANgEAAIiqAAQgDAAgDgEQgCgEAAgEQgCgVABgkQABhHAIhBIAYjAQAAgEADgEQADgEADAAg");
	this.shape_5.setTransform(20.7,123.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],0.6,-20.5,0,20.7).s().p("AhSDNQgDgBgDgDQgCgDAAgEQgCgXABgjQABhHAIhBIAYjAQAAgEADgDQADgFADAAICJAAQAEAAAAANIAAF+QAAANgEABg");
	this.shape_6.setTransform(20.7,123.6);

	this.instance_4 = new lib.Path_9_1();
	this.instance_4.setTransform(21.9,110.5,1,1,0,0,0,10.6,23.1);
	this.instance_4.alpha = 0.25;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#757A7F").p("AhRkwIDTAAQAGAAAFADQAFAEAAAFIAAJJQAAAFgFAEQgFADgGAAIkFAAQgFAAgEgEQgDgEAAgFQgCggAAg2QABhsAOhlIAlkhQAAgFADgEQAEgDAFAAg");
	this.shape_7.setTransform(22.3,113.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#40484F","#444C53","#525960","#6D737A","#99A2A7","#B5BFC3"],[0,0.145,0.353,0.604,0.882,1],13.1,30.7,-12.1,-28.8).s().p("AiDExQgFgBgEgDQgDgDAAgFQgCgiAAg1QABhsAOhlIAlkhQAAgFADgEQAEgDAFAAIDTAAQAGAAAFADQAFAEAAAEIAAJKQAAAFgFAEQgFADgGAAg");
	this.shape_8.setTransform(22.3,113.6);

	this.instance_5 = new lib.Path_31();
	this.instance_5.setTransform(20.8,77.1,1,1,0,0,0,7,7);
	this.instance_5.alpha = 0.34;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40484F").s().p("AhFBGQgcgeAAgoQAAgnAcgeQAdgdAoAAQApAAAdAdQAdAeAAAnQAAApgdAdQgdAcgpAAQgoAAgdgcg");
	this.shape_9.setTransform(23.3,79.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#47494B").p("AhUhUQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjQgjgkAAgxQAAgxAjgjg");
	this.shape_10.setTransform(24.5,78.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C4247").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");
	this.shape_11.setTransform(24.5,78.3);

	this.instance_6 = new lib.Path_30();
	this.instance_6.setTransform(20.8,13.3,1,1,0,0,0,7,7);
	this.instance_6.alpha = 0.34;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#40484F").s().p("AhFBGQgcgdAAgpQAAgoAcgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAcgpAAQgoAAgdgcg");
	this.shape_12.setTransform(23.3,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#47494B").p("ABVhUQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjg");
	this.shape_13.setTransform(24.5,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3C4247").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");
	this.shape_14.setTransform(24.5,12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],-2,-5.7,2.1,5.8).s().p("AgxAqQgUgRAAgZQAAgXAUgSQAVgSAcAAQAdAAAUASQAWASgBAXQABAZgWARQgUASgdAAQgcAAgVgSg");
	this.shape_15.setTransform(24.7,22.3);

	this.instance_7 = new lib.Path_29();
	this.instance_7.setTransform(21.5,48.1,1,1,0,0,0,4,26.5);
	this.instance_7.alpha = 0.281;

	this.instance_8 = new lib.Path_1_12();
	this.instance_8.setTransform(21.5,48.1,1,1,0,0,0,4,26.5);
	this.instance_8.alpha = 0.281;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#757A7F").p("ABQkNIAAIbIifAAIAAobg");
	this.shape_16.setTransform(25,47.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],9,0.3,-8.8,-0.2).s().p("AhPENIAAoaICeAAIAAIag");
	this.shape_17.setTransform(25,47.1);

	this.addChild(this.shape_17,this.shape_16,this.instance_8,this.instance_7,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.instance_6,this.shape_11,this.shape_10,this.shape_9,this.instance_5,this.shape_8,this.shape_7,this.instance_4,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance_3,this.instance_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39,147.1);


(lib.LeftArm1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Path_23();
	this.instance.setTransform(-85,-66.4,1,1,-179.9,0,0,3,2.8);
	this.instance.alpha = 0.34;

	this.instance_1 = new lib.Path_1_9();
	this.instance_1.setTransform(-84.9,-61.9,1,1,-179.9,0,0,7.2,7.2);
	this.instance_1.alpha = 0.34;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40484F").s().p("AgHBiQgpgDgaggQgbgfAEgnQAEgpAfgaQAfgbAnAEQApAEAaAfQAbAfgEAnQgDApggAaQgcAYgiAAIgIgBg");
	this.shape.setTransform(-88.1,-63.5,1,1,-179.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#47494B").p("AAKh3QAyAFAgAmQAgAmgEAwQgEAygnAgQgmAggwgEQgygEgggnQgggmAEgwQAEgyAnggQAmggAwAEg");
	this.shape_1.setTransform(-89.4,-62.3,1,1,-179.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C4247").s().p("AgJB4QgygFgggmQgggmAEgwQAEgyAnggQAmggAwAEQAyAEAgAnQAgAmgEAwQgEAygnAgQgiAcgrAAIgJAAg");
	this.shape_2.setTransform(-89.4,-62.3,1,1,-179.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],3,1.8,-3.1,-1.3).s().p("AgDAVQgSgNgGgcIALgGIAIAVQALAVAZADIgQAIQgIAAgHgGg");
	this.shape_3.setTransform(-77.5,-85.6,1,1,-179.9);

	this.instance_2 = new lib.Path_22();
	this.instance_2.setTransform(-77.7,-76.6,1,1,-179.9,0,0,9.2,17.6);
	this.instance_2.alpha = 0.34;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#757A7F").p("AgQBNQALAZAdADIgOBKQg2gFgggrQgggqAFg6IAIhVQAFg5AsgkQAsgkA3AFIAzAEIgGBGIghgDQgggCgZAXQgWAXgDAiIgEAwQgEAmAJAUg");
	this.shape_4.setTransform(-79,-76.6,1,1,-179.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-10.2,-7.3,14.1,7.2).s().p("AhMCDQgfgqAFg6IAHhVQAFg4AsgkQAsglA3AGIAzAEIgGBGIgggDQghgDgZAYQgWAXgDAiIgEAwQgDAmAJAUQAKAYAdADIgOBKQg2gFgggrg");
	this.shape_5.setTransform(-78.9,-76.6,1,1,-179.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],3.3,1.7,-2.9,-1.4).s().p("AgQAYIgPgLQAbgBAOgQIALgTIALAGQgLAbgVAKQgGAEgHAAIgDAAg");
	this.shape_6.setTransform(-92.6,-87,1,1,-179.9);

	this.instance_3 = new lib.Path_21();
	this.instance_3.setTransform(-93.3,-76.8,1,1,-179.9,0,0,6.9,17.8);
	this.instance_3.alpha = 0.34;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#757A7F").p("AhUi1IgGBFIAgADQAhADAUAbQASAbgDAiIgFAwQgDAmgKATQgPAWgfgCIACBLQA1AFAnglQAmgkAGg6IAHhVQAFg5glgrQglgrg3gFg");
	this.shape_7.setTransform(-94,-77,1,1,-179.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-15.2,-7,9.1,7.5).s().p("Ag1C2IgBhLQAfACAPgWQAKgTADgmIAEgwQADgigRgbQgVgbghgDIgggDIAGhFIAzAEQA3AFAlArQAmArgFA5IgIBVQgFA6gmAkQgiAgguAAIgNAAg");
	this.shape_8.setTransform(-94,-77.1,1,1,-179.9);

	// Layer 3
	this.instance_4 = new lib.Path_17();
	this.instance_4.setTransform(-49.9,-25,1,1,135,0,0,1.9,2);
	this.instance_4.alpha = 0.34;

	this.instance_5 = new lib.Path_1_6();
	this.instance_5.setTransform(-46.7,-21.3,1,1,135,0,0,7.4,6.7);
	this.instance_5.alpha = 0.34;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40484F").s().p("AhDBHQgegdgBgpQAAgnAcgdQAcgeApgBQAnAAAeAcQAeAcAAApQABAngcAeQgdAegpAAIgBABQgnAAgcgcg");
	this.shape_9.setTransform(-48.8,-20.4,1,1,135);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#47494B").p("AgBh3QAxgBAkAiQAkAjAAAyQABAwgiAkQgjAkgyABQgwABgkgiQgkgjgBgyQgBgwAjgkQAigkAygBg");
	this.shape_10.setTransform(-48.8,-18.6,1,1,135);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C4247").s().p("AhSBXQgkgjgBgyQgBgwAjgkQAigkAygBQAxgBAkAiQAkAjAAAyQABAwgiAkQgjAkgyABIgCAAQgvAAgjghg");
	this.shape_11.setTransform(-48.8,-18.6,1,1,135);

	this.instance_6 = new lib.Path_15();
	this.instance_6.setTransform(-70.4,-45,1,1,135,0,0,5.6,27);
	this.instance_6.alpha = 0.281;

	this.instance_7 = new lib.Path_1_5();
	this.instance_7.setTransform(-70.4,-45,1,1,135,0,0,5.6,27);
	this.instance_7.alpha = 0.281;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#757A7F").p("ABUkJIALIQIiyADIgLoQg");
	this.shape_12.setTransform(-71.8,-41.2,1,1,135);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],9.9,0.2,-9.8,0).s().p("AhekGICygDIALIQIiyADg");
	this.shape_13.setTransform(-71.8,-41.2,1,1,135);

	// Layer 4
	this.instance_8 = new lib.Path_0();
	this.instance_8.setTransform(-3.8,-4.4,1,1,90,0,0,1.9,2.5);
	this.instance_8.alpha = 0.34;

	this.instance_9 = new lib.Path_1_0();
	this.instance_9.setTransform(0.3,-2.5,1,1,90,0,0,6.4,7);
	this.instance_9.alpha = 0.34;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40484F").s().p("AgjBbQgmgOgQgmQgRgmAPgkQAPgmAmgQQAmgQAkAPQAmAOAQAmQARAmgQAkQgPAmglAQQgUAJgTAAQgRAAgSgIg");
	this.shape_14.setTransform(-1.2,-0.2,1,1,90);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#47494B").p("AAshvQAvATAUAuQAUAtgTAtQgTAvgtAUQgvAUgsgTQgvgSgUguQgUguATgtQATguAtgUQAugUAtASg");
	this.shape_15.setTransform(-0.5,1.3,1,1,90);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C4247").s().p("AgrBwQgugSgVgvQgUguATgsQATgvAtgTQAugVAtATQAvASAUAvQATAtgSAtQgTAvguATQgXALgYAAQgVAAgWgJg");
	this.shape_16.setTransform(-0.5,1.3,1,1,90);

	this.instance_10 = new lib.Path();
	this.instance_10.setTransform(-29.1,-13.7,1,1,90,0,0,14.7,28);
	this.instance_10.alpha = 0.281;

	this.instance_11 = new lib.Path_1();
	this.instance_11.setTransform(-29.1,-13.7,1,1,90,0,0,14.7,28);
	this.instance_11.alpha = 0.281;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#757A7F").p("AC2jYIjEH0IinhCIDEn1g");
	this.shape_17.setTransform(-29.4,-10.3,1,1,90);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],9.1,4,-9,-3.8).s().p("Ai1DaIDEn1ICnBDIjEH0g");
	this.shape_18.setTransform(-29.4,-10.3,1,1,90);

	this.addChild(this.shape_18,this.shape_17,this.instance_11,this.instance_10,this.shape_16,this.shape_15,this.shape_14,this.instance_9,this.instance_8,this.shape_13,this.shape_12,this.instance_7,this.instance_6,this.shape_11,this.shape_10,this.shape_9,this.instance_5,this.instance_4,this.shape_8,this.shape_7,this.instance_3,this.shape_6,this.shape_5,this.shape_4,this.instance_2,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.3,-95.3,115,108.9);


(lib.LeftArm = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_26();
	this.instance.setTransform(120.8,15.5,1,1,0,0,0,2.3,2.3);
	this.instance.alpha = 0.34;

	this.instance_1 = new lib.Path_1_10();
	this.instance_1.setTransform(125.8,15.5,1,1,0,0,0,7,7);
	this.instance_1.alpha = 0.34;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40484F").s().p("AhFBGQgcgeAAgoQAAgnAcgeQAdgcAoAAQAoAAAeAcQAdAeAAAnQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape.setTransform(124.6,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#47494B").p("AB4AAQAAAygjAjQgjAjgyAAQgxAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxg");
	this.shape_1.setTransform(125.8,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3C4247").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");
	this.shape_2.setTransform(125.8,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],1.5,-3.2,-1,3.2).s().p("AgEgJIgVgJIAIgLQAbAJALATQAFAHAAAJIgKAPQgBgagTgNg");
	this.shape_3.setTransform(153,9.4);

	this.instance_2 = new lib.Path_25();
	this.instance_2.setTransform(143.4,9,1,1,0,0,0,17.3,8.5);
	this.instance_2.alpha = 0.34;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#757A7F").p("AgrheQg4AAgoAqQgoAoAAA3IAAA0IBGAAIAAgiQAAggAZgXQAZgUAjAAIAwAAQAnAAASAKQAYAMAAAeIBLgHQAAg2gogkQgngjg6AAg");
	this.shape_4.setTransform(143.6,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-6.3,15.2,6.1,-10.3).s().p("AizBfIAAg0QAAg3AogpQAogpA4ABIBVAAQA7gBAnAkQAoAjAAA2IhLAIQAAgggYgKQgSgKgnAAIgwAAQgjgBgZAUQgZAXAAAgIAAAig");
	this.shape_5.setTransform(143.6,9.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],1.5,-3,-1,3.4).s().p("AgYATIAUgJQARgMADgbIAJAQQABAIgGAHQgMAUgbAIg");
	this.shape_6.setTransform(153.1,24.5);

	this.instance_3 = new lib.Path_24();
	this.instance_3.setTransform(143.4,25.5,1,1,0,0,0,17.3,8);
	this.instance_3.alpha = 0.34;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#757A7F").p("ABRAEQAYgLAAgfIBLAIQAAA1goAlQgnAjg6AAIhWAAQg4AAgogqQgogoAAg3IAAg0IBGAAIAAAhQAAAhAZAXQAZAUAjAAIAwAAQAmAAATgLg");
	this.shape_7.setTransform(143.6,24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-6.3,10.4,6.1,-15.1).s().p("AgrBfQg4AAgogqQgogoAAg4IAAgzIBGAAIAAAhQAAAhAZAWQAZAVAjAAIAwAAQAmAAATgLQAYgLAAgfIBLAHQAAA3goAkQgnAig7ABg");
	this.shape_8.setTransform(143.6,24.5);

	this.instance_4 = new lib.Path_20();
	this.instance_4.setTransform(60.8,15.5,1,1,0,0,0,2.3,2.3);
	this.instance_4.alpha = 0.34;

	this.instance_5 = new lib.Path_1_8();
	this.instance_5.setTransform(65.8,15.5,1,1,0,0,0,7,7);
	this.instance_5.alpha = 0.34;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40484F").s().p("AhFBGQgdgeAAgoQAAgnAdgeQAegcAnAAQAoAAAeAcQAcAeAAAnQAAApgcAdQgdAdgpAAQgnAAgegdg");
	this.shape_9.setTransform(64.6,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#47494B").p("AAAh3QAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAxAAg");
	this.shape_10.setTransform(65.8,19.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3C4247").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");
	this.shape_11.setTransform(65.8,19.3);

	this.instance_6 = new lib.Path_19();
	this.instance_6.setTransform(96.6,15.5,1,1,0,0,0,26.5,5);
	this.instance_6.alpha = 0.281;

	this.instance_7 = new lib.Path_1_7();
	this.instance_7.setTransform(96.6,15.5,1,1,0,0,0,26.5,5);
	this.instance_7.alpha = 0.281;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#757A7F").p("AEOBaIobAAIAAizIIbAAg");
	this.shape_12.setTransform(97.6,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],-0.2,9.9,0.4,-9.8).s().p("AkMBaIAAiyIIaAAIAACyg");
	this.shape_13.setTransform(97.6,19);

	this.instance_8 = new lib.Path_3();
	this.instance_8.setTransform(7.1,15.5,1,1,0,0,0,2.3,2.3);
	this.instance_8.alpha = 0.34;

	this.instance_9 = new lib.Path_1_2();
	this.instance_9.setTransform(12.1,15.5,1,1,0,0,0,7,7);
	this.instance_9.alpha = 0.34;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40484F").s().p("AhFBGQgdgeAAgoQAAgnAdgeQAdgcAoAAQApAAAdAcQAcAeAAAnQAAApgcAdQgdAdgpAAQgoAAgdgdg");
	this.shape_14.setTransform(10.8,18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#47494B").p("AB4AAQAAAygjAjQgjAjgyAAQgxAAgjgjQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxg");
	this.shape_15.setTransform(12.1,19.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C4247").s().p("AhUBVQgjgkAAgxQAAgxAjgjQAjgjAxAAQAxAAAkAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgxAAgjgjg");
	this.shape_16.setTransform(12.1,19.3);

	this.instance_10 = new lib.Path_2();
	this.instance_10.setTransform(33.1,15.5,1,1,0,0,0,27,5);
	this.instance_10.alpha = 0.281;

	this.instance_11 = new lib.Path_1_1();
	this.instance_11.setTransform(33.1,15.5,1,1,0,0,0,27,5);
	this.instance_11.alpha = 0.281;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#757A7F").p("AEOBaIobAAIAAizIIbAAg");
	this.shape_17.setTransform(33.6,19);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#40484F","#515860","#6F757C","#899197","#9FA8AE","#AEB8BD","#B5BFC3"],[0,0.106,0.282,0.459,0.635,0.816,1],-0.2,9.9,0.4,-9.8).s().p("AkMBaIAAiyIIaAAIAACyg");
	this.shape_18.setTransform(33.6,19);

	this.addChild(this.shape_18,this.shape_17,this.instance_11,this.instance_10,this.shape_16,this.shape_15,this.shape_14,this.instance_9,this.instance_8,this.shape_13,this.shape_12,this.instance_7,this.instance_6,this.shape_11,this.shape_10,this.shape_9,this.instance_5,this.instance_4,this.shape_8,this.shape_7,this.instance_3,this.shape_6,this.shape_5,this.shape_4,this.instance_2,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,161.7,34);


(lib.Jaw = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(43.2,17.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86.4,34.2);


(lib.Head = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_5();
	this.instance.setTransform(56,80.2,1,1,0,0,0,0.5,42);
	this.instance.alpha = 0.328;

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.setTransform(54,80.2,1,1,0,0,0,0.5,42);
	this.instance_1.alpha = 0.328;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#757A7F").p("AAAmjIAANH");
	this.shape.setTransform(55,80.2);

	this.instance_2 = new lib.Path_3_0();
	this.instance_2.setTransform(79.7,83.2,1,1,0,0,0,4.7,4.3);
	this.instance_2.alpha = 0.93;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#596167").ss(0.5).p("ABEAAQAAAcgUAUQgUAUgcAAQgbAAgUgUQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbg");
	this.shape_1.setTransform(79.6,84.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CDD5DD").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape_2.setTransform(79.6,84.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B5BFC3","#A6AFB4","#888F95","#5F666D","#40484F"],[0,0.149,0.4,0.725,1],1.6,10.1,-1.5,-9.9).s().p("AhHBHQgdgdAAgqQAAgoAdgeQAegeApAAQApAAAeAeQAeAeAAAoQAAAqgeAdQgeAegpAAQgpAAgegeg");
	this.shape_3.setTransform(79.7,84.9);

	this.instance_3 = new lib.Path_6();
	this.instance_3.setTransform(79.7,84.9,1,1,0,0,0,13,13);
	this.instance_3.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,2,3);

	this.instance_4 = new lib.Path_7();
	this.instance_4.setTransform(34.8,67.2,1,1,0,0,0,18.8,25.9);
	this.instance_4.alpha = 0.328;

	this.instance_5 = new lib.Path_8();
	this.instance_5.setTransform(74.3,67.7,1,1,0,0,0,17.8,25.5);
	this.instance_5.alpha = 0.27;

	this.instance_6 = new lib.Path_9();
	this.instance_6.setTransform(29.7,83.2,1,1,0,0,0,4.7,4.3);
	this.instance_6.alpha = 0.93;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#596167").ss(0.5).p("AgvgvQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUQgUgUAAgcQAAgbAUgUg");
	this.shape_4.setTransform(29.6,84.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CDD5DD").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");
	this.shape_5.setTransform(29.6,84.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B5BFC3","#A6AFB4","#888F95","#5F666D","#40484F"],[0,0.149,0.4,0.725,1],1.6,10.1,-1.5,-9.9).s().p("AhGBHQgegdAAgqQAAgoAegeQAdgeApAAQAqAAAeAeQAdAeAAAoQAAAqgdAdQgeAegqAAQgpAAgdgeg");
	this.shape_6.setTransform(29.7,84.9);

	this.instance_7 = new lib.Path_12();
	this.instance_7.setTransform(29.7,84.9,1,1,0,0,0,13,13);
	this.instance_7.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,2,3);

	this.instance_8 = new lib.Path_13();
	this.instance_8.setTransform(79.7,86.1,1,1,0,0,0,14.2,14.2);
	this.instance_8.alpha = 0.148;
	this.instance_8.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,2,3);

	this.instance_9 = new lib.Path_14();
	this.instance_9.setTransform(29.7,86.1,1,1,0,0,0,14.2,14.2);
	this.instance_9.alpha = 0.148;
	this.instance_9.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,2,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#757A7F").p("Al8l5QAlgfA0AAIBogGQB3gFBEAAQBvAAC1AKQA0AAAlAgQAlAgAAArIAHBdQAGBwAABnQAACmgNCHQAAAtglAiQglAig0AAIpHAAQg0AAglgiQglgiAAgtQgNigAAiaQAAhhAHhsIAGhYQAAgsAlghg");
	this.shape_7.setTransform(54.5,79.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],3.9,44.3,-3.7,-43.1).s().p("AkjGkQg0AAglgiQglgiAAgtQgNigAAiaQAAhiAHhrIAGhYQAAgtAlgfQAlggA0AAIBogFQB3gGBEAAQBvAAC1AKQA0ABAlAfQAlAfAAAsIAHBcQAGBxAABmQAACngNCHQAAAtglAiQglAig0AAg");
	this.shape_8.setTransform(54.5,79.6);

	this.instance_10 = new lib.Path_16();
	this.instance_10.setTransform(101.4,73.8,1,1,0,0,0,5,8.8);
	this.instance_10.alpha = 0.621;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#757A7F").p("AhAi0IAAFpQAAAMAIAAIBng+QAGAAAFgEQAHgEAAgFIAAjrQAAgFgIgEQgGgEgGAAIhhg+QgFAAgEADQgDAEAAAFg");
	this.shape_9.setTransform(102.5,83.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],-14.5,-10.3,8,9.9).s().p("AhAC1IAAlpQAAgFADgEQAEgDAFAAIBhA+QAGAAAHAEQAGAEAAAFIAADrQAAAFgFAEQgGAEgGAAIhmA+QgJAAAAgMg");
	this.shape_10.setTransform(102.5,83.1);

	this.instance_11 = new lib.Path_18();
	this.instance_11.setTransform(6.7,73.8,1,1,0,0,0,5.2,8.8);
	this.instance_11.alpha = 0.621;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#757A7F").p("ABBi0IAAFpQAAAMgJAAIhng+QgFAAgFgEQgHgEAAgFIAAjrQAAgFAHgEQAHgEAFAAIBig+QAFAAADADQAEAEAAAFg");
	this.shape_11.setTransform(6.5,83.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],14.6,9.9,-7.9,-10.3).s().p("AgvCDQgFAAgFgEQgGgEgBgFIAAjrQABgFAGgEQAHgEAFAAIBhg+QAGAAADADQADAEABAFIAAFpQAAAMgJAAg");
	this.shape_12.setTransform(6.5,83.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#757A7F").p("AhdAhQgCgEAAgEIAfg6QAAgCACABQADADABAAIB1AAQABAAADgEQACgCAAADIAfBBQAAAGgGAAIizAAQgCAAgCgEg");
	this.shape_13.setTransform(54.2,35.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],0.9,6.1,-2.1,-4.7).s().p("AhZAlQgCAAgCgEQgCgEAAgEIAfg6QAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAEADIB1AAQABAAADgEQABAAAAgBQAAAAAAAAQABAAAAABQAAAAAAABIAfBBQAAAGgGAAg");
	this.shape_14.setTransform(54.2,35.9);

	this.instance_12 = new lib.Path_4();
	this.instance_12.setTransform(54.2,24.3,1,1,0,0,0,7,5.7);
	this.instance_12.alpha = 0.672;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F8EC61").p("ACSgtQAAA5grBKQgwBSg3AAQg2AAgwhSQgrhKAAg5QAAgzArgkQArgjA7AAQA8AAArAjQArAkAAAzg");
	this.shape_15.setTransform(53.9,16.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","#FCF7C4","#F9ED60"],[0,0.369,1],0,0,0,0,0,15.8).s().p("AhmBWQgrhKAAg5QAAgzArgkQArgjA7AAQA8AAArAjQArAkAAAzQAAA5grBKQgwBSg3AAQg2AAgwhSg");
	this.shape_16.setTransform(53.9,16.9);

	this.addChild(this.shape_16,this.shape_15,this.instance_12,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.instance_11,this.shape_10,this.shape_9,this.instance_10,this.shape_8,this.shape_7,this.instance_9,this.instance_8,this.instance_7,this.shape_6,this.shape_5,this.shape_4,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.shape_3,this.shape_2,this.shape_1,this.instance_2,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109,122.2);


(lib.Body = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_35();
	this.instance.setTransform(35.4,82,1,1,0,0,0,34,0.5);
	this.instance.alpha = 0.57;

	this.instance_1 = new lib.Path_1_15();
	this.instance_1.setTransform(35.9,80.5,1,1,0,0,0,34.5,1);
	this.instance_1.alpha = 0.262;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(35.9,83,1,1,0,0,0,34.5,0.5);
	this.instance_2.alpha = 0.262;

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.setTransform(35.3,48.3,1,1,0,0,0,6.8,5);
	this.instance_3.alpha = 0.551;

	this.instance_4 = new lib.Path_4_2();
	this.instance_4.setTransform(35.5,51.3,1,1,0,0,0,9.2,9.6);
	this.instance_4.alpha = 0.27;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#40484F").p("ABwAAQAAAughAhQghAhguAAQgtAAghghQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtg");
	this.shape.setTransform(35.5,51.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B98AF").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_1.setTransform(35.5,51.4);

	this.instance_5 = new lib.Path_6_2();
	this.instance_5.setTransform(35.5,51.5,1,1,0,0,0,15,15);
	this.instance_5.alpha = 0.148;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#9CABAF").p("ACNiMQA7A6AABSQAABTg7A6Qg7A7hSAAQhSAAg7g7Qg6g6AAhTQAAhSA6g6QA7g7BSAAQBSAAA7A7g");
	this.shape_2.setTransform(35.5,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B5BFC3","#8B9298","#666C73","#50575E","#444C53","#40484F"],[0,0.184,0.431,0.655,0.851,1],0.7,20.1,-0.6,-19.9).s().p("AiMCNQg7g6AAhTQAAhRA7g8QA6g6BSAAQBSAAA7A6QA7A8AABRQAABTg7A6Qg7A7hSAAQhSAAg6g7g");
	this.shape_3.setTransform(35.5,51.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#40484F","#5F666D","#888F95","#A6AFB4","#B5BFC3"],[0,0.275,0.6,0.851,1],5,23.3,-4.8,-23.1).s().p("AinCoQhGhGAAhiQAAhhBGhGQBGhFBhAAQBiAABGBFQBFBGABBhQgBBihFBGQhGBFhiAAQhhAAhGhFg");
	this.shape_4.setTransform(35.5,51.5);

	this.instance_6 = new lib.Path_9_2();
	this.instance_6.setTransform(35.5,52.7,1,1,0,0,0,26.4,26.4);
	this.instance_6.alpha = 0.148;
	this.instance_6.shadow = new cjs.Shadow("rgba(67,69,71,0.176)",1,2,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#40484F","rgba(64,72,79,0)"],[0,1],2.5,-15.1,-2.3,15.5).s().p("AjJB8QgiAAgbgLQgagKABgOQgKgoABgxQgBgcAFgiIAFgbQgBgNAagJQAagJAjAAIDJgDQBNAAB9AEQAkAAAZAJQAaAJAAANIAFAaQADAgAAAdQAAArgIAvQAAAOgaAKQgaALgjAAg");
	this.shape_5.setTransform(34.9,94.1);

	this.instance_7 = new lib.Path_11_0();
	this.instance_7.setTransform(36.2,48.1,1,1,0,0,0,31.2,29.6);
	this.instance_7.alpha = 0.25;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#757A7F").p("AAAnlQBbAACUAMQArAAAeAlQAeAlAAA0IAGBqQAFCDAAB4QAADEgLCbQAAA0geAlQgeAkgrAAIndAAQgrAAgegkQgeglAAg0QgLi4AAi2QAAhyAGh+IAFhmQAAg0AeglQAeglArAAIBVgGQBhgGA4AAg");
	this.shape_6.setTransform(35.3,60.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#40484F","#848C92","#B5BFC3"],[0,0.682,1],17.5,51.4,-17.4,-50.1).s().p("AjuHmQgrABgeglQgeglAAg0QgLi4AAi1QAAhzAGh+IAFhmQAAg0AeglQAeglArAAIBVgGQBhgGA4gBQBbAACUANQArAAAeAlQAeAlAAA0IAGBqQAFCDAAB4QAADEgLCbQAAA0geAlQgeAlgrgBg");
	this.shape_7.setTransform(35.3,60.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#47494B").p("ABzg4IAABxQAAAFgEAEQgEAEgFAAIjLAAQgFAAgEgEQgEgEAAgFIAAhxQAAgFAEgEQAEgEAFAAIDLAAQAFAAAEAEQAEAEAAAFg");
	this.shape_8.setTransform(36.4,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3C4247").s().p("AhlBGQgFAAgEgFQgDgDgBgFIAAhxQABgFADgEQAEgEAFAAIDLAAQAFAAADAEQAFAEAAAFIAABxQAAAFgFADQgDAFgFAAg");
	this.shape_9.setTransform(36.4,7);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.instance_7,this.shape_5,this.instance_6,this.shape_4,this.shape_3,this.shape_2,this.instance_5,this.shape_1,this.shape,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.7,109);


(lib.BG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_33();
	this.instance.setTransform(-0.5,349.5,1,1,0,0,0,547.5,49.5);
	this.instance.alpha = 0.66;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F4A42").s().p("EhVhAIcIAAw2MCrDAAAIAAQ2g");
	this.shape.setTransform(-0.6,345);

	this.instance_1 = new lib.Path_2_1();
	this.instance_1.setTransform(-444.9,-239.5,1,1,0,0,0,267.2,82);
	this.instance_1.alpha = 0.25;

	this.instance_2 = new lib.Path_3_3();
	this.instance_2.setTransform(-139.8,-46.7,1,1,0,0,0,156.9,34.1);
	this.instance_2.alpha = 0.34;

	this.instance_3 = new lib.Path_4_3();
	this.instance_3.setTransform(286.4,-195.4,1,1,0,0,0,156.9,17.4);
	this.instance_3.alpha = 0.34;

	this.instance_4 = new lib.Path_5_2();
	this.instance_4.setTransform(403.9,145.8,1,1,0,0,0,144.3,154.2);
	this.instance_4.alpha = 0.559;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(79,74,66,0)","rgba(90,83,74,0.365)","rgba(100,93,82,0.714)","rgba(107,100,87,0.925)","#6D6659"],[0,0.216,0.486,0.753,1],0,-200.9,0,201.1).s().p("EgglAfGQgFhAgDhTQgFikANhXQALhTCtgkQAvgLBjgQQBVgQArgTQBagnBZifQAjg+BVjBQAUgvAngYQAegUA5gOIBygaQBLgUA/gfQBHgjASgtQAPgngWg8QgMghgyhgQg1hkgbhGQg7iaBIhpQASgcAngqQAeglAAgeQAAg+BbgVQAXgFBNgMQBKgLAwgMQB6gdADglQADgihTgLQgjgFgIglQgHghASgtQASgtAighQAlgkArgFQBagKAngkQAogkgeguQgcgsA9hEQA2g9BxhEQBMgvDVglICEgYQA3gMAAgMQAAgoAZiHQAcibAag1QAbg2BOgPQAvgJCTAAQBkAADlAYQByANBfAMIA5gxQBBhAAlhKQAmhKBKgBQArAABUARQAzACAxhEQAegpBFh3QAyhMBQAeQAoAQAdAeMgATA99g");
	this.shape_1.setTransform(339.2,99);

	this.instance_5 = new lib.Group();
	this.instance_5.setTransform(-415.6,115.6,1,1,0,0,0,132.4,217.5);
	this.instance_5.alpha = 0.488;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(79,74,66,0)","rgba(90,83,74,0.365)","rgba(100,93,82,0.714)","rgba(107,100,87,0.925)","#6D6659"],[0,0.216,0.486,0.753,1],0,-264.4,0,264.6).s().p("EgdqgpUQCtAqCwA0QFgBpANAzQAGAagKArQgFAZgPAzQgXBcAtAXQAaANAlgGQAVgDArgLQBNgPAiBCQAuBYBFA0QBGA2BKAAQAaABA2gKQA5gJAZgBQBcgDAZBVQATBEBBA9QAcAbALAQQAQAaAAAjQAAAggXAvIglBNQgRAqAKAbQAMAhA3AWQC2BIAMAGQBNApAaBAQAjBYAeB9QAiCUAABoQAAD3CMCmQA9BJBvELQA5CMBFC2QAOAfgCArQgBAXgLBCQgVCMAVBqQAaCDA5B6QAbA8BGB5QASAfBAAwIB/BfQCtCPAkC1QArDYBhCJQBWB7BxAnQAqAOA5gCQAegBA0gEQAoABATAWQAXAcAEBFQAHB2BFA0QARAMAbAPQAQALgFAMQgKAY9lAKQu0AFuxAAg");
	this.shape_2.setTransform(-358.1,35.5);

	this.instance_6 = new lib.Path_8_1();
	this.instance_6.setTransform(-57.7,220.2,1,1,0,0,0,276.8,125.8);
	this.instance_6.alpha = 0.5;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8FC860","#27ACA0"],[0,1],0,345,0,-344.9).s().p("EhVcA16MAAAhryMCq5AAAMAAABryg");
	this.shape_3.setTransform(-0.1,-53.9);

	this.addChild(this.shape_3,this.instance_6,this.shape_2,this.instance_5,this.shape_1,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-548.7,-398.9,1097.5,798);


(lib.GBot = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Head();
	this.instance.setTransform(-55.2,-118.9,1,1,0,0,0,53,69.3);

	this.instance_1 = new lib.Body();
	this.instance_1.setTransform(-53.8,0.9,1,1,0,0,0,35.3,54.5);

	this.instance_2 = new lib.RightArm();
	this.instance_2.setTransform(-105.2,33,1,1,0,0,0,26.4,74.2);

	this.instance_3 = new lib.LeftArm();
	this.instance_3.setTransform(50.9,-32.5,1,1,0,0,0,80.8,17);

	this.instance_4 = new lib.LeftLeg();
	this.instance_4.setTransform(-77.5,114.8,1,1,0,0,0,19.7,73.5);

	this.instance_5 = new lib.RightLeg();
	this.instance_5.setTransform(-28,114.8,1,1,0,0,0,19.2,73.5);

	this.addChild(this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-131.7,-188.2,263.5,376.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
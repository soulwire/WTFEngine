/*
 * WTF Engine
 * https://github.com/soulwire/WTFEngine
 *
 * Copyright 2011, Justin Windle
 * http://blog.soulwire.co.uk/
 * Code Licensed under the MIT licence.
 * https://github.com/soulwire/WTFEngine/blob/master/MIT-LICENSE.txt
 *
 * Concept based on WTFSIMFD
 * http://whatthefuckshouldimakefordinner.com/
 * by Zach Golden
 * http://www.zachgolden.com/
 *
 */

// variables

var dom = {};
var regex = /./;
var vowel = /\b(a)\b(\s+)?(((<[^>]+>)\s?)+)?(\s+)?([aeiou]|hou)/gim;

// init

function initialise() {

	dom.generate.click(function(){
	
		update();
		return false;
	});
	
	regex = generateRegExp();
	update();
}

// update

function update() {

	dom.output.html(generateIdea());
	dom.output.hide();
	dom.output.fadeIn(500);
	
	setGenerateLabel();
}

// build regex from corpus

function generateRegExp() {

	var str = '';
	var arr = [];
	var tmp = "@(types)";
	
	for(type in corpus) {
		arr.push(type);
	}
	
	var exp = tmp.replace("types", arr.join('|'));
	
	return new RegExp(exp, "ig");
}

// generate idea

function generateIdea() {
	
	var type;
	var match;
	var index;
	var intro;
	var output;
	
	var template = templates[(Math.random() * templates.length) | 0];
	
	var data = {};
	
	for(var prop in corpus) {
		data[prop] = corpus[prop].concat();
	}
	
	var result = regex.exec(template);
	
	while(result) {
	
		type = result[1];
		match = result[0];
		
		index = (Math.random() * data[type].length) | 0;
		template = template.replace(match, data[type].splice(index, 1)[0]);
		
		regex.lastIndex = 0;
		result = regex.exec(template);
	}
	
	var intro = phrases[(Math.random() * phrases.length) | 0];
	
	output = "<dl>";
	output += "<dt>" + intro + "</dt>";
	output += "<dd>" + template + "</dd>";
	output += "</dl>";
	
	return correctGrammar(output);
}

// correct grammar

function correctGrammar(input) {

	// change 'a' to 'an' when before a vowel (I know this is not not always true!)
	input = input.replace(vowel, "$1n$2$3$6$7");

	return input;
}

// set label

function setGenerateLabel() {

	var label = labels[(Math.random() * labels.length) | 0];
	dom.generate.text(label);
	
}

// ready

$(document).ready(function(){

	dom.output = $("#output");
	dom.generate = $("#generate");
	
	if(corpus) {
		initialise();
	} else {
		//console.log("corpus not found");
	}
	
});
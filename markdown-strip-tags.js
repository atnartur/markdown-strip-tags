/**
 * Copyright 2016 Artur Atnagulov (atnartur). All rights reserved.
 * License: MIT
*/

(function(g){
	var symbols = ["_", "*"];

	function markdown_strip_tags(text){
		symbols.forEach(function(symbol){
			text = text.replace(new RegExp('[#'+symbol+']', 'g'), "\\" + symbol);
		});

		return text;
	}

	g.markdown_strip_tags = markdown_strip_tags;

	if(typeof module !== 'undefined' && typeof module.exports !== 'undefined')
		module.exports = markdown_strip_tags;
})(this)

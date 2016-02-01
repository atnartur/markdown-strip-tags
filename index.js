/**
 * Created by ClienDDev team (clienddev.ru)
 * Developer: Artur Atnagulov (atnartur)
*/

var symbols = ["_", "*"];

module.exports = function (text){
	symbols.forEach(function(symbol){
		text = text.replace(new RegExp('[#'+symbol+']', 'g'), "\\" + symbol);
	});

	return text;
}
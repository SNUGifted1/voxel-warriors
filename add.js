
var NodeRect;
var Node;
var Aws;
var Express;
var Geoip;
var Hypertextmin;
var Mime;
var Multer;
var Mustache;
var Phantom;
var Postgres;
var Recaptcha;
var Socket;
var Xml;
var Server;
var Human;
var THREE;

module.exports.onLoad = function(nodeRect, server, human, three){
	NodeRect = nodeRect;
	Node = NodeRect.Node;
	Aws = NodeRect.Aws;
	Express = NodeRect.Express;
	Geoip = NodeRect.Geoip;
	Hypertextmin = NodeRect.Hypertextmin;
	Mime = NodeRect.Mime;
	Multer = NodeRect.Multer;
	Mustache = NodeRect.Mustache;
	Phantom = NodeRect.Phantom;
	Postgres = NodeRect.Postgres;
	Recaptcha = NodeRect.Recaptcha;
	Socket = NodeRect.Socket;
	Xml = NodeRect.Xml;
    Server = server;
    Human = human;
	/*SPLIT*/
	if (typeof onPlayerLogin === 'undefined') var onPlayerLogin = undefined ;
	module.exports.onPlayerLogin = onPlayerLogin;
	if (typeof onPlayerChat === 'undefined') var onPlayerChat = undefined ;
	module.exports.onPlayerChat = onPlayerChat ;
	if (typeof onPlayerQuit === 'undefined') var onPlayerQuit = undefined ;
	module.exports.onPlayerQuit = onPlayerQuit ;
	if (typeof onPlayerHit === 'undefined') var onPlayerHit = undefined ;
	module.exports.onPlayerHit = onPlayerHit ;
	if (typeof onPlayerDeath === 'undefined') var onPlayerDeath = undefined ;
	module.exports.onPlayerDeath = onPlayerDeath ;
	if (typeof onBlockPlace === 'undefined') var onBlockPlace = undefined ;
	module.exports.onBlockPlace = onBlockPlace ;
	if (typeof onBlockBreak === 'undefined') var onBlockBreak = undefined ;
	module.exports.onBlockBreak = onBlockBreak ;
	if (typeof onServerTick === 'undefined') var onServerTick = undefined ;
	module.exports.onServerTick = onServerTick ;
	if (typeof onConsoleCommand === 'undefined') var onConsoleCommand = undefined ;
	module.exports.onConsoleCommand = onConsoleCommand ;
}

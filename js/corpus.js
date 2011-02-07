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
 
var templates = [
	"@language @technique framework that integrates with @social, built using the @pattern pattern",
	"@language library for @social (ported from @language)",
	"@social utility running on @os for the @api API",
	"lightweight @format for converting @language @formats to @formats",
	"lightweight @format for converting @language @formats to @formats - @os only",
	"@adjective, @language based @api API explorer with a @technique front-end",
	"@language based platform for rapidly developing @formats based on @api data",
	"@language powered @social @format with @api integration for @os",
	"@adjective tool for converting @language based @formats to @formats",
	"@adjective @technique @format powered by the @api API",
	"@adjective server-side @social aggregator for @platform",
	"@adjective @technique @format powered by the @api API and @api",
	"@os optimised @api configurator for @adjective @verb",
	"@os optimised @api configurator for @adjective, @adjective @verb",
	"@language interpreter for creating @adjective @verb experiences in @language",
	"@technique @format that integrates @social and @social feeds (via @api)",
	"@adjective @platform @format for @verb and @verb with @social data",
	"@technique @verb platform for @language, @language and @language",
	"platform for building @adjective, @adjective @formats for @platform enabled devices",
	"@language based @social and @social mashup, designed for @adjective @verb",
	"@language @pattern micro framework, optimised for generating @formats for @social users",
	"@os specific @platform application to enable @social and @social users to leverage the @api API for @verb",
	"@language based @format to replace @formats and hook into @api via @api and @api",
	"@adjective, @adjective @social @verb utility powered by @social and the @api @language API",
	"@format that generates poetry for @social users based on @api data",
	"@format that generates poetry based on @api data",
	"@language wrapper for @adjective @language @formats that utilises the @pattern pattern",
	"@api powered @os emulator for @formats"
];

var phrases = [
	"Get your coding shoes on and build a fucking",
	"Don't need no UML diagram, just get cracking on a fucking",
	"Get your shit together and get going with a fucking",
	"This shit will be trending on Twitter - a fucking",
	"Dinner is for the kind of chumps who couldn't build a fucking",
	"Make some coffee; you're building a fucking",
	"Get your fucking CPU crunching on a"
];

var labels = [
	"I've already fucking made that",
	"That breaches a load of fucking copyrights",
	"No one will fucking use that",
	"That's not going to fucking work",
	"Does not fucking compute"
];

/*
	Auto Generated from WTF.csv
*/

corpus = {};

corpus.language		 = ["Actionscript","Ajax","AS3","Boo","C","C#","C++","Delphi","Fortran","Haxe","HTML5","Java","JavaScript","Lingo","Lisp","Objective C","Pascal","Perl","PHP","Python","Ruby","Scala","Scheme","Visual BASIC"];
corpus.platform		 = ["Adobe AIR","Arduino","Cinder","Flash","MATLAB","Open Frameworks","Processing"];
corpus.api			 = ["Audio Scrobbler","Bing Maps","Blogger","Blogmarks","Delicious","Dictionary.com","Digg","Facebook","Feedburner","Flickr","Geocoder","GitHub","GMail","Google Analytics","Google App Engine","Google Blog Search","Google Books","Google Calendar","Google Code Search","Google Documents","Google Earth","Google Gears","Google Geocoding","Google Image Search","Google Language","Google Maps","Google Search","iTunes","Last.FM","LinkedIn","MediaWiki","NewsCloud","Snipplr","SoundCloud","Spotify","Twitter","vi.sualize.us","Vimeo","Weather.com","Wikipedia","Windows Live","Wink","Wordnik","Wordpress","Yahoo Answers","Yahoo Buzz","Yahoo Meme","Yahoo Music","Yahoo Pipes","Yahoo Shopping","Yahoo Weather","Yelp","YouTube"];
corpus.os			 = ["Amiga","Android","Debian","Fedora","Google Chrome OS","iOS","Linux","Mac OSX","PS3 OS","Ubuntu","Windows"];
corpus.pattern		 = ["Abstract Factory","Builder","Composite","Decorator","Factory Method","Multiton","MVC","Prototype","Proxy","Singleton"];
corpus.social		 = ["Bebo","Blogmarks","Clipmarks","DailyBooth","Del.icio.us","Digg","Diigo","eBay","Facebook","Flickr","Foursquare","Furl","GitHub","Google Buzz","Google Buzz","Hyves","Last.FM","LinkedIn","LiveJournal","Myspace","Newsvine","Posterous","Reddit","Shelfari","Slashdot","SoundCloud","Spotify","StumbleUpon","Technorati","Tumblr","Twitter","vi.sualize.us","Vimeo","Wink","Wordpress","Yahoo Buzz","YouTube"];
corpus.format		 = ["aggregator","AIR application","Android application","art installation","Blackberry application","bookmarklet","Chrome extension","dashboard widget","data visualisation","digital toy","experiment","Facebook application","Firefox plugin","Flash game","Google gadget","HTML5 game","installation","iPad application","iPhone application","kiosk","mashup","microsite","multiplayer game","music visualisation","physical installation","plugin","podcast","portal","prototype","robot","social game","visualisation","web application","web crawler","website"];
corpus.technique	 = ["3D","face detecting","face tracking","feature detecting","gesture tracking","hand tracking","Kinect","Kinect hack","motion tracking","phishing","projection mapping","QR"];
corpus.adjective	 = ["3D","audio reactive","collaborative","compressed","cross-platform","crowdsourced","distributed","dynamic","generative","gesture controlled","integrated","lightweight","locally executing","memcached","monetised","motion controlled","multi-touch","multicore","open source","optimised","plug & play","scalable","social","ubiquitous","viral","virtual","Wii controlled"];
corpus.verb			 = ["blogging","browsing","chatting","file sharing","gaming","hacking","microblogging","sharing","shopping","syncing"];

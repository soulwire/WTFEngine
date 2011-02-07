WTF Engine
===

__WTF Engine__ is an HTML / CSS / JavaScript template for generating [WTFSIMFD](http://whatthefuckshouldimakefordinner.com/) style websites, originally written for [What The Fuck Is My Mashup?](http://whatthefuckismymashup.com/) and inspired by the infamous [What The Fuck Should I Make For Dinner?](http://whatthefuckshouldimakefordinner.com/) by [Zach Golden](http://www.zachgolden.com/)

This was written simply as a bit of fun. Zach's site was so popular that it inspired references based on other subjects, such as [What The Fuck Is My Social Media Strategy?](whatthefuckismysocialmediastrategy.com) (and consequently [What The Fuck Is My Mashup?](http://whatthefuckismymashup.com/)). As far as I am aware, this idea was Zach's alone and so credit to him for the inspiration. As a meme, there are doubtlessly many topics that could do with the WTF treatment; which is why I decided to create this (very) simple platform.

How to use it
-----

The process is very simple. WTF Engine takes a sentence template and fills in different types of blanks with different types of words, much like the game [Mad Libs](http://en.wikipedia.org/wiki/Mad_Libs). You can nominate any amount of templates and as many different categories of words or phrases as you like.

For example, here is a basic implementation

	var templates = ["A @colour @animal"];
	var corpus = {
		colour: ["red", "green", "blue"],
		animal: ["cat", "dog", "rabbit"]
	};
	
As you can see, you use the __@__ symbol, followed by the type of word from the [corpus](https://github.com/soulwire/WTFEngine/blob/master/js/corpus.js) you wish to use to tell the WTF Engine to pick a random word of that type from the corpus and insert it at that point.

__Note__: You can make words plural, present continuous tense (etc) by writing, for example; __@object__s or __@object__ing without having to create separate lists in the corpus.

Grammar
-----

WTF Engine currently performs some very basic grammatical checks, such as when to use '_an_' as opposed to '_a_' (even this is not failsafe as this grammar is based on phonetics and not simply whether the following word starts with a vowel). These grammatical checks may become slightly more sophisticated in the future, however it's recommended that you design your templates and corpus around these limitations for now.

Building a Corpus
-----

You can easily use [Google Spreadsheets](https://spreadsheets.google.com) to maintain the corpus you're using. Simply create a spreadsheet where each column is a set of words belonging to a particular type (for example nouns, verbs or place names) and ensure that the first row contains the identification of that type, for example:

![Example Google Spreadsheet](https://github.com/soulwire/WTFEngine/raw/master/lib/spreadsheet-example.jpg)

You can then download the spreadsheet at any time in [CSV format](http://en.wikipedia.org/wiki/Comma-separated_values) (_File > Download as > CSV_) and run it through the [parser](https://github.com/soulwire/WTFEngine/raw/master/lib/parser.swf) which will copy JavaScript code to your clipboard. Simply paste this into [corpus](https://github.com/soulwire/WTFEngine/blob/master/js/corpus.js) and you're ready to roll.
# WTF Engine

Inspired by [WhatTheFuckShouldIMakeForDinner.com](http://whatthefuckshouldimakefordinner.com/), in 2011 I made [WhatTheFuckIsMyMashup.com](http://whatthefuckismymashup.com/) and released this simple tool, the [WTFEngine](https://github.com/soulwire/WTFEngine/), for generating similar websites.

It's very simple to use and now allows you to populate it using either vanilla JavaScript objects, JSON files or direct feeds from Google spreadsheets.

## How to use it

To make your own, simply [clone](github-mac://openRepo/https://github.com/soulwire/WTFEngine) or [download](https://github.com/soulwire/WTFEngine/archive/master.zip) this repository and start populating the engine with your content.

You can populate it using one of three different methods. Each is controlled from [`main.js`](https://github.com/soulwire/WTFEngine/blob/master/scripts/main.js) (where you will find commented examples of each technique.)

1. JavaScript Object literal
2. A JSON file
3. A live feed from a Google spreadsheet

If you choose to use a Google spreadsheet, you must [publish it first](https://support.google.com/drive/answer/37579?hl=en) and be sure to manually republish it after editing if you want changes to propagate immediately, otherwise they will take around 15 minutes.

Here's an [example spreadsheet](https://docs.google.com/a/soulwire.co.uk/spreadsheet/ccc?key=0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc), which you can clone and use a base for your data source.

_**Note**: For local testing (when using loaded JSON or Google spreadsheet data), you'll need to serve the site from a local webserver. You can easily do this using tools like [SimpleHTTPServer](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python) for Python or [http-server](https://github.com/nodeapps/http-server) for Node._

## How it works

The process is very simple. The WTF Engine takes a sentence template and fills in different types of blanks with different types of words, much like the game [Mad Libs](http://en.wikipedia.org/wiki/Mad_Libs). You can nominate any amount of templates and as many different categories of words or phrases as you like.

For example, here is a basic corpus

    {
        template: [ "Big @color @animal", "Silly @animal with @color fur" ],
        animal: [ "dog", "cat", "rabbit" ],
        color: [ "red", "blue", "green", "yellow" ]
    };
    
As you can see, in a template you use the __@__ symbol, followed by the type of word you wish to use to tell the WTF Engine to pick a random word of that type from the corpus and insert it at that point.

## Showcase

I've been pleasantly surprised to find several people using this template to create their own sites. Among them are:

- [WTF is my bot](http://wtfismybot.tech/)
- [WTF is my startup idea? ](http://whatthefuckismystartup.tech)
- [Shit UX Ideas](http://shituxideas.com/)
- [Nordic Larp Generator](http://www.messagefromtheinternet.com/nordiclarp/)
- [WTF Are My Weekend Plans](http://www.wtfplans.com/)
- [What The Fuck Is My Hydration Strategy](http://theplan.co.uk/hydration/)
- [What The Fuck Is Birmingham's Transport Strategy](http://toys.paradisecircus.com/transport/)
- [What's your fucking weapon](http://scottyboy76567.github.io/WeaponGenerator/)
- [Who the Fuck is my Superhero Character](http://vanor.co.il/heroes/)
- [What the Fuck is my Quest](http://whatthefuckismyquest.com/)
- [What the Fuck is this Japanese Food](http://whatthefuckisthisjapanesefood.com/)
- [What is my Pony](http://whoismypony.ponyfinder.net/)
- [Game of Thrones spoiler generator](http://takephive.com/got_spoilergen/)
- [Who the Fuck is my D&D Character](http://whothefuckismydndcharacter.com/)
- [RPG Focused Character Idea Generator](http://enklave-23.de/WTF/)
- [Startup Pitch Generator](http://startuppitchperfect.sebastianruder.com/)
- [DevOps Vision generator](http://www.percussiverepair.net/devopsvision/)
- [What the Fuck am I Bringing to Burning Man](http://whatthefuckamibringingtoburningman.com/)
- [Insult Generator](http://www.omglmaowtf.com/insult-generator)
- [MasterChef Me](http://www.masterchef.me)
- [Bieber Blotter](http://www.linkalope.com/bieber-blotter)
- [What the Fuck is my Wearable Strategy](http://whatthefuckismywearablestrategy.com/)
- [What the Fuck is my Next TV Format](http://www.whatthefuckismynexttvformat.com/)
- [What the Fuck is my Twitter Bio](http://whatthefuckismytwitterbio.com/)
- [What the Fuck is my Award Idea](http://whatthefuckismyawardidea.com/)
- [What is my SEO Doing](http://www.clicksandclients.com/what-is-my-seo-doing/)
- [Fucking Valentines](http://fuckingvalentines.com/)
- [Tony Abbott Excuse](http://abbottexcuse.1apps.com/)
- [Why the Fuck are you Running Late](http://www.whythefuckareyourunninglate.com/)
- [What the Fuck is my Brief](http://www.whatthefuckismybrief.com/)
- [Whip-o-matic](http://whipomatic.com/)
- [What the Fuck is my SXSW Panel](http://wtfismypanel.com/)
- [Pitchfork Review Generator](http://pitchforkreviewgenerator.com/)
- [Shit PR Ideas](http://shitprideas.com/)
- [What the Fuck is my Mashup](http://whatthefuckismymashup.com/)

If you have made one, or know of any, please [let me know](https://github.com/soulwire/WTFEngine/issues/new).

## Notes

This was written simply as a bit of fun. Zach's site was so popular that it inspired references based on other subjects, such as [What The Fuck Is My Social Media Strategy?](http://whatthefuckismysocialmediastrategy.com) (and consequently [What The Fuck Is My Mashup?](http://whatthefuckismymashup.com/)). As far as I am aware, this idea was Zach's alone and so credit to him for the inspiration. As a meme, there are doubtlessly many topics that could do with the WTF treatment; which is why I decided to create this (very) simple platform.


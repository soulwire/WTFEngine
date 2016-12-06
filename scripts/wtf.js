
var WTF = (function() {

    'use strict';

    /*
      ------------------------------------------------------------

        Constants & variables

      ------------------------------------------------------------
    */

    var RE_QUOTE = /\"([^\"]+)\"/gi;
    var RE_JSON = /\.json$/i;
    var RE_COL = /^gsx\$(.+)$/i;
    var RE_KEY = /[a-z0-9_-]{32,}/i;
    var DOCS_PATH = "https://spreadsheets.google.com/feeds/list/{key}/od6/public/values?alt=json";


    var templates;
    var responses;
    var headings;
    var corpus;
    var regex;
    var dom;

    /*
      ------------------------------------------------------------

        Called once initialisation as finished

      ------------------------------------------------------------
    */

    function start() {
        
        // Copy out templates then remove from corpus

        templates = corpus.template;
        responses = corpus.response;
        headings = corpus.heading;

        delete corpus.template;
        delete corpus.response;
        delete corpus.heading;

        // Enable UI and generate first idea

        initUI();
        buildRexExp();
        generate();
        $('#templates').html(templates.length + ' template' + (templates.length == 1 ? '' : 's'))
        $('#outcomes').html(getTotalNumOptions().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }

    function getTotalNumOptions() {
        var num = 0
        for(var i = 0; i < templates.length; i++) {
            num += getNumTemplateOptions(templates[i])
        }
        return num
    }

    function getNumTemplateOptions( template ) {
        var type, iter = 0, // Safety mechanism
            item = regex.exec( template ),
            copy = cloneCorpus();

        var num = 0
        while ( item && ++iter < 1000 ) {
            type = item[ 0 ].substr(1);
            var typeNum = corpus[type].length
            if(num == 0) {
                num = corpus[type].length
            }
            else {
                num = num * corpus[type].length
            }
            item = regex.exec( template );
        }
        return num
    }

    /*
      ------------------------------------------------------------

        Converts CSV to a regular corpus object
        @see sample.json

      ------------------------------------------------------------
    */

    function parseCSV( csv ) {

        var i, j, k, n, m, cols, keys = {}, data = {}, rows = csv.split( '\n' );

        for ( i = 0, n = rows.length; i < n; i++, j = i - 1 ) {

            cols = rows[ i ].replace( RE_QUOTE, escape ).split( ',' );

            for ( k = 0, m = cols.length; k < m; k++ ) {

                if ( i === 0 ) {

                    data[ keys[ k ] = cols[ k ].toLowerCase() ] = [];

                } else if ( cols[ k ] ) {

                    data[ keys[ k ] ][ j ] = unescape( cols[ k ] ).replace( /^\"|\"$/g, '' );
                }
            }
        }

        return data;
    }

    /*
      ------------------------------------------------------------

        Converts JSON data to a regular corpus object
        @see sample.json

      ------------------------------------------------------------
    */

    function parseJSON( json ) {

        var i, n, key, val, map = {}, keys = {}, data = {}, rows = json.feed.entry;

        for ( key in rows[0] ) {
            
            if ( RE_COL.test( key ) ) {
                
                map[ key ] = key.match( RE_COL )[ 1 ].toLowerCase();
                keys[ key ] = [];
            }
        }

        for ( key in keys ) {
            
            data[ map[ key ] ] = keys[ key ];

            for ( i = 0, n = rows.length; i < n; i++ ) {

                val = rows[ i ][ key ].$t;

                if ( val && val.length ) {

                    keys[ key ].push( val );
                }
            }
        }

        return data;
    }

    /*
      ------------------------------------------------------------

        Binds event handlers to control the interface

      ------------------------------------------------------------
    */

    function initUI() {

        $( '.loading' ).remove();

        dom = {
            generate: $( '#generate' ),
            output: $( '#output' )
        };

        dom.generate.click( function() {
            generate();
            return false;
        });
    }

    /*
      ------------------------------------------------------------

        Builds a regular expression for all types in the corpus

      ------------------------------------------------------------
    */

    function buildRexExp() {

        var types = [];

        for ( var type in corpus )

            types.push( type );

        types = types.sort(function (a, b) {
            if (a.length == b.length) {
                return 0
            }
            return a.length > b.length ? -1 : 1
        })
        
        var content = '@(type)'.replace( 'type', types.join( '|' ) );

        regex = new RegExp( content, 'gi' );
    }

    /*
      ------------------------------------------------------------

        Generates ideas based on the corpus

      ------------------------------------------------------------
    */

    function generate() {

        var type, text, part, iter = 0, // Safety mechanism
            idea = randomItem( templates ),
            item = regex.exec( idea ),
            copy = cloneCorpus();

        while ( item && ++iter < 1000 ) {

            type = item[ 0 ];
            text = item[ 1 ];

            part = randomItem( copy[ text ], true );
            idea = idea.replace( type, part );

            regex.lastIndex = 0;
            item = regex.exec( idea );
        }

        // Update output

        dom.generate.text( randomItem( responses ) );
        dom.output.html(
            '<dl>' +
                '<dt>' + randomItem( headings ) + '</dt>' +
                '<dd>' + idea + '</dd>' +
            '</dl>'
        );

        // Toggle animation

        setTimeout( showOutput, 0 );
        hideOutput();
    }

    function hideOutput() {

        dom.output.removeClass( 'animate' ).css( 'opacity', 0 );
    }

    function showOutput() {

        dom.output.addClass( 'animate' ).css( 'opacity', 1 );
    }

    function randomItem( list, remove ) {

        var index = ~~( Math.random() * list.length );
        var item = list[ index ];

        if ( remove )

            list.splice( index, 1 );

        return item;
    }

    function cloneCorpus() {

        var copy = {};

        for ( var key in corpus )

            copy[ key ] = corpus[ key ].concat();
        
        return copy;
    }

    /*
      ------------------------------------------------------------

        Public API

      ------------------------------------------------------------
    */

    return {

        /*

            Expects one of the following:

                1.  An object with `templates` and any amount of keys for word types, for example:
        
                    {
                        templates: [ 'The @color @animal', 'The @animal was @color' ],
                        animal: [ 'dog', 'cat', 'rabbit' ],
                        color: [ 'red', 'green', 'blue' ],
                    }

                2.  A path to a JSON file with the same structure as above (see `sample.json`)

                3.  A Google spreadsheet key (e.g 0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc)
                    You must first publish the spreadsheet as a CSV 
                    @see https://support.google.com/drive/answer/37579?hl=en

        */

        init: function( data ) {

            if ( !data ) throw data + ' is not a valid corpus';

            if ( typeof data === 'string' ) {

                if ( RE_JSON.test( data ) ) {

                    // JSON

                    $.ajax({
                        url: data,
                        dataType: 'json',
                        success: function( data, status, xhr ) {
                            corpus = data;
                            start();
                        },
                        error: function( xhr, errorType, error ) {
                            throw 'Cannot load JSON data: ' + error;
                        }
                    });

                } else if ( RE_KEY.test( data ) ) {

                    // JSON

                    $.ajax({
                        url: DOCS_PATH.replace( '{key}', data ),
                        success: function( data, status, xhr ) {
                            corpus = parseJSON( data );
                            start();
                        },
                        error: function( xhr, errorType, error ) {
                            throw 'Cannot load spreadsheet. Is it published? (@see https://support.google.com/drive/answer/37579?hl=en)';
                        }
                    });

                } else {

                    throw 'Unrecognised data format: ' + data;
                }

            } else if ( typeof data === 'object' ) {

                // Object

                corpus = data;
                start();
            }
        },

        // Expose certain methods

        generate: generate
    };

})();

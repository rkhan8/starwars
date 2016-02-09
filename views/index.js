'use strict';

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];

var rand = Math.floor((Math.random() * quotes.length));
var quotee = quotes[rand].quote;

function QuoteFunction()
{
  ReactDOM.render(
    React.createElement('h1', null, quotee),
    document.getElementById('example1')
  );
}


function CharacterFunction()
{
  ReactDOM.render(
    React.createElement('h1', null, quotes[rand].author +": "+quotes[rand].quote),
    document.getElementById('example2')
  );
}

function RandomFunction()
{
  /*
  function CreeTableau()
  {
  	this.length = CreeTableau.arguments.length;
  	for (var i = 0; i < this.length; i++)
    {
      this[i+1] = CreeTableau.arguments[i];
    }
	}

  var element = quotes[quotes.length].author;

  var tableau = new CreeTableau(for (var i =0 ; i< quotes[quotes.length].author; i++)
  {
    var tableau = new CreeTableau(quotes[i].author);


    );
  });
  */

  /*
  var autoor = " ";

  for(var i = 0; i< quotes.length; i++)
  {
    //if(quotes[i].author != quotes[i].author)
    {
      var autoor = quotes[i].author;
      ReactDOM.render(
        React.createElement('h1', null, autoor),
        document.getElementById('example3')
      );
    }
    */

    var autoor = quotes.map(function(content, index){

      return content.author;

    });

    console.log(autoor);




  }






  /*
  var Cible = new CreeTableau("",
  "plongee.html",
  "nucleaire.html",
  "bonheur.html",
  "web.html",
  "dk.htm",
  "liens.htm");
  */

  /*
  function AllerA(form)
  {
  	i = form.SelectMenu.selectedIndex;
  	if (i == 0) return;
  	parent.location.href = CibleURL[i+1];
  }
  */
}

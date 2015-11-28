"use strict";

$('#smash-board').on('click', '.shell', function(){
  $(this).remove();
});

$(function(){

  let board = $('#smash-board');

  setInterval(() => {
    setInterval(() => {
      let shellCount = $('.shell').length;
      console.log(shellCount, 'Shells!');
      if(shellCount >= 100){
        board.empty();
        board.append($('<h1>').text('You lost. What else?'));
      }
      let shell = new Shell();
      board.append(shell.$el);
    }, 3000);
  }, 5000)


  let taunts = [
    'Here they come...',
    'Too easy?',
    'I can add more... NBD',
    'Still too easy?',
    'I\'ll add some more',
    'Remember... need to make sure there are less than 100!',
    'Isn\'t it annoying how thin some of them are?!',
    'Some seem to fly off the screen?!?!  Isn\'t that annoying!',
    'Am I distracting you?',
    'Are these messages DISTRACTING?!?!?!',
    'Get it?',
    'There are SOOO many more coming!!!',
    'Am I distracting you?',
    'Oh wait... you missed one over there ->',
    'Hahaha!!! You click all day long... is that the best you can do?',
    'Keep going... You\'ll lose soon enough.',
  ].reverse();

  setInterval(() => {
    $('#taunt').text(taunts.pop());
  }, 6000);



});


describe("Player", function(){
  var Player = require('Player');
  var Song = require('Song');

  var player;
  var song;

  beforeEach(function(){
    //initialize new objects to be tested EVERY TEST from start
    player = new Player();
    song = new Song();
  })
  //one test
  it("should be able to play a song", function(){
    player.play(song);// cb function
    expect(player.currentPlayingSong).toEqual(song); //it works with matcher
    //custom matcher
    expect(player).toBePlaying(song);
  });

  //nested describe
  describe("when song has been paused", function(){
    //nested beforeEach
    beforeEach(function(){
      //initialize new objects to be tested EVERY TEST from start
      player.play(song);
      player.pause();
    });

    //1st test
    it("should indicate that song is currently paused", function(){
        expect(player.isPlaying).toBeFalsy();
        //custom matcher with NOT
        expect(player).not.toBePlaying(song);
    });

    //2nd test
    it("shouldbe possible to resume", function(){
        player.resume();
        expect(player.isPlaying).toBeTruthy();
        expect(player.currentPlayingSong).toEqual(song);
    });
  });
  //end describe
});


//every inner test gets tests from outer test

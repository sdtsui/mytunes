// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on("add", function (){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on("ended", function(){
      this.shift();
      if (this.length > 0){
        this.playFirst();
      };
    }, this);

    this.on("dequeue", function(song){
      this.remove(song);
    }, this);
  }
  //array of songs pushed to songqueue

});

SongQueue.prototype.playFirst = function (){
  //trigger some event that AppModel will be looking for
  this.at(0).play();
};

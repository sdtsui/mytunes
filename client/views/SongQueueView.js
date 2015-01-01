// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "queueTable",

  initialize: function() {
    this.collection.on('change', function(){
      console.log("SongQueueView recognizes enqueue call");
      this.render();
    }, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    console.dir(this.collection);
      console.dir("EL:");
      console.dir(this.$el);
      this.$el.html('<th>Queue</th>').append(
        this.collection.map(function(song){
          return new SongQueueEntryView({model: song}).render();
        })
      );
  }
});

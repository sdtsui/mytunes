// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%- artist %>)</td><td><%- title %></td>'),

  render: function(){
    // console.log("Looking for attributes: SQEV");
    // console.dir(this.model);
    return this.$el.html(this.template(this.model.attributes));
  }

});

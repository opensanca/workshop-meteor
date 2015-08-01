Meteor.methods({
  addQuestion: function(text) {
    Questions.insert({
      text: text
    });
  },
  removeQuestion: function(id) {
    Questions.remove({_id: id});
  },
  voteQuestion: function() {
    Questions.update({_id: this._id}, {
      $inc: {
        votes: 1
      }
    });
  },
})

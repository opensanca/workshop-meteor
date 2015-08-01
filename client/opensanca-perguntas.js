Meteor.subscribe("questions");



Template.questions.helpers({

  questions: function () {
    return Questions.find({}, {
      sort: {
        votes: -1
      }
    });
  }
});

Template.questions.events({
  'click button.btnAdd': function () {
    var text = $(".inpText").val();
    Meteor.call("addQuestion", text);
    $(".inpText").val("");
  }
});

Template.question.helpers({
  votes: function() {
    return this.votes || 0;
  }
});

Template.question.events({
  'click button.btnRemove': function() {
    Meteor.call("removeQuestion", this._id);

  },
  'click button.btnVote': function() {
    Meteor.call("voteQuestion", this._id);

  }

});

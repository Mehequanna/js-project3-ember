import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        questionAuthor: this.get('questionAuthor') ? this.get('questionAuthor') : "You forgot something!!",
        questionContent: this.get('questionContent') ? this.get('questionContent') : "You forgot something!!",
        questionNotes: this.get('questionNotes') ? this.get('questionNotes') : "You forgot something!!"
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});

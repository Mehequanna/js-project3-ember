import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       answerAuthor: this.get('answerAuthor') ? this.get('answerAuthor') : "You forgot something!!",
       answerContent: this.get('answerContent') ? this.get('author') : "You forgot something!!",
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});

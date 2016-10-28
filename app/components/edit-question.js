// Linked to question-detail.js

import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    editQuestionForm() {
      this.set('showEditForm', true);
    },
    editQuestion(question) {
      var params = {
        questionAuthor: this.get('questionAuthor'),
        questionContent: this.get('questionContent'),
        questionNotes: this.get('questionNotes')
      };
      this.set('showEditForm', false);
      this.sendAction('editQuestion', question, params);
    }
  }
});

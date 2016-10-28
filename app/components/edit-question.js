import Ember from 'ember';

export default Ember.Component.extend({
  showEditForm: false,
  actions: {
    editQuestionForm() {
      this.set('showEditForm', true);
    },
  }
});

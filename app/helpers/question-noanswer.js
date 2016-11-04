import Ember from 'ember';

export function questionNoanswer(params) {
  var question = params[0];
  if (question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-alert"></span> This question has no answers! Be the first! <span class="glyphicon glyphicon-alert"></span>');
  }
}

export default Ember.Helper.helper(questionNoanswer);

import Ember from 'ember';

export function questionIcons(params) {
  var question = params[0];
  if (question.get('answers').get('length') > 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok"></span> This question has been answered!');
  } else if (question.get('answers').get('length') > 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-question-sign"></span> This question could use more answers!');
  }
}

export default Ember.Helper.helper(questionIcons);

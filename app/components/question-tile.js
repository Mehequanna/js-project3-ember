import Ember from 'ember';

export default Ember.Component.extend({
  totalAnswers: Ember.computed('question.answers', function() {
    return 'Total Answers: ' + this.get('question.answers.length');
  }),
  // I know this uses an uneccesary amount of overhead. This was a test to see if I could successfully nest computed properties.
  questionsFull: Ember.computed('question.questionContent', 'question.questionContent', 'totalAnswers', function() {
    return Ember.String.htmlSafe('<h3>' + this.get('question.questionContent') + '</h3>' +
        '<h4>' + this.get('question.questionAuthor') + '</h4>' +
        '<p>' + this.get('totalAnswers') + '</p>');
  }),
  favoriteList: Ember.inject.service(),

  favoriteClicked: false,

  actions: {
    addToFaves(question) {
      this.get('favoriteList').add(question);
      this.set('favoriteClicked', true);
    }
  }
});

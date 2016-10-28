import DS from 'ember-data';

export default DS.Model.extend({
  questionAuthor: DS.attr(),
  questionContent: DS.attr(),
  questionNotes: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});

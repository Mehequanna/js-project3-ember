import Ember from 'ember';

export default Ember.Service.extend({
  faves: [],

  add(question) {
    this.get('faves').pushObject(question);
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  favoriteList: Ember.inject.service(),

  actions: {
    removeFromFaves(question) {
      this.get('favoriteList').remove(question);
    }
  }
});

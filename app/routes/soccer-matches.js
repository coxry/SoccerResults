import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON("http://worldcup.sfg.io/matches.json");
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }
});

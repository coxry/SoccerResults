import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WorldCupENV.locationType
});

Router.map(function() {
  this.route('soccer-matches');
});

export default Router;

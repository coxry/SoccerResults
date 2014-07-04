import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WorldCupENV.locationType
});

Router.map(function() {
  this.route('matches');
  this.route('current-matches');
  this.route('todays-matches');
});

export default Router;

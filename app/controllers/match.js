import Ember from 'ember';

export default Ember.ObjectController.extend({
  result_code: function() {
    if (this.get('model.winner') === this.get('model.home_team.country')) {
      return 'success';
    } else if (this.get('model.winner') === this.get('model.away_team.country')) {
      return 'danger';
    }
  }.property('model.winner', 'model.home_team.country'),

  match_time: function() {
    return moment(this.get('model.datetime')).tz('America/New_York').fromNow();
  }.property('model.datetime')
});


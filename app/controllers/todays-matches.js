import Ember from 'ember';

export default Ember.Controller.extend({
  itemController: 'match',
  sortProperties: ['match_number'],
  sortAscending: false
});

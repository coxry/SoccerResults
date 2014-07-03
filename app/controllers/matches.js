import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: 'match',
  sortProperties: ['match_number'],
  sortAscending: false
});

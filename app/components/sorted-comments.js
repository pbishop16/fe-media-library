import Ember from 'ember';

export default Ember.Component.extend({
  sortComments: ['created_at:desc'],
  sortedComments: Ember.computed.sort('comments', function(a,b) {
    return new Date(b.created_at) - new Date(a.created_at);
  })
});

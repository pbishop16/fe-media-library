import Ember from 'ember';

export default Ember.Component.extend({
  sortComments: ['createdAt:desc'],
  sortedComments: Ember.computed.sort('comments', function(a,b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  }),
  //Added second sort to ensure sound sorting
  sortedCommentsRefine: Ember.computed.sort('sortedComments', 'sortComments'),

  actions: {
    deleteComment(param) {
      this.sendAction('action', param);
    }
  }

});

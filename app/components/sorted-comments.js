import Ember from 'ember';

export default Ember.Component.extend({
  sortComments: ['created_at:desc'],
  sortedComments: Ember.computed.sort('comments', function(a,b) {
    return new Date(b.created_at) - new Date(a.created_at);
  }),
  //Added second sort to ensure help sorting
  sortedCommentsRefine: Ember.computed.sort('sortedComments', 'sortComments'),

  actions: {
    deleteComment(param) {
      this.sendAction('action', param);
    }
  }

});

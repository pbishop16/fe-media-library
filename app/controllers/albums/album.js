import Ember from 'ember';

export default Ember.Controller.extend({
  newComment: false,
  commentAuthor: '',
  commentMessage: '',
  authorNotValid: Ember.computed.empty('commentAuthor'),
  messageNotValid: Ember.computed.empty('commentMessage'),
  isNotValid: Ember.computed.or('authorNotValid','messageNotValid'),
  actions: {
    deleteComment(comment) {
      if (confirm('Do you want to delete this comment???')) {
        this.get('model.comment_ids').removeObject(comment);
        comment.destroyRecord().then(() => {
          alert('Record removed...');
        }).catch((error) => {
          alert('An error occured: ' + error);
        });
        this.get('model').save();
      }
    }
  }
});

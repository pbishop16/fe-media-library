import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('album', params.album_id);
  },
  actions: {
    createComment() {
      this.controller.toggleProperty('newComment');
    },
    addComment() {
      let comment = this.store.createRecord('comment', {
        author: this.controller.get('commentAuthor'),
        message: this.controller.get('commentMessage'),
        album: this.controller.get('model')
      });
      comment.save();
      this.controller.set('commentAuthor', '');
      this.controller.set('commentMessage', '');
      this.controller.toggleProperty('newComment');
    },
    willTransition(transition) {
      this.controller.set('commentAuthor', '');
      this.controller.set('commentMessage', '');
      this.controller.toggleProperty('newComment');
    }
  }
});

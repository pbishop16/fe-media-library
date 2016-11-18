import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('album', params.album_id);
  },
  setupController(controller) {
    this._super(...arguments);
    controller.set('newComment', false);
  },
  actions: {
    createComment() {
      this.controller.toggleProperty('newComment');
      this.controller.set('commentAuthor', '');
      this.controller.set('commentMessage', '');
    },
    addComment(model) {
      let comment = this.store.createRecord('comment', {
        author: this.controller.get('commentAuthor'),
        message: this.controller.get('commentMessage'),
        album: model
      });
      comment.save().then((comment) => {
        model.get('commentIds').addObject(comment);
        model.save();
      });

      this.controller.set('commentAuthor', '');
      this.controller.set('commentMessage', '');
      this.controller.toggleProperty('newComment');
    },

    willTransition() {
      this.controller.set('commentAuthor', '');
      this.controller.set('commentMessage', '');
      this.controller.toggleProperty('newComment');
    }
  }
});

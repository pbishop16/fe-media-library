import Ember from 'ember';

export default Ember.Controller.extend({
  newComment: false,
  commentAuthor: '',
  commentMessage: '',
  authorNotValid: Ember.computed.empty('commentAuthor'),
  messageNotValid: Ember.computed.empty('commentMessage'),
  isNotValid: Ember.computed.or('authorNotValid','messageNotValid')
});

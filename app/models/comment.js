import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  author: attr('string'),
  message: attr('string'),
  album: belongsTo(),
  createdAt: attr('date'),
  updatedAt: attr('date')
});

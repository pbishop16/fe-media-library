import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  author: attr('string'),
  message: attr('string'),
  album: belongsTo(),
  created_at: attr('date'),
  updated_at: attr('date')
});

import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
  author: attr('String'),
  message: attr('String'),
  album: belongsTo('album'),
  created_at: attr('Date'),
  updated_at: attr('Date')
});

import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  name: attr('String'),
  year: attr(),
  total_sold: attr('Number'),
  artist_id: belongsTo('artist'),
  comment_ids: hasMany('comment'),
  created_at: attr('Date'),
  updated_at: attr('Date')
});

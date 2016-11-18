import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  name: attr('String'),
  year: attr(),
  totalSold: attr('Number'),
  artistId: belongsTo('artist'),
  commentIds: hasMany('comment'),
  createdAt: attr('Date'),
  updatedAt: attr('Date')
});

import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('String'),
  based_in: attr('String'),
  founding_year: attr(),
  album_ids: hasMany('album'),
  created_at: attr('Date'),
  updated_at: attr('Date')
});

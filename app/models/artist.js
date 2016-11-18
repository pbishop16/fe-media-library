import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('String'),
  basedIn: attr('String'),
  foundingYear: attr(),
  albumIds: hasMany('album'),
  createdAt: attr('Date'),
  updatedAt: attr('Date'),
  allAlbumSizes: Ember.computed.mapBy('albumIds', 'totalSold'),
  totalAlbumsSold: Ember.computed.sum('allAlbumSizes')
});

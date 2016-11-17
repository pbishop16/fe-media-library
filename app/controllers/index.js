import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['artists_per_page','albums_per_page', 'sort_on'],
  artistsTotal: Ember.computed('model.artists', function() {
    return this.get('model.artists').get('meta').total;
  }),
  albumsTotal: Ember.computed('model.albums', function(){
    return this.get('model.albums.meta').total;
  }),
  artists_per_page: null,
  albums_per_page: null,

  /* Artist Locations */
  artistLocations: Ember.computed.mapBy('model.artists', 'based_in'),
  uniqArtistLocations: Ember.computed.uniq('artistLocations'),

  /* Top 5 Artists by ablums sold */
  sortArtists: ['totalAlbumsSold:desc'],
  artistByTotal: Ember.computed.sort('model.artists', 'sortArtists'),
  popularArtists: Ember.computed('artistByTotal', function() {
    let array = this.get('artistByTotal');
    return array.splice(0,5);
  }),

  /* Albums totaled by year */
  albumYears: Ember.computed.mapBy('model.albums.@each.year', 'year'),
  uniqAlbumYears: Ember.computed.uniq('albumYears'),
  totalAlbumsByYear: Ember.computed('uniqAlbumYears', function() {
    let albums = this.get('model.albums');
    let totalsByYear = {};
    let uniq = this.get('uniqAlbumYears');
    uniq.forEach((year)=>{
      let total = albums.filterBy('year', year);
      totalsByYear[year] = total.length;
    });
    return totalsByYear;
  })
});

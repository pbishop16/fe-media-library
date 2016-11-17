import Ember from 'ember';

export default Ember.Route.extend({
  metaValues: Ember.inject.service('meta-values'),
  queryParams: {
    artists_per_page: { refreshModel: true },
    albums_per_page: { refreshModel: true },
    sort_on: { refreshModel: true }
  },
  model() {
    return this.get('metaValues').getArtistMeta().then(() => {
      return this.get('metaValues').getAlbumMeta().then(() => {
        return Ember.RSVP.hash({
          artists: this.store.query('artist', {per_page: this.get('metaValues').artistMeta.total}),
          albums: this.store.query('album', {sort_on: 'year', per_page: this.get('metaValues').albumMeta.total})
        });
      });
    });
  }
});

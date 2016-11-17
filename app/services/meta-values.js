import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  artistMeta: null,
  albumMeta: null,
  getArtistMeta() {
    return this.get('store').query('artist', {}).then((results) => {
      this.set('artistMeta', results.get('meta'));
      return ;
    });
  },
  getAlbumMeta() {
    return this.get('store').query('album', {}).then((results) => {
      this.set('albumMeta', results.get('meta'));
      return ;
    });
  }
});

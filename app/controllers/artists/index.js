import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['locationFilter','sort_on', 'sort_direction', 'per_page', 'page'],
  locationFilter: '',
  sort_on: '',
  sort_direction: '',
  per_page: null,
  page: 1,
  artistsTotal: Ember.computed('model', function() {
    return this.get('model.meta.total');
  }),
  pagesTotal: Ember.computed('model', function() {
    return this.get('model.meta.total_pages');
  }),
  filteredArtists: Ember.computed('model.@each.name', 'searchFilter', function() {
    let results = this.get('model');
    const locationFilter = this.get('locationFilter');

    if (locationFilter) {
      results = results.filter((artist) => artist.get('basedIn') === locationFilter);
    }

    return results.sortBy('name');
  })
});

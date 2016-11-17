import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['locationFilter','sort_on', 'sort_direction', 'per_page', 'page'],
  locationFilter: '',
  searchFilter: '',
  sort_on: '',
  sort_direction: '',
  per_page: null,
  page: null,
  artistsTotal: Ember.computed('model', function() {
    return this.get('model.meta.total');
  }),
  filteredArtists: Ember.computed('model.@each.name', 'searchFilter', function() {
    let results = this.get('model');
    const searchFilter = this.get('searchFilter');
    const locationFilter = this.get('locationFilter');

    if (searchFilter) {
      const regexString = '(' + searchFilter.split(' ').join(')+.*(') + ')+.*';
      const regex = new RegExp(regexString, 'ig');
      results = results.filter((artist) => artist.get('name').match(regex));
    }

    if (locationFilter) {
      results = results.filter((artist) => artist.get('based_in') === locationFilter);
    }

    return results.sortBy('name');
  })
});

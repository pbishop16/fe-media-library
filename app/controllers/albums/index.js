import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['yearFilter','sort_on', 'sort_direction', 'per_page', 'page'],
  yearFilter: '',
  sort_on: '',
  sort_direction: '',
  per_page: null,
  page: 1,
  accessSearch: false,
  albumsTotal: Ember.computed('model', function() {
    return this.get('model.meta.total');
  }),
  pagesTotal: Ember.computed('model', function() {
    return this.get('model.meta.total_pages');
  }),
  filteredAlbums: Ember.computed('model.@each.year','yearFilter', function() {
    let results = this.get('model');
    const yearFilter = this.get('yearFilter');

    if (yearFilter) {
      results = results.filter((album) => album.get('year') === parseInt(yearFilter));
    }

    return results;
  })
});

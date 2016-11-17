import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    per_page: {refreshModel: true},
    sort_on: {refreshModel: true},
    sort_direction: {refreshModel: true},
    page: {refreshModel: true}
  },
  model(params) {
    return this.store.query('artist', {
      sort_on: params.sort_on,
      per_page: params.per_page,
      sort_direction: params.sort_direction,
      page: params.page
    });
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.setProperties({locationFilter: '',sort_on: 'name', sort_direction: '', per_page: 0, page: 0});
    }
  },
  actions: {
    resetFilters() {
      this.transitionTo({ queryParams: {locationFilter: '',sort_on: 'name', sort_direction: '', per_page: 0, page: 0}});
      this.controller.set('searchFilter', '');
    }
  }
});

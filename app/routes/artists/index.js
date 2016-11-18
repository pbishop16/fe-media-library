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
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.setProperties({locationFilter: '',sort_on: 'name', sort_direction: '', per_page: 0, page: 1});
    }
  },
  actions: {
    resetFilters() {
      this.transitionTo({ queryParams: {locationFilter: '',sort_on: 'name', sort_direction: '', per_page: 0, page: 0}});
      this.controller.set('searchFilter', '');
    },
    previousPage() {
      if (this.controller.get('page') > 1) {
        this.controller.decrementProperty('page');
        this.transitionTo({queryParams: {page: this.controller.get('page')}});
      }
    },
    nextPage() {
      if (this.controller.get('page') !== this.controller.get('pagesTotal')) {
        this.controller.incrementProperty('page');
        this.transitionTo({queryParams: {page: this.controller.get('page')}});
      }
    }
  }
});

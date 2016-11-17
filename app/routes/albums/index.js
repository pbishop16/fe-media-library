import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
      per_page: {refreshModel: true},
      sort_on: {refreshModel: true},
      sort_direction: {refreshModel: true},
      page: {refreshModel: true}
    },
    model(params) {
      return this.store.query('album', {
        sort_on: params.sort_on,
        per_page: params.per_page,
        sort_direction: params.sort_direction,
        page: params.page
      });
    },
    resetController(controller, isExiting, transition) {
      if (isExiting) {
        controller.setProperties({searchFilter: '',yearFilter: '',sort_on: 'name', sort_direction: '', per_page: 0, page: 1});
      }
    },
    actions: {
      resetFilters() {
        this.controller.set('searchFilter', '');
        this.transitionTo({ queryParams: {yearFilter: '',sort_on: 'name', sort_direction: '', per_page: 20, page: 1}});
      }

    }
});

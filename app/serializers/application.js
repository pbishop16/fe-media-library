import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  keyForAttribute: function(attr, method) {
    return Ember.String.underscore(attr);
  }
});

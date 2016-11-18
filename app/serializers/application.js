import { ActiveModelSerializer } from 'active-model-adapter';
import Ember from 'ember';

export default ActiveModelSerializer.extend({
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  }
});

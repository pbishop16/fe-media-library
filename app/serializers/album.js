import ApplicationSerializer from './application';
import DS from 'ember-data';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    comment_ids: { serialize: 'ids' }
  }
});

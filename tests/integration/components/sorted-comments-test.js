import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sorted-comments', 'Integration | Component | sorted comments', {
  integration: true
});

test('it renders all comments', function(assert) {

  this.set('comments', [
    {author: 'me', message: 'message', created_at: 'Mon Nov 7 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'me', message: 'message', created_at: 'Thu Nov 17 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'me', message: 'message', created_at: 'Wed Nov 23 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'me', message: 'message', created_at: 'Wed Nov 9 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'me', message: 'message', created_at: 'Mon Oct 31 2016 13:59:46 GMT-0600 (CST)'},
  ]);

  this.render(hbs`{{sorted-comments comments=comments}}`);

  assert.equal(this.$('.comment').length, 5, 'all comments rendered');
});

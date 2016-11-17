import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('sorted-comments', 'Unit | Component | sorted comments', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});


test('it sorts comments', function(assert) {
  let component = this.subject();

  component.set('comments', [
    {author: 'Ron', message: 'message', created_at: 'Mon Nov 7 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'Sally', message: 'message', created_at: 'Thu Nov 17 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'Joe', message: 'message', created_at: 'Tue Nov 16 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'Beth', message: 'message', created_at: 'Wed Nov 9 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'Sara', message: 'message', created_at: 'Mon Oct 31 2016 13:59:46 GMT-0600 (CST)'}
  ]);

  assert.deepEqual(component.get('sortedComments'), [
    {author: 'Sally', message: 'message', created_at: 'Thu Nov 17 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'Joe', message: 'message', created_at: 'Tue Nov 16 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'Beth', message: 'message', created_at: 'Wed Nov 9 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'Ron', message: 'message', created_at: 'Mon Nov 7 2016 13:59:46 GMT-0600 (CST)'},
    {author: 'Sara', message: 'message', created_at: 'Mon Oct 31 2016 13:59:46 GMT-0600 (CST)'}
  ]);
});

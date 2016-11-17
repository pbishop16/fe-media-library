import { test } from 'qunit';
import moduleForAcceptance from 'fe-ember-candidate/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | basic routing');

test('should show artists template', function(assert) {
  visit('/');

  click('a.artist-link');

  andThen(function() {
    assert.equal(currentURL(), '/artists');
  });
});

test('should list artists', function (assert) {
  visit('/artists');

  andThen(function () {
    assert.equal(find('li.artist-item').length, 20, 'should see 20 listings');
  });
});

test('should show artists', function (assert) {
  visit('/artists');

  click('li:first-child');

  andThen(function () {
    assert.equal(find('.artist').length, 1, 'should show one artist');
  });
});

test('should go back to application index', function(assert) {
  visit('/artists');

  click('a.home-link');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

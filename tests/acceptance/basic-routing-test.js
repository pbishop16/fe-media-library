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

test('should show artists', function (assert) {
  visit('/artists');

  click('li:first-child');

  andThen(function () {
    assert.equal(find('.album-item').length, 20, 'should show 20 artists');
  });
});

test('should go back to application index', function(assert) {
  visit('/artists');

  click('a.home-link');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should show artists template', function(assert) {
  visit('/');

  click('a.albums-link');

  andThen(function() {
    assert.equal(currentURL(), '/albums');
  });
});

test('should list albums', function (assert) {
  visit('/albums');

  andThen(function () {
    assert.equal(find('li.album-item').length, 20, 'should see 20 listings');
  });
});

test('should show albums', function (assert) {
  visit('/albums');

  click('li:first-child');

  andThen(function () {
    assert.equal(find('.album').length, 1, 'should show one album');
  });
});

test('access albums through artist', function (assert) {
  visit('/artists');

  click('li:first-child');
  click('.album-item:first-child');

  andThen(function () {
    assert.equal(find('.album').length, 1, 'should show one album');
  });
});

test('access artist through an album', function (assert) {
  visit('/albums');

  click('li:first-child');
  click('a.artist-link');

  andThen(function () {
    assert.equal(find('.artist').length, 1, 'should show one artist');
  });
});

test('should show comments for a given album', function (assert) {
  visit('/albums');

  click('li:first-child');

  andThen(function () {
    assert.equal(find('.comment').length, 10, 'should show 10 album comments');
  });
});

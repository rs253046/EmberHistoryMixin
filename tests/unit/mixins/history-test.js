import Ember from 'ember';
import HistoryMixin from '../../../mixins/history';
import { module, test } from 'qunit';

module('Unit | Mixin | history');

// Replace this with your real tests.
test('it works', function(assert) {
  let HistoryObject = Ember.Object.extend(HistoryMixin);
  let subject = HistoryObject.create();
  assert.ok(subject);
});

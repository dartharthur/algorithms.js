const jasmine = require('jasmine');
const cycles = require('../toy-problem-collection/data-structures/linked-list/problems/hasCycle');

jasmine.describe('a suite', () => {
  jasmine.it('contains spec with an expectation', () => {
    jasmine.expect(typeof cycles.hasCycleS2).toBe('function');
  });
});

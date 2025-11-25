import assert from 'node:assert/strict';
import { isSorted } from './issorted.js';

describe('isSorted', function () {
  it('perfectly sorted', function () {
    const arr = [1,2,3,4,5,6,7,8,9];
    assert.strictEqual(isSorted(arr), true);
  });

  it('sorted with gaps', function () {
    const arr = [1,2,4,5,7,9,11];
    assert.strictEqual(isSorted(arr), true);
  });

  it('sorted with gaps and duplicates', function () {
    const arr = [2,2,3,6,8,9,9,10,10,11,12];
    assert.strictEqual(isSorted(arr), true);
  });

  it('reverse sorted', function () {
    const arr = [9,8,7,6,5,4,3,2,1];
    assert.strictEqual(isSorted(arr), false);
  });

  it('random', function () {
    const arr = [1,8,9,4,6,7,2,5,3];
    assert.strictEqual(isSorted(arr), false);
  });

  it('nearly sorted (one out of order)', function () {
    const arr = [1,2,4,4,5,3,6,7,8];
    assert.strictEqual(isSorted(arr), false);
  });

  it('all equal values', function () {
    const arr = [4,4,4,4,4,4,4];
    assert.strictEqual(isSorted(arr), true);
  });

  it('empty array', function () {
    const arr = [];
    assert.strictEqual(isSorted(arr), true);
  });

  it('single element', function () {
    const arr = [42];
    assert.strictEqual(isSorted(arr), true);
  });

  describe('off-by-one checks', function () {
    it('detects disorder at the very end', function () {
      const arr = [1,2,3,5,4];
      assert.strictEqual(isSorted(arr), false);
    });

    it('detects disorder in a 2-element array', function () {
      const arr = [2,1];
      assert.strictEqual(isSorted(arr), false);
    });

    it('passes for a sorted 2-element array', function () {
      const arr = [1,2];
      assert.strictEqual(isSorted(arr), true);
    });
  });

});
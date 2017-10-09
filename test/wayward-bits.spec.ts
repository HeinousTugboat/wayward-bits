import 'mocha';
import { expect } from 'chai';
import WaywardBits from '../src/wayward-bits';

describe('base tests', function () {
    it('should at least run', function () {
        expect(true).to.be.true;
    });
});
describe('WaywardBits', function () {
    it('should exist', function () {
        expect(WaywardBits).to.exist;
    });
    it('should be invokable', function () {
        const bits = new WaywardBits;
        expect(bits).to.exist;
        expect(bits instanceof WaywardBits).to.be.true;
    });
});

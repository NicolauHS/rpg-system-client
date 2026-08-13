import { describe, it, expect } from "vitest";
import { rollPool } from "./dice";

describe("rollPool", () => {
    it("counts 6s as successes", () => {
        expect(rollPool([6, 3, 6, 1]).successes).toBe(2);
    });

    it("reports no successes for a pool with no 6s", () => {
        expect(rollPool([1, 2, 3, 4, 5]).successes).toBe(0);
    });

    it("flags critical failure when 1s dominate and nothing succeeded", () => {
        expect(rollPool([1, 1, 1, 2]).criticalFailure).toBe(true);
    });

    it("does not flag critical failure when a 6 is present", () => {
        expect(rollPool([1, 1, 1, 6]).criticalFailure).toBe(false);
    });

    it("handles an empty pool", () => {
        expect(rollPool([])).toEqual({ successes: 0, criticalFailure: false });
    });
});
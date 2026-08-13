export type PoolResult = {
    successes: number;
    criticalFailure: boolean;
};

export function rollPool(dice: number[]): PoolResult {
    const successes = dice.filter((d) => d === 6).length;
    const ones = dice.filter((d) => d === 1).length;

    return {
        successes,
        criticalFailure: successes === 0 && ones > dice.length / 2,
    };
}
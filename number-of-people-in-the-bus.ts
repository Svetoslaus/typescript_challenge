export function number(busStops: [number, number][]): number {

    return busStops.reduce((rem, [on, off]) => rem + on - off, 0);

}

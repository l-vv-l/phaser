export function InOut (v: number, overshoot: number = 1.70158): number
{
    const s = overshoot * 1.525;

    if ((v *= 2) < 1)
    {
        return 0.5 * (v * v * ((s + 1) * v - s));
    }
    else
    {
        return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2);
    }
}

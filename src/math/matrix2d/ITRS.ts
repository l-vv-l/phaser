import { IMatrix2D } from './IMatrix2D';

//  Apply the identity, translate, rotate and scale operations on the target Matrix then returns it.

export function ITRS (target: IMatrix2D, x: number, y: number, angle: number, scaleX: number, scaleY: number): IMatrix2D
{
    if (angle === 0)
    {
        return target.set(1, 0, 0, 1, x, y);
    }
    else
    {
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        return target.set(
            cos * scaleX,
            sin * scaleX,
            -sin * scaleY,
            cos * scaleY,
            x,
            y
        );
    }
}

import { IMatrix2D } from './IMatrix2D';

//  Multiplies the target Matrix by the given amount, then returns the target Matrix.

export function MultiplyScalarAndAdd (target: IMatrix2D, src: IMatrix2D, scale: number): IMatrix2D
{
    const { a, b, c, d, tx, ty } = src;

    target.a += (a * scale);
    target.b += (b * scale);
    target.c += (c * scale);
    target.d += (d * scale);
    target.tx += (tx * scale);
    target.ty += (ty * scale);

    return target;
}

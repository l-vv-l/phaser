import { Frame } from './Frame';
import { IGLTextureBinding } from '../renderer/webgl1/textures/IGLTextureBinding';
import { ITexture } from './ITexture';
export declare class Texture implements ITexture {
    key: string;
    width: number;
    height: number;
    image: TexImageSource;
    binding: IGLTextureBinding;
    firstFrame: Frame;
    frames: Map<string | number, Frame>;
    data: unknown;
    constructor(image?: TexImageSource, width?: number, height?: number);
    addFrame(key: string | number, x: number, y: number, width: number, height: number): Frame;
    getFrame(key?: string | number | Frame): Frame;
    setSize(width: number, height: number): void;
    destroy(): void;
}
//# sourceMappingURL=Texture.d.ts.map
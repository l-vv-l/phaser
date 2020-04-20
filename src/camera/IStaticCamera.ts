import Rectangle from '../geom/rectangle/Rectangle';
import WebGLRenderer from '../renderer/webgl1/WebGLRenderer';
import IScene from '../scenes/IScene';

export default interface IStaticCamera
{
    scene: IScene;
    matrix: Float32Array;
    renderer: WebGLRenderer;
    bounds: Rectangle;
    reset (): void;
    update (delta: number, time: number): void;
    updateTransform (): this;
    render (gameFrame: number): void;
    destroy (): void;
}

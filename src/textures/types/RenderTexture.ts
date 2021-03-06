import { CreateFramebuffer } from '../../renderer/webgl1/fbo/CreateFramebuffer';
import { GLTextureBinding } from '../../renderer/webgl1/textures/GLTextureBinding';
import { ISprite } from '../../gameobjects/sprite/ISprite';
import { Ortho } from '../../renderer/webgl1/cameras/Ortho';
import { Texture } from '../Texture';
import { WebGLRenderer } from '../../renderer/webgl1/WebGLRenderer';
import { gl } from '../../renderer/webgl1/GL';

export class RenderTexture extends Texture
{
    renderer: WebGLRenderer;
    cameraMatrix: Float32Array;
    projectionMatrix: Float32Array;

    constructor (renderer: WebGLRenderer, width: number = 256, height: number = width)
    {
        super(null, width, height);

        this.renderer = renderer;

        /*
        const [ texture, framebuffer ] = CreateFramebuffer(width, height);

        this.binding = new GLTextureBinding(this);

        this.binding.texture = texture;
        this.binding.framebuffer = framebuffer;

        this.projectionMatrix = Ortho(width, height);
        this.cameraMatrix = new Float32Array([ 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, height, 0, 1 ]);
        */
    }

    cls (): this
    {
        const renderer = this.renderer;

        // renderer.reset(this.binding.framebuffer, this.width, this.height);
        // gl.clearColor(0, 0, 0, 0);
        // gl.clear(gl.COLOR_BUFFER_BIT);
        // renderer.reset();

        return this;
    }

    batchStart (): this
    {
        // const renderer = this.renderer;

        // renderer.reset(this.binding.framebuffer, this.width, this.height);

        // renderer.currentShader.bind(this.projectionMatrix, this.cameraMatrix);

        return this;
    }

    batchDraw (sprites: ISprite[]): this
    {
        const renderer = this.renderer;

        for (let i = 0, len = sprites.length; i < len; i++)
        {
            // sprites[i].renderGL(renderer);
        }

        return this;
    }

    batchEnd (): this
    {
        const renderer = this.renderer;

        // renderer.flush();

        renderer.reset();

        return this;
    }

    draw (...sprites: ISprite[]): this
    {
        this.batchStart();
        this.batchDraw(sprites);
        this.batchEnd();

        return this;
    }
}

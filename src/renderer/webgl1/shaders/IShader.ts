import { IRenderPass } from '../renderpass/IRenderPass';
import { IVertexAttribPointer } from './IVertexAttribPointer';
import { Texture } from '../../../textures/Texture';

export interface IShader
{
    attributes: Map<string, IVertexAttribPointer>;
    framebuffer: WebGLFramebuffer;
    program: WebGLProgram;
    renderToFramebuffer: boolean;
    renderToDepthbuffer: boolean;
    texture: Texture;
    uniforms: Map<string, unknown>;
    bind (renderPass: IRenderPass, uTexture?: number): boolean;
    create (fragmentShaderSource: string, vertexShaderSource: string, uniforms: Object, attribs: Object): void;
    destroy (): void;
    updateUniforms (renderPass: IRenderPass): void;
    setAttributes (renderPass: IRenderPass): void;
    setUniforms (renderPass: IRenderPass): boolean;
}

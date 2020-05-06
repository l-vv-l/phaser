import { AddChild, AddChildren } from '../src/display/';
import { BackgroundColor, MaxTextures, Parent, Scenes, Size, WebGLRenderer } from '../src/config';
import { Between, RadToDeg } from '../src/math';
import { ImageFile, SpriteSheetFile } from '../src/loader/files/';

import { Game } from '../src/Game';
import { Keyboard } from '../src/input/keyboard';
import { Loader } from '../src/loader/Loader';
import { On } from '../src/events';
import { Scene } from '../src/scenes/Scene';
import { Sprite } from '../src/gameobjects/';
import { WebGLRenderer as W } from '../src/renderer/webgl1/WebGLRenderer';
import { World } from '../src/world/World';

class Demo extends Scene
{
    constructor ()
    {
        super();

        const loader = new Loader();

        // loader.setPath('/phaser4-examples/public/assets/');
        loader.setPath('/examples/public/assets/');

        loader.add(ImageFile('marker', 'drawcursor.png'));
        loader.add(SpriteSheetFile('fruits', '32x32-item-pack.png', { frameWidth: 32 }));

        loader.start(() => this.create());
    }

    create ()
    {
        (this.game.renderer as W).optimizeRedraw = false;

        const world = new World(this);

        // world.enableCameraCull = false;

        //  3 x 3 - 800 x 600 screens x 100 sprites per screen = 900 sprites

        const minX = -800;
        const maxX = 1600;
        const minY = -600;
        const maxY = 1200;

        for (let i = 0; i < 900; i++)
        {
            const x = Between(minX, maxX);
            const y = Between(minY, maxY);
            const f = Between(0, 35);

            AddChild(world, new Sprite(x, y, 'fruits', f));
        }

        //  Markers

        AddChild(world, new Sprite(400, 300, 'marker'));
        AddChild(world, new Sprite(400 - 800, 300, 'marker'));
        AddChild(world, new Sprite(400 + 800, 300, 'marker'));

        AddChild(world, new Sprite(400, 300 - 600, 'marker'));
        AddChild(world, new Sprite(400 - 800, 300 - 600, 'marker'));
        AddChild(world, new Sprite(400 + 800, 300 - 600, 'marker'));

        AddChild(world, new Sprite(400, 300 + 600, 'marker'));
        AddChild(world, new Sprite(400 - 800, 300 + 600, 'marker'));
        AddChild(world, new Sprite(400 + 800, 300 + 600, 'marker'));

        const keyboard = new Keyboard();

        const rot = (Math.PI) / 8;

        On(keyboard, 'keydown-ArrowLeft', () => {
            world.camera.position.x -= 4;
            console.log('left', world.camera.position.x);
        });

        On(keyboard, 'keydown-ArrowRight', () => {
            world.camera.position.x += 4;
            console.log('right', world.camera.position.x);
        });

        On(keyboard, 'keydown-ArrowUp', () => {
            world.camera.position.y -= 4;
            console.log('up', world.camera.position.y);
        });

        On(keyboard, 'keydown-ArrowDown', () => {
            world.camera.position.y += 4;
            console.log('dw', world.camera.position.y);
        });

        On(keyboard, 'keydown-a', () => {
            world.camera.rotation -= rot;
            console.log('rotation', world.camera.rotation, RadToDeg(world.camera.rotation));
        });

        On(keyboard, 'keydown-d', () => {
            world.camera.rotation += rot;
            console.log('rotation', world.camera.rotation, RadToDeg(world.camera.rotation));
        });

        On(keyboard, 'keydown-w', () => {
            world.camera.scale.x += 0.1;
            world.camera.scale.y += 0.1;
        });

        On(keyboard, 'keydown-s', () => {
            world.camera.scale.x -= 0.1;
            world.camera.scale.y -= 0.1;
        });
    }
}

export default function (): void
{
    new Game(
        MaxTextures(8),
        WebGLRenderer(),
        Size(800, 600),
        Parent('gameParent'),
        BackgroundColor(0x2d2d2d),
        Scenes(Demo)
    );
}

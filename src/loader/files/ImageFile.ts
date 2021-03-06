import { File } from '../File';
import { GetURL } from '../GetURL';
import { ImageTagLoader } from '../ImageTagLoader';
import { TextureManagerInstance } from '../../textures/TextureManagerInstance';

export function ImageFile (key: string, url?: string): File
{
    const file = new File(key, url);

    file.load = (): Promise<File> =>
    {
        file.url = GetURL(file.key, file.url, '.png', file.loader);

        if (file.loader)
        {
            file.crossOrigin = file.loader.crossOrigin;
        }

        return new Promise((resolve, reject) =>
        {
            const textureManager = TextureManagerInstance.get();

            if (textureManager.has(file.key))
            {
                resolve(file);
            }
            else
            {
                ImageTagLoader(file).then(file =>
                {
                    textureManager.add(file.key, file.data as HTMLImageElement);

                    resolve(file);

                }).catch(file =>
                {
                    reject(file);
                });
            }
        });
    };

    return file;
}

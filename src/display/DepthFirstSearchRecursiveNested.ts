import { IGameObject } from '../gameobjects/IGameObject';

//  Returns all children of the parent, no matter what depth they go to, using a recursive search.
//  Parents and children are grouped together.

export type SearchEntry = {
    node: IGameObject;
    children: SearchEntry[];
};

export function DepthFirstSearchRecursiveNested (parent: IGameObject, output: SearchEntry[] = []): SearchEntry[]
{
    for (let i = 0; i < parent.numChildren; i++)
    {
        const node = parent.children[i];

        const children: SearchEntry[] = [];

        output.push({ node, children });

        if (node.numChildren > 0)
        {
            DepthFirstSearchRecursiveNested(node, children);
        }
    }

    return output;
}

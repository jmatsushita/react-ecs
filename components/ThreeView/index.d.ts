import { EntityContext } from '@react-ecs/core';
import React, { Component, ContextType, ReactElement, RefObject } from 'react';
import { Object3D } from 'three';
export interface ThreeViewProps {
    children: ReactElement;
    forwardRef?: RefObject<Object3D>;
}
/**
 * A modification of https://github.com/dustinlacewell/react-ecs/blob/master/libs/three/src/components/ThreeView/index.tsx
 * Adds forwarding the ref for the contained object
 * @see https://github.com/dustinlacewell/react-ecs/issues/6
 * Solution contributed by @Honga1
 */
export declare class ThreeView extends Component<ThreeViewProps> {
    static contextType: React.Context<import("tick-knock").Entity>;
    context: ContextType<typeof EntityContext>;
    readonly ref: RefObject<Object3D>;
    constructor(props: ThreeViewProps);
    get object3d(): Object3D;
    componentDidMount(): void;
    render(): JSX.Element;
}

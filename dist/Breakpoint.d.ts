import React from 'react';
declare type Props = {
    children: React.ReactNode;
    up?: boolean;
    down?: boolean;
    only?: boolean;
    [x: string]: any;
};
export declare function Breakpoint({ children, up, down, only, ...props }: Props): React.ReactElement | null;
export {};

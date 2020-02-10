import React from 'react';
export declare const BreakpointContext: any;
declare type Props = {
    breakpoints?: {
        [x: string]: number;
    };
    children: React.ReactNode;
};
export declare function BreakpointProvider({ breakpoints, children }: Props): React.ReactElement;
export {};

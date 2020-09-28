import * as React from "react";
interface VpTextProps {
    text?: string;
    display: 'block' | 'inline-block';
    type?: string;
    align?: string;
    valign?: string;
    width?: number;
    height?: number;
    style?: Record<string, any>;
}
export declare class VpText extends React.Component<VpTextProps> {
    defaultProps: VpTextProps;
    render(): JSX.Element;
}
interface VpDividerProps {
    dashed?: boolean;
    align?: 'left' | 'center' | 'middle';
    text?: string;
    style?: Record<string, any>;
}
export declare class VpDivider extends React.Component<VpDividerProps> {
    render(): JSX.Element;
}
export {};

import * as React from "react";
interface VpButtonProps {
    text?: string;
    icon?: string;
    type?: 'primary' | 'danger' | 'link' | 'text' | 'default';
    disabled?: boolean;
    size?: 'large' | 'middle' | 'small';
    style?: Record<string, any>;
    shape?: 'normal' | 'round' | 'circle' | 'icon';
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare class VpButton extends React.Component<VpButtonProps> {
    defaultProps: VpButtonProps;
    onClick(e: React.MouseEvent<HTMLDivElement>): void;
    onMousedown(e: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
export {};

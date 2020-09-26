import * as React from "react";
interface VpIconProps {
    icon: string;
    size?: number;
    angle?: number;
    flip?: 'x' | 'y';
    disabled?: boolean;
    title?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
declare class VpIcon extends React.Component<VpIconProps> {
    private static outIconSources;
    static importIconSource(type: string, buildIcon: (code: string) => string): void;
    onClick(e: React.MouseEvent<HTMLDivElement>): void;
    onMousedown(e: React.MouseEvent<HTMLDivElement>): void;
    render(): JSX.Element;
}
export default VpIcon;

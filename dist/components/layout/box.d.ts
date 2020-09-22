import * as React from "react";
interface VpBoxProps {
    head?: React.ReactNode;
    headHeight?: number;
    btns?: React.ReactNode;
    title?: string;
    icon?: string;
    width?: number;
    height?: number;
    position?: 'relative' | 'fixed' | 'absolute';
    allowSpread?: boolean;
    spreadClickArea?: 'head' | 'icon-title' | 'icon' | 'title';
    onSpread?: (spread: boolean) => void;
    contentStyle?: {
        padding: string;
    };
}
interface VpBoxState {
    spread?: boolean;
}
declare class VpBox extends React.Component<VpBoxProps, VpBoxState> {
    state: {
        spread: boolean;
    };
    defaultProps: VpBoxProps;
    constructor(props: VpBoxProps);
    onSpread(event: React.MouseEvent<HTMLDivElement>): void;
    spread(silent?: boolean): void;
    private headDiv;
    render(): JSX.Element;
}
export default VpBox;

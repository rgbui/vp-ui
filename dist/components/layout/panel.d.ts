import * as React from "react";
interface VpPanelProps {
    width?: number;
    height?: number;
    labelWidth?: number;
    labelAlign?: string;
    labelValign?: string;
    rowHeight?: number;
    rowGap?: number;
    colGap?: number;
}
declare class VpPanel extends React.Component<VpPanelProps> {
    constructor(props: VpPanelProps);
    render(): JSX.Element;
}
interface VpRowProps {
    label?: string;
    labelWidth?: number;
    labelAlign?: string;
    labelValign?: string;
    rowHeight?: number;
    rowGap?: number;
    colGap?: number;
    align?: string;
    valign?: string;
    width?: number;
    height?: number;
}
declare class VpRow extends React.Component<VpRowProps> {
    constructor(props: VpRowProps);
    render(): JSX.Element;
}
interface VpColProps {
    span?: number;
    width?: number;
    align?: string;
    valign?: string;
}
declare class VpCol extends React.Component<VpColProps> {
    constructor(props: VpColProps);
}
export { VpPanel, VpRow, VpCol };

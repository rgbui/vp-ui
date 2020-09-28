

import * as  React from "react";
interface VpTextProps {
    text?: string,
    display: 'block' | 'inline-block',
    type?: string,
    align?: string,
    valign?: string,
    width?: number,
    height?: number,
    style?: Record<string, any>
}
export class VpText extends React.Component<VpTextProps> {
    defaultProps: VpTextProps = {
        display: 'block',
        type: 'info',
        align: 'left',
        valign: 'top'
    };
    render() {
        var style: Record<string, any> = Object.assign(this.props.style || {}, {
            display: this.props.display == 'block' ? 'flex' : 'inline-flex'
        });
        style.justifyContent = 'flex-start;'
        if (this.props.align == 'center') style.justifyContent = 'center'
        else if (this.props.align == 'right') style.justifyContent = 'flex-end';
        style.alignItems = 'flex-start';
        if (this.props.valign == 'middle') style.alignItems = 'center'
        else if (this.props.valign == 'bottom') style.alignItems = 'flex-end';
        if (typeof this.props.width != 'undefined') style.width = this.props.width + "px";
        if (typeof this.props.height != 'undefined') style.height = this.props.height + "px";
        var content = typeof this.props.text != 'undefined' ? this.props.text : this.props.children;
        return <div className={`vp-text vp-text-${this.props.type}`} style={style}>{content}</div>
    }
}
interface VpDividerProps {
    dashed?: boolean;
    align?: 'left' | 'center' | 'middle',
    text?: string;
    style?: Record<string, any>
}
export class VpDivider extends React.Component<VpDividerProps> {
    render() {
        var content = typeof this.props.text != 'undefined' ? this.props.text : this.props.children;
        var style: Record<string, any> = Object.assign(this.props.style || {}, {});
        return <div style={style} className={`vp-divider ${this.props.dashed == true ? "vp-divider-dashed" : ""} ${this.props.align ? "vp-divider" + this.props.align : ""}`}>{content}</div>
    }
}

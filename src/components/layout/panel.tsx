

import React, { Component, ReactElement, ReactChild, ReactNode } from "react";
import { VpIcon } from "./icon";
interface VpPanelProps {
    width?: number,
    height?: number,
    labelWidth?: number,
    labelAlign?: string,
    labelValign?: string,
    rowHeight?: number,
    rowGap?: number,
    colGap?: number,
}

export class VpPanel extends Component<VpPanelProps> {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className='vp-panel'>{this.props.children}</div>
    }
}

interface VpRowProps {
    label?: string,
    labelWidth?: number,
    labelAlign?: string,
    labelValign?: string,
    rowHeight?: number,
    rowGap?: number,
    colGap?: number,
    align?: string,
    valign?: string
}
export class VpRow extends Component<VpRowProps> {
    render() {
        if (this.props.label) {
            return <div className='vp-row-label'>
                <div className='vp-label'>{this.props.label}</div>
                <div className='vp-row'>{this.props.children}</div>
            </div>
        }
        else {
            return <div className='vp-row'>{this.props.children}</div>
        }
    }
}
export class VpCol extends Component {

}
/**
 * @param position  'relative'
 * 
 */
interface VpBoxProps {
    head?: ReactNode,
    headHeight?: number,
    btns?: ReactNode,
    title?: string,
    icon?: string,
    width?: number,
    height?: number,
    position?: 'relative' | 'fixed' | 'absolute',
    spread?: boolean,
    allowSpread?: boolean,
    spreadClickArea?: 'head' | 'icon-title' | 'icon' | 'title'
}
export class VpBox extends Component<VpBoxProps>{
    constructor(props) {
        super(props);
        this.onSpread = this.onSpread.bind(this);
    }
    onSpread(event) {

    }
    render() {
        var boxStyle: Record<string, any> = {
            position: this.props.position ? this.props.position : 'relative'
        }
        if (typeof this.props.width != 'undefined') boxStyle.width = this.props.width + "px";
        if (typeof this.props.height != 'undefined') boxStyle.height = this.props.height + "px";
        var contentStyle: Record<string, any> = {

        };
        if (this.props.allowSpread == true) {
            contentStyle.display = this.props.spread == false ? 'none' : 'block';
        }
        return <div className='vp-box' style={boxStyle}>{
            this.props.head ? <div className='vp-box-head'>{this.props.head}</div> : <div className='vp-box-head' onClick={this.onSpread}>{this.props.icon && <VpIcon icon={this.props.icon}></VpIcon>}<span>{this.props.title}</span></div>
        }
            {this.props.btns && <div className='vp-box-btns'>{this.props.btns}</div>}
            <div className='vp-box-content' style={contentStyle}>{this.props.children}</div>
        </div>
    }
}
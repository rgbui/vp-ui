// import { Component, ReactNode, MouseEvent } from "react";
import { default as VpIcon } from "./icon";
import * as React from "react"
/**
 * @param position  设计元素的是绝对定位，还是相对，还是固定，默认是相对
 * @param icon box上面的图标，如果不想显示图示 icon=''
 * @param allowSpread 表示当前的box是否为可折叠
 * @param toggleSpread 表示折叠的事件通知
 * @param contentStyle.padding 表示内容补白的距离
 * 
 */
interface VpBoxProps {
    head?: React.ReactNode,
    headHeight?: number,
    btns?: React.ReactNode,
    title?: string,
    icon?: string,
    width?: number,
    height?: number,
    position?: 'relative' | 'fixed' | 'absolute',
    allowSpread?: boolean,
    spreadClickArea?: 'head' | 'icon-title' | 'icon' | 'title',
    onSpread?: (spread: boolean) => void,
    contentStyle?: {
        padding: string
    }
}
interface VpBoxState {
    spread?: boolean
}
class VpBox extends React.Component<VpBoxProps, VpBoxState>{
    state = {
        spread: true
    }
    defaultProps: VpBoxProps = {
        headHeight: 24,
        spreadClickArea: 'icon-title',
        icon: 'angle-right:font',
        contentStyle: {
            padding: '10px'
        }
    }
    constructor(props: VpBoxProps) {
        super(props);
        this.onSpread = this.onSpread.bind(this);
    }
    onSpread(event: React.MouseEvent<HTMLDivElement>) {
        if (this.props.allowSpread !== true || !this.headDiv) return;
        if (this.props.head) return;
        if (this.props.spreadClickArea == 'head' || typeof this.props.spreadClickArea == 'undefined') {

        }
        else if (this.props.spreadClickArea == 'icon') {
            if (!(Array.from(this.headDiv.children).includes(event.nativeEvent.target as HTMLElement)
                &&
                (event.nativeEvent.target as HTMLElement).classList.contains('vp-icon'))) return
        }
        else if (this.props.spreadClickArea == 'title') {
            if (!(Array.from(this.headDiv.children).includes(event.nativeEvent.target as HTMLElement)
                &&
                (event.nativeEvent.target as HTMLElement).classList.contains('vp-box-head-title'))) return
        }
        else if (this.props.spreadClickArea == 'icon-title') {
            if (event.nativeEvent.target === this.headDiv) return;
        }
        this.setState({ spread: this.state.spread ? false : true }, () => {
            if (typeof this.props.onSpread == 'function')
                this.props.onSpread(this.state.spread);
        });
    }
    spread(silent?: boolean) {
        this.setState({ spread: this.state.spread ? false : true }, () => {
            if (silent == true) {
                if (typeof this.props.onSpread == 'function')
                    this.props.onSpread(this.state.spread);
            }
        });
    }
    private headDiv: HTMLElement;
    render() {
        var boxStyle: Record<string, any> = {
            position: this.props.position ? this.props.position : 'relative'
        }
        if (typeof this.props.width != 'undefined') boxStyle.width = this.props.width + "px";
        if (typeof this.props.height != 'undefined') boxStyle.height = this.props.height + "px";
        var headStyle: Record<string, any> = {
            height: this.props.headHeight + "px"
        }
        var contentStyle: Record<string, any> = {
            top: this.props.headHeight + "px",
            left: '0px',
            right: '0px',
            bottom: '0px'
        };
        if (this.props.allowSpread == true) {
            contentStyle.display = this.state.spread == false ? 'none' : 'block';
        }
        if (this.props.contentStyle) Object.assign(contentStyle, this.props.contentStyle);
        return <div className='vp-box' style={boxStyle}>{
            this.props.head ? <div className='vp-box-head' style={headStyle}>{this.props.head}</div> : <div className='vp-box-head' style={headStyle} ref={(div) => { this.headDiv = div; }} onClick={this.onSpread}>{this.props.icon && <VpIcon icon={this.props.icon}></VpIcon>}<span className='vp-box-head-title'>{this.props.title}</span></div>
        }
            {this.props.btns && <div className='vp-box-btns'>{this.props.btns}</div>}
            <div className='vp-box-content' style={contentStyle}>{this.props.children}</div>
        </div>
    }
}
export default VpBox;
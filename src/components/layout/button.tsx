import * as  React from "react";
import VpIcon from "./icon";
interface VpButtonProps {
    text?: string,
    icon?: string,
    type?: 'primary' | 'danger' | 'link' | 'text' | 'default',
    disabled?: boolean,
    size?: 'large' | 'middle' | 'small',
    style?: Record<string, any>,
    shape?: 'normal' | 'round' | 'circle' | 'icon',
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void,
    onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void,
}
export class VpButton extends React.Component<VpButtonProps>{
    defaultProps: VpButtonProps = {
        type: 'default',
        disabled: false,
        size: 'small',
        shape: 'normal'
    }
    onClick(e: React.MouseEvent<HTMLDivElement>) {
        if (typeof this.props.onClick == 'function')
            this.props.onClick(e);
    }
    onMousedown(e: React.MouseEvent<HTMLDivElement>) {
        if (typeof this.props.onMouseDown == 'function')
            this.props.onMouseDown(e);
    }
    render() {
        return <div onMouseDown={this.onMousedown.bind(this)} onClick={this.onClick.bind(this)} className={`vp-button vp-button-${this.props.shape} ${this.props.disabled == true ? "vp-button-disabled" : ""} vp-button-${this.props.size} vp-button-${this.props.type}`}>
            {this.props.icon && <VpIcon icon={this.props.icon}></VpIcon>}
            {this.props.shape != 'icon' && (this.props.text ? <span>{this.props.text}</span> : <span>{this.props.children}</span>)}
        </div>
    }
}
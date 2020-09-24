

import * as React from "react";
interface VpCheckProps {
    disabled: boolean,
    checked: boolean,
    type: 'box' | 'radio',
    onChange?: (checked: boolean) => void
}
export class VpCheck extends React.Component<VpCheckProps> {
    defaultProps: VpCheckProps = {
        disabled: false,
        checked: false,
        type: 'box'
    }
    private ele: HTMLElement;
    onChange() {
        if (this.props.disabled == true) return;
        if (typeof this.props.onChange == 'function') {
            this.props.onChange(this.props.checked);
        }
        else {
            if (this.ele instanceof HTMLElement) {
                if (this.ele.classList.contains('vp-switch-checked')) this.ele.classList.remove('vp-switch-checked')
                else this.ele.classList.add('vp-switch-checked')
            }
        }
    }
    render() {
        return <div ref={ele => this.ele = ele} onClick={this.onChange.bind(this)} className={`vp-check ${this.props.disabled == true ? "vp-check-disabled" : ""} ${this.props.checked == true ? "vp-check-checked" : ""}`}>
            <span className={`vp-check-type-${this.props.type}`}></span>
            {this.props.children}
        </div>
    }
}
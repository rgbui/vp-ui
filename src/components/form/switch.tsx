
import * as React from "react";
interface VpSwitchProps {
    disabled: boolean,
    checked: boolean,
    onChange?: (checked: boolean) => void,
    size?: string
}
export class VpSwitch extends React.Component<VpSwitchProps>{
    defaultProps: VpSwitchProps = {
        disabled: false,
        checked: false
    }
    constructor(props) {
        super(props);
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
        return <div ref={ele => this.ele = ele} onClick={this.onChange.bind(this)} className={`vp-switch ${this.props.disabled == true ? "vp-switch-disabled" : ""} ${this.props.checked ? "vp-switch-checked" : ""}`}></div>
    }
}
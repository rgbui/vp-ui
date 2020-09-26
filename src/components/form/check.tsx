

import * as React from "react";
interface VpCheckProps {
    disabled: boolean,
    checked: boolean,
    type: 'box' | 'radio',
    onChange?: (checked: boolean) => void
}
export function VpCheck(props: VpCheckProps) {
    var [isChecked, setCheck] = React.useState(typeof props.checked == 'boolean' ? props.checked : false);
    React.useEffect(() => {
        if (typeof props.onChange == 'function') props.onChange(isChecked);
    }, [isChecked]);
    var click = () => {
        if (props.disabled != true) {
            setCheck(!isChecked);
        }
    }
    return <div onClick={click} className={`vp-check ${this.props.disabled == true ? "vp-check-disabled" : ""} ${this.props.checked == true ? "vp-check-checked" : ""}`}>
        <span className={`vp-check-type-${this.props.type}`}></span>
        {this.props.children}
    </div>
}

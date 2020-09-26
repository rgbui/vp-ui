
import * as React from "react";
interface VpSwitchProps {
    disabled: boolean,
    checked: boolean,
    onChange?: (checked: boolean) => void,
    size?: string
}
export function VpSwitch(props: VpSwitchProps) {
    var [isChecked, setCheck] = React.useState(typeof props.checked == 'boolean' ? props.checked : false);
    React.useEffect(() => {
        if (typeof props.onChange == 'function') props.onChange(isChecked);
    },[isChecked]);
    var click=()=>{
        if (props.disabled != true) {
            setCheck(!isChecked);
        }
    }
    return <div onClick={click} className={`vp-switch ${this.props.disabled == true ? "vp-switch-disabled" : ""} ${this.props.checked ? "vp-switch-checked" : ""}`}></div>
}

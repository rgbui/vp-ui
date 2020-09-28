

import * as React from "react";
import VpIcon from "../layout/icon";
interface VpNumberProps {
    disabled?: boolean;
    readonly?: boolean;
    max?: number;
    min?: number;
    value?: number;
    step?: number;
    precision?: number;
    onChange?: () => void;
    onPressEnter?: () => void;
    unit?: React.ReactNode,
    formatter?: (value: string | number) => string,
    parser?: (value: string) => number
}
export function VpNumber(props: VpNumberProps) {
    var [value, setValue] = React.useState(typeof props.value == 'number' ? props.value : 0);
    var step = typeof props.step == 'number' ? props.step || 1 : 1;
    var setIncrease = () => {
        setValue(value + step);
    }
    var setDecrease = () => {
        setValue(value - step);
    }
    var keydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Down') {
            setDecrease();
        }
        else if (e.key == 'Up') {
            setIncrease();
        }
        else if (e.key == 'Enter') {

        }
    }
    return <div className={`vp-number`}>
        <input type='text' value={props.formatter ? props.formatter(value) : value} onKeyDown={keydown} />
        <div className='vp-number-operators'>
            <VpIcon icon='angle-down:font' ></VpIcon>
            <VpIcon icon='angle-up:font'></VpIcon>
        </div>
    </div>
}
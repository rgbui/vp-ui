

import * as React from "react";
import VpIcon from "../layout/icon";
interface VpTagsProps {
    disabled: boolean,
    value?: string[],
    onChange?: (value: string[]) => void,
    icon?: string
}
export function VpTags(props: VpTagsProps) {
    var [value, setTags] = React.useState(Array.isArray(props.value) ? props.value : []);
    React.useEffect(() => {
        if (typeof props.onChange == 'function') props.onChange(value);
    },[value])
    var removeTag = (index, e: React.MouseEvent<HTMLDivElement>) => {
        if (props.disabled == true) return;
        (value as string[]).splice(index, 1);
        setTags(value);
        e.stopPropagation();
    }
    var keydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (props.disabled == true) return;
        if (event.key == 'Backspace' && !event.currentTarget.value) {
            if (value.length > 0) {
                value.splice(value.length - 1, 1);
                setTags(value);
            }
            return;
        }
        if (event.key == 'Enter' || event.key == 'Space') {
            event.preventDefault();
            value.push(event.currentTarget.value);
            setTags(value);
            event.currentTarget.value = '';
        }
    }
    var input: HTMLInputElement;
    var focus = () => {
        if (input) {
            if (props.disabled == true) return;
            if (document.activeElement === input) return;
            input.focus();
        }
    }
    return <div onMouseDown={focus} className={`vp-tags ${props.disabled == true ? "vp-tags-disabled" : ""}`}>
        {value.map((v, i) => <a><span>{v}</span><VpIcon onMouseDown={(e) => removeTag(i, e)} icon={props.icon || "remove:font"}></VpIcon></a>)}
        <input ref={(ele) => input = ele} type='text' onKeyDown={keydown} />
    </div>
}
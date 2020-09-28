
import * as React from "react";
interface VpSliderProps {
    value: number,
    /**值为 true 时，VpSlider 为垂直方向
     * 
     */
    vertical: boolean,
    onChange?: (value: Boolean) => void
}
export function VpSlider(props: VpSliderProps) {
    var [value, setValue] = React.useState(props.value || 0);
    var mousedown=(event:React.MouseEvent<HTMLDivElement>)=>{

    }
    document.addEventListener('mousemove', (event: MouseEvent) => {

    });
    document.addEventListener('mouseup', function (event) {

    })
    return <div className={`vp-slider`}>
        <div className='vp-slider-value' style={{ width: value + "%" }}></div>
        <div className='vp-slider-dot' onMouseDown={mousedown} style={{ width: value + '%' }} ></div>
    </div>
}
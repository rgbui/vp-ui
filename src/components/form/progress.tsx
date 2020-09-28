import * as React from "react";
import VpIcon from "../layout/icon";
interface VpProgressProps {
    percent: number,
    th: number,
    type: 'line' | "circle",
    trailColor: string,
    valueColor: string,
    showInfo?: boolean
}
export function VpProgress(props: VpProgressProps) {
    if (props.type == 'line' || typeof props.type == 'undefined') {
        return <div className='vp-progress'>
            <div className={`vp-progress-line`} style={{ color: props.trailColor }}>
                <div className='vp-progress-bar' style={{ width: (props.percent || 0) + "%", color: props.valueColor }}></div>
            </div>
            {props.showInfo && <div className='vp-progress-showinfo'>{(props.percent || 0)}%</div>}
        </div>
    }
    else if (props.type == 'circle')
    {

    }
}
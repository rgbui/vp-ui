import * as  React from "react"

interface VpPanelProps {
    width?: number,
    height?: number,
    labelWidth?: number,
    labelAlign?: string,
    labelValign?: string,
    rowHeight?: number,
    rowGap?: number,
    colGap?: number,
}
class VpPanel extends React.Component<VpPanelProps> {
    constructor(props: VpPanelProps) {
        super(props)
    }
    render() {
        return <div className='vp-panel'>{this.props.children}</div>
    }
}

interface VpRowProps {
    label?: string,
    labelWidth?: number,
    labelAlign?: string,
    labelValign?: string,
    rowHeight?: number,
    rowGap?: number,
    colGap?: number,
    align?: string,
    valign?: string,
    width?: number,
    height?: number
}
class VpRow extends React.Component<VpRowProps> {
    constructor(props: VpRowProps) {
        super(props)
    }
    render() {
        if (this.props.label) {
            return <div className='vp-row-label'>
                <div className='vp-label'>{this.props.label}</div>
                <div className='vp-row'>{this.props.children}</div>
            </div>
        }
        else {
            return <div className='vp-row'>{this.props.children}</div>
        }
    }
}
interface VpColProps {
    span?: number;
    width?: number;
    align?: string,
    valign?: string,
}
class VpCol extends React.Component<VpColProps> {
    constructor(props: VpColProps) {
        super(props)
    }
}


export { VpPanel, VpRow, VpCol }

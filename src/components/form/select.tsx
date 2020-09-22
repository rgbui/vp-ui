
// import React,{ Component, ReactNode } from "react";
import { default as VpIcon } from "../layout/icon";
import { _ } from "../../util/list";
import * as React from "react";
interface VpSelectProps {
    mode: 'drop' | 'text' | 'multiple' | 'tags',
    value: string | string[] | number | number[],
    options?: VpOptionProps[],
    dropdownRender?: (option: VpOptionProps) => React.ReactNode,
    optionRender?: (option: VpOptionProps) => React.ReactNode,
    onChange?: (value: string | string[] | number | number[], options: VpOptionProps | VpOptionProps[]) => void,
    bordered?: boolean,
    disabled?: boolean,
    showArrow?: boolean,
    allowEdit?: boolean
}
interface VpSelectState {
    spread: boolean
}
export const { Provider, Consumer } = React.createContext(null);
export class VpSelect extends React.Component<VpSelectProps, VpSelectState>{
    state = {
        spread: false
    }
    constructor(props) {
        super(props);
    }
    el: HTMLElement;
    render() {
        var optionsNodes = Array.isArray(this.props.options) ? this.props.options.map(x => <VpOption {...x} deep={0}></VpOption>) : this.props.children
        if (this.props.mode == 'drop') {
            return <Provider value={this}>
                <div ref={(el) => { this.el = el; }} tabIndex={1} onBlur={this.onBlur.bind(this)} className={`vp-select ${this.props.bordered ? "vp-select-border" : ""} ${this.props.disabled ? "vp-select-disabled" : ""}`} >
                    <div className='vp-select-current' onClick={this.onSpread.bind(this)}>
                        <span>{this.props.value}</span>
                        {this.props.showArrow != false && <VpIcon icon='angle-down:font'></VpIcon>}
                    </div>
                    {this.state.spread && <div className='vp-select-drop' >
                        {optionsNodes && { optionsNodes }}
                    </div>}
                </div>
            </Provider>
        }
        else if (this.props.mode == 'text' || typeof this.props.mode == 'undefined') {
            return <Provider value={this}>
                <div ref={(el) => { this.el = el; }} tabIndex={1} onBlur={this.onBlur.bind(this)} className={`vp-select ${this.props.bordered ? "vp-select-border" : ""} ${this.props.disabled ? "vp-select-disabled" : ""}`} >
                    <div className='vp-select-current' onClick={this.onSpread.bind(this)}>
                        <input type='text' readOnly={this.props.allowEdit == true ? true : false} value={(this.props.value as string)} />
                        {this.props.showArrow != false && <VpIcon icon='angle-down:font'></VpIcon>}
                    </div>
                    {this.state.spread && <div className='vp-select-drop' >
                        {optionsNodes && { optionsNodes }}
                    </div>}
                </div>
            </Provider>
        }
        else if (this.props.mode == 'multiple') {

        }
        else if (this.props.mode == 'tags') {

        }
    }
    onBlur(e) {
        this.setState({ spread: false });
    }
    onSpread() {
        this.setState({ spread: !this.state.spread }, () => {
            this.el.focus();
        });
    }
    onSelect(option: VpOptionProps) {
        this.setState({ spread: false });
        if (this.props.mode == 'multiple') {
            var values: any[] = Array.isArray(this.props.value) ? this.props.value : [];
            var ov = values.find(x => x == option.value);
            if (!ov) values.push(option.value);
            var options = this.props.options || this.pickChildOptions;
            var ops = options.filter(x => values.includes(x.value));
            if (typeof this.props.onChange == 'function') this.props.onChange(values, ops);
        }
        else if (typeof this.props.onChange == 'function') this.props.onChange(option.value, option);
    }
    private getDropdownTexts() {
        if (this.props.mode == 'drop' || this.props.mode == 'text' || typeof this.props.mode == 'undefined') {
            var options = this.props.options || this.pickChildOptions;
            return _.treeFind(options, 'childs', x => this.props.value == x.value);
        }
        else if (this.props.mode == 'multiple') {
            var options = this.props.options || this.pickChildOptions;
            return _.treeFindAll(options, 'childs', x => Array.isArray(this.props.value) && (this.props.value as any[]).findIndex(z => z == x.value) > -1);
        }
        else return this.props.value;
    }
    private pickChildOptions: VpOptionProps[] = [];
    pickOptions(option: VpOptionProps) {
        if (Array.isArray(this.props.options)) return;
        var po = this.pickChildOptions.find(x => x === option);
        if (!po) this.pickChildOptions.push(option);
    }
}
interface VpOptionProps {
    text: string,
    value: any,
    type?: 'divider',
    disabled?: boolean,
    childs?: VpOptionProps[],
    icon?: string,
    label?: string,
    deep?: number
}
export class VpOption extends React.Component<VpOptionProps>{
    constructor(props) {
        super(props);
    }
    private select: VpSelect;
    onSelect() {
        if (this.select) {
            this.select.onSelect(this.props);
        }
    }
    render() {
        if (this.props.type == 'divider') return <div className='vp-select-option-divider'></div>
        else if (Array.isArray(this.props.childs)) return <div className='vp-select-option-group'>
            <div className='vp-select-option-group-label' >{this.props.text}</div>
            <div className='vp-select-option-group-box'>
                {
                    this.props.childs.map(x => <VpOption {...x} deep={this.props.deep + 1}></VpOption>)
                }
            </div>
        </div>
        else {
            var op = (select: VpSelect) => {
                if (select) {
                    this.select = select;
                    this.select.pickOptions(this.props);
                    var selected: boolean = false;
                    if (this.select.props.value && (this.select.props.mode == 'drop' || this.select.props.mode == 'text')) {
                        selected = this.select.props.value === this.props.value;
                    }
                    else if (Array.isArray(this.select.props.value) && this.select.props.mode == 'multiple') {
                        selected = (this.select.props.value as any[]).find(x => x === this.props.value)
                    }
                    var childsOptions;
                    if (Array.isArray(this.props.childs)) {
                        childsOptions = this.props.childs.map(x => <VpOption {...x} deep={this.props.deep + 1}></VpOption>)
                    }
                    if (select && select.props.optionRender) {
                        return <>
                            <div className={`vp-select-option-item ${selected ? "vp-select-option-item-selected" : ""} ${this.props.disabled == true ? "vp-select-option-item-disabled" : ""}`} onClick={this.onSelect.bind(this)}>{select.props.optionRender(this.props as VpOptionProps)}</div>
                            {childsOptions && <div className='vp-select-option-items'>{childsOptions}</div>}
                        </>
                    }
                    else return <><div className={`vp-select-option-item ${selected ? "vp-select-option-item-selected" : ""} ${this.props.disabled == true ? "vp-select-option-item-disabled" : ""}`} onClick={this.onSelect.bind(this)}>
                        {this.props.icon && <VpIcon icon={this.props.icon}></VpIcon>}
                        <span>{this.props.text}</span>
                        {this.props.label && <label>{this.props.label}</label>}
                    </div>{childsOptions && <div className='vp-select-option-items'>{childsOptions}</div>}
                    </>
                }
            }
            return <Consumer>{op}</Consumer>
        }
    }
}
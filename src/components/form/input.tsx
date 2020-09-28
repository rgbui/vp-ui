// import { Component, ReactNode, MouseEvent, ChangeEvent, KeyboardEvent } from "react";
import { default as VpIcon } from "../layout/icon";
import * as React from "react";
interface VpInputProps {
    display?: 'stretch' | 'inline-block',
    width?: number,
    height?: number,
    type: 'text' | 'password' | 'textarea' | 'search',
    placeholder?: string,
    value?: string,
    disabled?: boolean;
    readonly?: boolean;
    maxLength?: number;
    bordered?: boolean,
    prefix?: string | React.ReactNode,
    suffix?: string | React.ReactNode,
    allowClear?: boolean,
    size?: 'large' | 'middle' | 'small';
    onChange?: (newValue: string) => void;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    /**
     * textarea
     */
    autoSize?: boolean,
    /**
     * password
     * 
     */
    pwdHideToggle?: boolean,
    pwdIcon?: (visible) => React.ReactNode
}
interface VpInputState {
    pwdVisibleIcon: boolean
}
export class VpInput extends React.Component<VpInputProps, VpInputState>{
    defaultProps: VpInputProps = {
        type: 'text',
        size: 'middle',
        bordered: true,
        disabled: false,
        readonly: false
    }
    state = {
        pwdVisibleIcon: false
    }
    onChange(e: React.ChangeEvent<HTMLElement>) {
        this.onSave((e.target as HTMLInputElement).value)
    }
    onKeyDown(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (e.key == 'Enter') {
            this.onSave((e.target as HTMLInputElement).value);
            if (typeof this.props.onPressEnter == 'function')
                this.props.onPressEnter(e);
        }
    }
    onSave(willChangeValue: string) {
        if (typeof this.props.onChange == 'function')
            this.props.onChange(willChangeValue);
    }
    onPwdVisibleIcon(e: React.MouseEvent<HTMLElement>) {
        this.setState({ pwdVisibleIcon: !this.state.pwdVisibleIcon });
    }
    render() {
        var inputNode: React.ReactNode;
        if (this.props.type == 'text' || this.props.type == 'search') inputNode = <input value={this.props.value} onKeyDown={this.onKeyDown} onChange={this.onChange} type='text' />
        else if (this.props.type == 'password') inputNode = <div><input type='password' value={this.props.value} onKeyDown={this.onKeyDown} onChange={this.onChange} />
            <input type='text' value={this.props.value} onKeyDown={this.onKeyDown} onChange={this.onChange} /></div>
        else if (this.props.type == 'textarea') inputNode = <textarea value={this.props.value} onKeyDown={this.onKeyDown} onChange={this.onChange}></textarea>
        var prefix: React.ReactNode = this.props.prefix, suffix: React.ReactNode = this.props.suffix;
        if (this.props.type == 'search' && !suffix) suffix = <VpIcon icon='search:font'></VpIcon>;
        else if (this.props.type == 'password' && this.props.pwdHideToggle == true) {
            if (typeof this.props.pwdIcon == 'function') {
                suffix = <span onClick={this.onPwdVisibleIcon.bind(this)}>{this.props.pwdIcon(this.state.pwdVisibleIcon)}</span>
            }
            else {
                suffix = <VpIcon onClick={this.onPwdVisibleIcon.bind(this)} icon={this.state.pwdVisibleIcon == true ? "eye:font" : "eye-hidden:font"}></VpIcon>
            }
        }
        return <div className='vp-input'>{prefix}{inputNode}{suffix}</div>
    }
}
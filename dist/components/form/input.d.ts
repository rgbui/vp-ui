import * as React from "react";
interface VpInputProps {
    display?: 'stretch' | 'inline-block';
    width?: number;
    height?: number;
    type: 'text' | 'password' | 'textarea' | 'search';
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    readonly?: boolean;
    maxLength?: number;
    bordered?: boolean;
    prefix?: string | React.ReactNode;
    suffix?: string | React.ReactNode;
    allowClear?: boolean;
    size?: 'large' | 'middle' | 'small';
    onChange?: (newValue: string) => void;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    autoSize?: boolean;
    pwdHideToggle?: boolean;
    pwdIcon?: (visible: any) => React.ReactNode;
}
interface VpInputState {
    pwdVisibleIcon: boolean;
}
export declare class VpInput extends React.Component<VpInputProps, VpInputState> {
    defaultProps: VpInputProps;
    state: {
        pwdVisibleIcon: boolean;
    };
    onChange(e: React.ChangeEvent<HTMLElement>): void;
    onKeyDown(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void;
    onSave(willChangeValue: string): void;
    onPwdVisibleIcon(e: React.MouseEvent<HTMLElement>): void;
    render(): JSX.Element;
}
export {};

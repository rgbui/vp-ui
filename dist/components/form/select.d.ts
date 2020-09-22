import * as React from "react";
interface VpSelectProps {
    mode: 'drop' | 'text' | 'multiple' | 'tags';
    value: string | string[] | number | number[];
    options?: VpOptionProps[];
    dropdownRender?: (option: VpOptionProps) => React.ReactNode;
    optionRender?: (option: VpOptionProps) => React.ReactNode;
    onChange?: (value: string | string[] | number | number[], options: VpOptionProps | VpOptionProps[]) => void;
    bordered?: boolean;
    disabled?: boolean;
    showArrow?: boolean;
    allowEdit?: boolean;
}
interface VpSelectState {
    spread: boolean;
}
export declare const Provider: React.Provider<any>, Consumer: React.Consumer<any>;
export declare class VpSelect extends React.Component<VpSelectProps, VpSelectState> {
    state: {
        spread: boolean;
    };
    constructor(props: any);
    el: HTMLElement;
    render(): JSX.Element;
    onBlur(e: any): void;
    onSpread(): void;
    onSelect(option: VpOptionProps): void;
    private getDropdownTexts;
    private pickChildOptions;
    pickOptions(option: VpOptionProps): void;
}
interface VpOptionProps {
    text: string;
    value: any;
    type?: 'divider';
    disabled?: boolean;
    childs?: VpOptionProps[];
    icon?: string;
    label?: string;
    deep?: number;
}
export declare class VpOption extends React.Component<VpOptionProps> {
    constructor(props: any);
    private select;
    onSelect(): void;
    render(): JSX.Element;
}
export {};

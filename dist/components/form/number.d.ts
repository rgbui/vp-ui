import * as React from "react";
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
    unit?: React.ReactNode;
    formatter?: (value: string | number) => string;
    parser?: (value: string) => number;
}
export declare function VpNumber(props: VpNumberProps): JSX.Element;
export {};

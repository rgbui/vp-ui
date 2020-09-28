/// <reference types="react" />
interface VpSwitchProps {
    disabled: boolean;
    checked: boolean;
    onChange?: (checked: boolean) => void;
    size?: string;
}
export declare function VpSwitch(props: VpSwitchProps): JSX.Element;
export {};

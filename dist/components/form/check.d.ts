/// <reference types="react" />
interface VpCheckProps {
    disabled: boolean;
    checked: boolean;
    type: 'box' | 'radio';
    onChange?: (checked: boolean) => void;
}
export declare function VpCheck(props: VpCheckProps): JSX.Element;
export {};

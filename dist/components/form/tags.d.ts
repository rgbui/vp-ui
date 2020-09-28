/// <reference types="react" />
interface VpTagsProps {
    disabled: boolean;
    value?: string[];
    onChange?: (value: string[]) => void;
    icon?: string;
}
export declare function VpTags(props: VpTagsProps): JSX.Element;
export {};

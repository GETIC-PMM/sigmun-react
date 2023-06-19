/// <reference types="react" />
import { CompoundedComponent } from '../../utils/types';
declare const useToast: () => readonly [CompoundedComponent<import("react").HTMLAttributes<HTMLDivElement>> & {
    Header: CompoundedComponent<import("react").HTMLAttributes<HTMLDivElement>>;
    Body: CompoundedComponent<import("react").HTMLAttributes<HTMLDivElement>>;
}, (id: string, autohide: boolean, delay: number, options: unknown) => void];
export default useToast;

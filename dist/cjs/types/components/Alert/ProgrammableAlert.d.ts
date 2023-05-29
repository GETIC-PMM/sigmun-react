/// <reference types="react" />
import { CompoundedComponent } from '../../utils/types';
import { AlertType } from './types';
declare const useProgrammableAlert: () => readonly [CompoundedComponent<import("react").HTMLAttributes<HTMLDivElement>>, ({ message, type, duration, }: {
    message: string;
    type: AlertType;
    duration: number;
}) => void];
export default useProgrammableAlert;

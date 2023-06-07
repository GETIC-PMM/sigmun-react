/// <reference types="react" />
import { CompoundedComponent } from '../../utils/types';
import { BreadCrumbContainerProps, BreadCrumbItemProps } from './types';
export declare const InternalBreadCrumbContainer: React.ForwardRefRenderFunction<HTMLElement, BreadCrumbContainerProps>;
declare const BreadCrumb: CompoundedComponent<BreadCrumbContainerProps> & {
    Item: CompoundedComponent<BreadCrumbItemProps>;
};
export default BreadCrumb;

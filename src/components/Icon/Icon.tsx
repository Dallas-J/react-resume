import {FC, memo} from 'react';

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  svgRef?: React.Ref<SVGSVGElement>;
  transform?: string;
  viewBox?: string;
}

const Icon: FC<IconProps> = memo(({children, className, svgRef, transform, viewBox, ...props}) => (
  <svg
    className={className}
    fill="currentColor"
    ref={svgRef}
    transform={transform}
    viewBox={viewBox}
    width="128"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    {children}
  </svg>
));

export default Icon;

declare module '@fortawesome/react-fontawesome' {
  import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
  import { CSSProperties, ReactElement } from 'react';

  interface FontAwesomeIconProps {
    icon: IconDefinition | string[];
    className?: string;
    style?: CSSProperties;
    spin?: boolean;
    pulse?: boolean;
    flip?: 'horizontal' | 'vertical' | 'both';
    rotation?: 90 | 180 | 270;
    transform?: string | object;
    mask?: IconDefinition;
    symbol?: string | boolean;
    swapOpacity?: boolean;
    size?: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
    pull?: 'left' | 'right';
    border?: boolean;
    fixedWidth?: boolean;
    inverse?: boolean;
    listItem?: boolean;
    'aria-hidden'?: boolean | 'true' | 'false';
    'aria-label'?: string;
    tabIndex?: number;
    title?: string;
    titleId?: string;
  }

  export const FontAwesomeIcon: React.FC<FontAwesomeIconProps>;
}


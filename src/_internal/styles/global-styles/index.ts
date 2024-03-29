import {componentStyles} from '../component-styles';
import {animationStyles} from './animation-styles';
import {backdropStyles} from './backdrop-styles';
import {borderStyles} from './border-styles';
import {boxShadowStyles} from './box-shadow-styles';
import {colorStyles} from './color-styles';
import {commonStyles} from './common-styles';
import {fillStyles} from './fill-styles';
import {paddingStyles} from './padding-styles';
import {textStyles} from './text-styles';

export const globalStyles = [
  commonStyles,
  borderStyles,
  boxShadowStyles,
  paddingStyles,
  textStyles,
  colorStyles,
  fillStyles,
  animationStyles,
  componentStyles,
  backdropStyles,
];

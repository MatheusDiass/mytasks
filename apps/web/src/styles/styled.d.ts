import 'styled-components';
import { whiteTheme } from './themes';

declare module 'styled-components' {
  type ThemeType = typeof whiteTheme;

  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeType {}
}

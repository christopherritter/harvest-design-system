import { PaletteMode } from '@mui/material';

export const light = {
  mode: 'light' as PaletteMode,
  action: {
    activatedOpacity: 0.12,
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    focus: 'rgba(0, 0, 0, 0.12)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
  },
  primary: {
    main: '#012169',
    light: '#00109E',
    contrastText: '#FFF',
  },
  secondary: {
    main: '#6F9D00',
    light: '#8BC400',
    dark: '#5B8000',
    contrastText: '#FFF',
  },
  error: {
    main: '#C42C14',
    light: '#009C48',
    dark: '#E93F25',
  },
  warning: {
    main: '#E3740F',
    light: '#FFAD00',
    dark: '#A65408',
  },
  info: {
    main: '#007DBA',
    light: '#008EDB',
    dark: '#004466',
  },
  success: {
    main: '#009C48',
    light: '#00AD50',
    dark: '#00853E',
  },
  text: {
    primary: '#3B3B3D',
    secondary: '#012169',
    disabled: '#6D6E71',
    hint: '#012169',
  },
  divider: '#EDEEEE',
  background: {
    default: '#F4F5F5',
    paper: '#FFF',
  },
};

export const dark = {
  mode: 'dark' as PaletteMode,
  action: {
    activatedOpacity: 0.24,
    active: '#fff',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
  },
  background: {
    default: '#001E3C',
    paper: '#0A1929',
  },
  divider: '#132F4C',
  info: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#0288d1',
    light: '#4fc3f7',
    main: '#29b6f6',
  },
  primary: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    main: '#3399FF',
  },
  secondary: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#ab47bc',
    light: '#f3e5f5',
    main: '#ce93d8',
  },
  success: {
    contrastText: 'rgba(0, 0, 0, 0.87)',
    main: '#1DB45A',
  },
  text: {
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    primary: '#fff',
    secondary: '#AAB4BE',
  },
};

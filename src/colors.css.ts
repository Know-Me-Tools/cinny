import { createTheme } from '@vanilla-extract/css';
import { color } from 'folds';

export const knowMeLightTheme = createTheme(color, {
  Background: {
    Container: '#F7F7F8',
    ContainerHover: '#EEEEF1',
    ContainerActive: '#E8ECF0',
    ContainerLine: '#D8DEE6',
    OnContainer: '#0B0F14',
  },

  Surface: {
    Container: '#FFFFFF',
    ContainerHover: '#F7F7F8',
    ContainerActive: '#EEEEF1',
    ContainerLine: '#D8DEE6',
    OnContainer: '#0B0F14',
  },

  SurfaceVariant: {
    Container: '#EEEEF1',
    ContainerHover: '#E8ECF0',
    ContainerActive: '#D8DEE6',
    ContainerLine: '#C8CDD5',
    OnContainer: '#4B5563',
  },

  Primary: {
    Main: '#E04E28',
    MainHover: '#CA4624',
    MainActive: '#BD4222',
    MainLine: '#B03D20',
    OnMain: '#FFFFFF',
    Container: '#F2D6CF',
    ContainerHover: '#EDC8BF',
    ContainerActive: '#E8BAAF',
    ContainerLine: '#DFA99B',
    OnContainer: '#7A2A16',
  },

  Secondary: {
    Main: '#0B0F14',
    MainHover: '#1A2029',
    MainActive: '#252C36',
    MainLine: '#333B47',
    OnMain: '#F7F7F8',
    Container: '#E8ECF0',
    ContainerHover: '#D8DEE6',
    ContainerActive: '#C8CDD5',
    ContainerLine: '#B7C0CA',
    OnContainer: '#0B0F14',
  },

  Success: {
    Main: '#017343',
    MainHover: '#01683C',
    MainActive: '#016239',
    MainLine: '#015C36',
    OnMain: '#FFFFFF',
    Container: '#D4F2E3',
    ContainerHover: '#C3ECD8',
    ContainerActive: '#B3E5CD',
    ContainerLine: '#99D8BC',
    OnContainer: '#01512F',
  },

  Warning: {
    Main: '#864300',
    MainHover: '#793C00',
    MainActive: '#723900',
    MainLine: '#6B3600',
    OnMain: '#FFFFFF',
    Container: '#F3E2D1',
    ContainerHover: '#ECD5BD',
    ContainerActive: '#E4C7A9',
    ContainerLine: '#DAB995',
    OnContainer: '#5E2F00',
  },

  Critical: {
    Main: '#DC2626',
    MainHover: '#C92222',
    MainActive: '#BD2020',
    MainLine: '#B11F1F',
    OnMain: '#FFFFFF',
    Container: '#F5D6D6',
    ContainerHover: '#EFC6C6',
    ContainerActive: '#E8B6B6',
    ContainerLine: '#DFA0A0',
    OnContainer: '#7F1D1D',
  },

  Other: {
    FocusRing: 'rgba(224 78 40 / 50%)',
    Shadow: 'rgba(11 15 20 / 18%)',
    Overlay: 'rgba(11 15 20 / 50%)',
  },
});

export const knowMeDarkTheme = createTheme(color, {
  Background: {
    Container: '#0B0F14',
    ContainerHover: '#0F1620',
    ContainerActive: '#141C26',
    ContainerLine: '#1E2D3D',
    OnContainer: '#E8EDF3',
  },

  Surface: {
    Container: '#0F1620',
    ContainerHover: '#141C26',
    ContainerActive: '#1A2431',
    ContainerLine: '#1E2D3D',
    OnContainer: '#E8EDF3',
  },

  SurfaceVariant: {
    Container: '#141C26',
    ContainerHover: '#1A2431',
    ContainerActive: '#1E2D3D',
    ContainerLine: '#2A3848',
    OnContainer: '#A7B0BC',
  },

  Primary: {
    Main: '#FF6A3D',
    MainHover: '#FF7A51',
    MainActive: '#FF8559',
    MainLine: '#E95D34',
    OnMain: '#0B0F14',
    Container: '#2A1510',
    ContainerHover: '#351B14',
    ContainerActive: '#402018',
    ContainerLine: '#5E2D20',
    OnContainer: '#FFB49A',
  },

  Secondary: {
    Main: '#E8EDF3',
    MainHover: '#DDE5EE',
    MainActive: '#D2DCE7',
    MainLine: '#C2CEDB',
    OnMain: '#0B0F14',
    Container: '#1E2D3D',
    ContainerHover: '#26384B',
    ContainerActive: '#2E4358',
    ContainerLine: '#385064',
    OnContainer: '#E8EDF3',
  },

  Success: {
    Main: '#85E0BA',
    MainHover: '#70DBAF',
    MainActive: '#66D9A9',
    MainLine: '#5CD6A3',
    OnMain: '#0F3D2A',
    Container: '#0F3320',
    ContainerHover: '#123D27',
    ContainerActive: '#164A30',
    ContainerLine: '#1F7A54',
    OnContainer: '#CCF2E2',
  },

  Warning: {
    Main: '#E3BA91',
    MainHover: '#DFAF7E',
    MainActive: '#DDA975',
    MainLine: '#DAA36C',
    OnMain: '#3F2A15',
    Container: '#2A1D12',
    ContainerHover: '#352417',
    ContainerActive: '#402B1C',
    ContainerLine: '#7D542B',
    OnContainer: '#F3E2D1',
  },

  Critical: {
    Main: '#F87171',
    MainHover: '#F98080',
    MainActive: '#FA8F8F',
    MainLine: '#DE7D7D',
    OnMain: '#401C1C',
    Container: '#2A0E0A',
    ContainerHover: '#37110D',
    ContainerActive: '#441511',
    ContainerLine: '#803737',
    OnContainer: '#F5D6D6',
  },

  Other: {
    FocusRing: 'rgba(255 106 61 / 55%)',
    Shadow: 'rgba(0 0 0 / 80%)',
    Overlay: 'rgba(0 0 0 / 80%)',
  },
});

export const silverTheme = createTheme(color, {
  Background: {
    Container: '#DEDEDE',
    ContainerHover: '#D3D3D3',
    ContainerActive: '#C7C7C7',
    ContainerLine: '#BBBBBB',
    OnContainer: '#000000',
  },

  Surface: {
    Container: '#EAEAEA',
    ContainerHover: '#DEDEDE',
    ContainerActive: '#D3D3D3',
    ContainerLine: '#C7C7C7',
    OnContainer: '#000000',
  },

  SurfaceVariant: {
    Container: '#DEDEDE',
    ContainerHover: '#D3D3D3',
    ContainerActive: '#C7C7C7',
    ContainerLine: '#BBBBBB',
    OnContainer: '#000000',
  },

  Primary: {
    Main: '#1245A8',
    MainHover: '#103E97',
    MainActive: '#0F3B8F',
    MainLine: '#0E3786',
    OnMain: '#FFFFFF',
    Container: '#C4D0E9',
    ContainerHover: '#B8C7E5',
    ContainerActive: '#ACBEE1',
    ContainerLine: '#A0B5DC',
    OnContainer: '#0D3076',
  },

  Secondary: {
    Main: '#000000',
    MainHover: '#171717',
    MainActive: '#232323',
    MainLine: '#2F2F2F',
    OnMain: '#EAEAEA',
    Container: '#C7C7C7',
    ContainerHover: '#BBBBBB',
    ContainerActive: '#AFAFAF',
    ContainerLine: '#A4A4A4',
    OnContainer: '#0C0C0C',
  },

  Success: {
    Main: '#017343',
    MainHover: '#01683C',
    MainActive: '#016239',
    MainLine: '#015C36',
    OnMain: '#FFFFFF',
    Container: '#BFDCD0',
    ContainerHover: '#B3D5C7',
    ContainerActive: '#A6CEBD',
    ContainerLine: '#99C7B4',
    OnContainer: '#01512F',
  },

  Warning: {
    Main: '#864300',
    MainHover: '#793C00',
    MainActive: '#723900',
    MainLine: '#6B3600',
    OnMain: '#FFFFFF',
    Container: '#E1D0BF',
    ContainerHover: '#DBC7B2',
    ContainerActive: '#D5BDA6',
    ContainerLine: '#CFB499',
    OnContainer: '#5E2F00',
  },

  Critical: {
    Main: '#9D0F0F',
    MainHover: '#8D0E0E',
    MainActive: '#850D0D',
    MainLine: '#7E0C0C',
    OnMain: '#FFFFFF',
    Container: '#E7C3C3',
    ContainerHover: '#E2B7B7',
    ContainerActive: '#DDABAB',
    ContainerLine: '#D89F9F',
    OnContainer: '#6E0B0B',
  },

  Other: {
    FocusRing: 'rgba(0 0 0 / 50%)',
    Shadow: 'rgba(0 0 0 / 20%)',
    Overlay: 'rgba(0 0 0 / 50%)',
  },
});

const darkThemeData = {
  Background: {
    Container: '#1A1A1A',
    ContainerHover: '#262626',
    ContainerActive: '#333333',
    ContainerLine: '#404040',
    OnContainer: '#F2F2F2',
  },

  Surface: {
    Container: '#262626',
    ContainerHover: '#333333',
    ContainerActive: '#404040',
    ContainerLine: '#4D4D4D',
    OnContainer: '#F2F2F2',
  },

  SurfaceVariant: {
    Container: '#333333',
    ContainerHover: '#404040',
    ContainerActive: '#4D4D4D',
    ContainerLine: '#595959',
    OnContainer: '#F2F2F2',
  },

  Primary: {
    Main: '#BDB6EC',
    MainHover: '#B2AAE9',
    MainActive: '#ADA3E8',
    MainLine: '#A79DE6',
    OnMain: '#2C2843',
    Container: '#413C65',
    ContainerHover: '#494370',
    ContainerActive: '#50497B',
    ContainerLine: '#575086',
    OnContainer: '#E3E1F7',
  },

  Secondary: {
    Main: '#FFFFFF',
    MainHover: '#E5E5E5',
    MainActive: '#D9D9D9',
    MainLine: '#CCCCCC',
    OnMain: '#1A1A1A',
    Container: '#404040',
    ContainerHover: '#4D4D4D',
    ContainerActive: '#595959',
    ContainerLine: '#666666',
    OnContainer: '#F2F2F2',
  },

  Success: {
    Main: '#85E0BA',
    MainHover: '#70DBAF',
    MainActive: '#66D9A9',
    MainLine: '#5CD6A3',
    OnMain: '#0F3D2A',
    Container: '#175C3F',
    ContainerHover: '#1A6646',
    ContainerActive: '#1C704D',
    ContainerLine: '#1F7A54',
    OnContainer: '#CCF2E2',
  },

  Warning: {
    Main: '#E3BA91',
    MainHover: '#DFAF7E',
    MainActive: '#DDA975',
    MainLine: '#DAA36C',
    OnMain: '#3F2A15',
    Container: '#5E3F20',
    ContainerHover: '#694624',
    ContainerActive: '#734D27',
    ContainerLine: '#7D542B',
    OnContainer: '#F3E2D1',
  },

  Critical: {
    Main: '#E69D9D',
    MainHover: '#E28D8D',
    MainActive: '#E08585',
    MainLine: '#DE7D7D',
    OnMain: '#401C1C',
    Container: '#602929',
    ContainerHover: '#6B2E2E',
    ContainerActive: '#763333',
    ContainerLine: '#803737',
    OnContainer: '#F5D6D6',
  },

  Other: {
    FocusRing: 'rgba(255, 255, 255, 0.5)',
    Shadow: 'rgba(0, 0, 0, 1)',
    Overlay: 'rgba(0, 0, 0, 0.8)',
  },
};

export const darkTheme = createTheme(color, darkThemeData);

export const butterTheme = createTheme(color, {
  ...darkThemeData,
  Background: {
    Container: '#1A1916',
    ContainerHover: '#262621',
    ContainerActive: '#33322C',
    ContainerLine: '#403F38',
    OnContainer: '#FFFBDE',
  },

  Surface: {
    Container: '#262621',
    ContainerHover: '#33322C',
    ContainerActive: '#403F38',
    ContainerLine: '#4D4B43',
    OnContainer: '#FFFBDE',
  },

  SurfaceVariant: {
    Container: '#33322C',
    ContainerHover: '#403F38',
    ContainerActive: '#4D4B43',
    ContainerLine: '#59584E',
    OnContainer: '#FFFBDE',
  },

  Secondary: {
    Main: '#FFFBDE',
    MainHover: '#E5E2C8',
    MainActive: '#D9D5BD',
    MainLine: '#CCC9B2',
    OnMain: '#1A1916',
    Container: '#403F38',
    ContainerHover: '#4D4B43',
    ContainerActive: '#59584E',
    ContainerLine: '#666459',
    OnContainer: '#F2EED3',
  },
});

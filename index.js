const path = require('path')
const Color = require('color');

const blue = '#362BC7';
const lightBlue = Color(blue).lighten(0.5).toString();

const red = '#E7072C';
const lightRed = Color(red).lighten(0.5).toString();

const white = '#F2E4C9';

const yellow = '#E19B40';

const transparent = 'rgba(0,0,0,0)';

const colors = {
  black: white,
  red: red,
  green: red,
  yellow: yellow,
  blue: blue,
  magenta: yellow,
  cyan: lightBlue,
  white: white,
  lightBlack: lightBlue,
  lightRed: lightRed,
  lightGreen: lightRed,
  lightYellow: yellow,
  lightBlue: lightBlue,
  lightMagenta: yellow,
  lightCyan: lightBlue,
  lightWhite: white
}

const getImagePath = () => {
  const imagePath = path.join(__dirname, 'assets/backgrounds/falco.png');
  // Replace backslashes with forward slashes when on a Windows machine.
  // CSS background image URLs expect forward slashes.
  if (process.platform === 'win32') {
    return imagePath.replace(/\\/g, '/');
  }
  return imagePath
}

exports.decorateConfig = config => Object.assign({}, config, {
  colors,
  backgroundColor: transparent,
  borderColor: red,
  cursorColor: yellow,
  foregroundColor: yellow,
  selectionColor: Color(red).alpha(0.3).toString(),
  css: `
    ${config.css || ''}
    * {
      color: ${white};
    }

    .terms_terms {
        background: url("file://${getImagePath()}") center;
        background-size: cover;
    }

    .header_header * {
      background-color: black;
    }
    
    .tabs_nav .tabs_list .tab_tab {
      border: 0;
    }
  
    .tab_icon {
      width: 15px;
      height: 15px;
    }

    .tab_icon:hover {
      background-color: ${red};
    }

    .tab_tab::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background-color: ${red};
      transform: scaleX(0);
      transition: none;
    }
    .tab_tab.tab_active::before {
      transform: scaleX(1);
      transition: all 400ms cubic-bezier(0.0, 0.0, 0.2, 1)
    }
 `
})
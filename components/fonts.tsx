import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: '729';
        font-style: normal;
        font-weight: 700;
        ont-display: swap;
        src: url('./fonts/729/729-Bold.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: '729';
        font-style: italic;
        font-weight: 700;
        ont-display: swap;
        src: url('./fonts/729/729Italic-Bold.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: '729';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/729/729-Semimedium.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: '729';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('./fonts/729/729Italic-Semimedium.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: "iA Writer Duospace";
        font-weight: normal;
        font-style: normal;
        font-display: swap;
        src: url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Regular.eot") format("embedded-opentype"),
          url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Regular.woff2") format("woff2"),
          url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Regular.woff") format("woff");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: "iA Writer Duospace";
        font-weight: normal;
        font-style: italic;
        font-display: swap;
        src: url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Italic.eot") format("embedded-opentype"),
          url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Italic.woff2") format("woff2"),
          url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Italic.woff") format("woff");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: "iA Writer Duospace";
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        src: url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Bold.eot") format("embedded-opentype"),
          url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Bold.woff2") format("woff2"),
          url(".fonts/iAWriterDuoSpace/iAWriterDuospace-Bold.woff") format("woff");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      @font-face {
        font-family: "iA Writer Duospace";
        font-weight: bold;
        font-style: italic;
        font-display: swap;
        src: url(".fonts/iAWriterDuoSpace/iAWriterDuospace-BoldItalic.eot") format("embedded-opentype"),
          url(".fonts/iAWriterDuoSpace/iAWriterDuospace-BoldItalic.woff2") format("woff2"),
          url(".fonts/iAWriterDuoSpace/iAWriterDuospace-BoldItalic.woff") format("woff");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
)

export default Fonts
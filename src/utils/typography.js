import Typography from "typography";
import wikipedia from "typography-theme-wikipedia";
wikipedia.headerFontFamily = ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'];
wikipedia.bodyFontFamily = ['Georgia', 'serif'];
wikipedia.baseFontSize = '18px';

const typography = new Typography(wikipedia);


export default typography;

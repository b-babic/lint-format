import colors from "windicss/colors";
import typography from "windicss/plugin/typography";

module.exports = {
  darkMode: false,
  plugins: [typography],
  theme: {
    extend: {
      ...colors,
    },
  },
};

import type { Preview } from "@storybook/react";
import "../styles/globals.css";
import "../styles/mui.css";
import "../styles/Home.module.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => {
        return a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
  },
};

export default preview;

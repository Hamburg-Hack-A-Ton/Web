import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@jackatdjl/djl-ui/sonner";
import { DefaultText } from "@jackatdjl/djl-ui/classNames";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <SpeedInsights />
          <Analytics />
          <link rel="stylesheet" href="https://use.typekit.net/nib2aic.css" />
          <div
            className={
              DefaultText +
              " antialiased bg-background duration-200 text-foreground"
            }
          >
            <AnimatePresence>
              <Story />
            </AnimatePresence>
            <Toaster />
          </div>
        </div>
      );
    },
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
  ],
};

export default preview;

import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const formStyle = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  variants: {
    variant: {
      "create-group": {
        gap: "1.6rem",
      },
      "group-setting": {
        gap: "2rem",
      },
    },
  },
});

export const nameFormLabelStyle = recipe({
  base: {
    color: theme.color.white,
  },

  variants: {
    variant: {
      "create-group": {
        ...theme.font.Head2_SB_18,
      },
      "group-setting": {
        ...theme.font.Caption2_SB_12,
      },
    },
  },
});

export const nameFormInputStyle = recipe({
  base: {
    color: theme.color.white,
    selectors: {
      "&::placeholder": {
        color: theme.color.mg4,
      },
    },
  },
  variants: {
    variant: {
      "create-group": {
        ...theme.font.Title2_M_16,
      },
      "group-setting": {
        ...theme.font.Body1_M_14,
      },
    },
  },
});

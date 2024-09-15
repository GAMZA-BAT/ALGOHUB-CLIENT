import { theme } from "@/styles/themes.css";
import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: {
    display: "flex",
    gap: "1rem",
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',

    ':disabled': {
      opacity: "0.7",
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      small: {
        padding: "1rem 0",
        borderRadius: "6px",
        ...theme.font.Body3_SB_14,
      },
      medium: {
        padding: "1.5rem 0",
        borderRadius: "5px",
        ...theme.font.Title1_SB_16
      },
      large: {
        padding: "1.5rem 0",
        borderRadius: "5px",
        ...theme.font.Head2_SB_18
      }
    },
    color: {
      purple: {
        color: theme.color.white,
        backgroundColor: theme.color.purple,
      },
      gray: {
        color: theme.color.lg2,
        backgroundColor: theme.color.mg4,
      },
      lg: {
        color: theme.color.purple2,
        backgroundColor: theme.color.lg2,
      }
    }
  }
});
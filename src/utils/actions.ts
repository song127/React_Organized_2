import { enqueueSnackbar, VariantType } from "notistack";

export const showSnackbar = (
  variant: VariantType = "success",
  message: string,
  align: { ver: "top" | "bottom"; hor: "right" | "left" | "center" } = { ver: "top", hor: "right" },
) => {
  enqueueSnackbar(message, {
    variant,
    anchorOrigin: {
      vertical: align.ver,
      horizontal: align.hor,
    },
  });
};

import styled from "@emotion/styled";
import { MaterialDesignContent } from "notistack";

import COLORS from "@/styles/global/globalColor";

export const SnackbarSuccessUI = styled(MaterialDesignContent)`
  * {
    color: ${COLORS.white};
  }
  &.notistack-MuiContent-success {
    background-color: ${COLORS.dark_1};
    border: 0.0938rem solid ${COLORS.green_3};
    border-radius: 0.4rem;
  }
`;

export const SnackbarErrorUI = styled(MaterialDesignContent)`
  * {
    color: ${COLORS.white};
  }
  &.notistack-MuiContent-error {
    background-color: ${COLORS.dark_1};
    border: 0.0938rem solid ${COLORS.red_dvx};
    border-radius: 0.4rem;
  }
`;

export const SnackbarWarningUI = styled(MaterialDesignContent)`
  * {
    color: ${COLORS.white};
  }
  &.notistack-MuiContent-warning {
    background-color: ${COLORS.dark_1};
    border: 0.0938rem solid ${COLORS.yellow_3};
    border-radius: 0.4rem;
  }
`;

export const SnackbarInfoUI = styled(MaterialDesignContent)`
  * {
    color: ${COLORS.white};
  }
  &.notistack-MuiContent-info {
    background-color: ${COLORS.dark_1};
    border: 0.0938rem solid ${COLORS.blue_3};
    border-radius: 0.4rem;
  }
`;

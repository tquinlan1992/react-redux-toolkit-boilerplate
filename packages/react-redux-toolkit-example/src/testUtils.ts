import { RootState, extraArgsConnectProps } from "./store";
import {
  createTestComponent,
  mockHooks,
} from "@tquinlan1992/react-redux-toolkit/dist/testUtils";

const testUtilsExtraArgs = {
  ...extraArgsConnectProps,
  extraArgsMapHooks: {
    mockHooks: mockHooks(extraArgsConnectProps.extraArgsHooks.hooks),
  },
};

export const testComponent = createTestComponent<
  RootState,
  typeof testUtilsExtraArgs
>(testUtilsExtraArgs);

import { UI_RUNTIME_CHECK_REGEX } from './src/makeWorklet';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveWorkletData(times?: number): R;
      toHaveInlineStyleWarning(times?: number): R;
      toHaveUIRuntimeCheck(times?: number): R;
    }
  }
}

const WORKLET_REGEX = /var _worklet_[0-9]+_init_data/g;
const INLINE_STYLE_WARNING_REGEX =
  /console\.warn\(require\("react-native-reanimated"\)\.getUseOfValueInStyleWarning\(\)\)/g;

expect.extend({
  toHaveWorkletData(received: string, expectedMatchCount: number = 1) {
    const receivedMatchCount = received.match(WORKLET_REGEX)?.length;

    if (receivedMatchCount === expectedMatchCount) {
      return {
        message: () =>
          `Reanimated: expected code to have worklet data ${expectedMatchCount} times`,
        pass: true,
      };
    }
    return {
      message: () =>
        `Reanimated: expected code to have worklet data ${expectedMatchCount} times, but found ${receivedMatchCount}`,
      pass: false,
    };
  },
});

expect.extend({
  toHaveInlineStyleWarning(received: string, expectedMatchCount: number = 1) {
    const receivedMatchCount = received.match(
      INLINE_STYLE_WARNING_REGEX
    )?.length;

    if (receivedMatchCount === expectedMatchCount) {
      return {
        message: () =>
          `Reanimated: expected to have inline style warning ${expectedMatchCount} times`,
        pass: true,
      };
    }
    return {
      message: () =>
        `Reanimated: expected to have inline style warning ${expectedMatchCount} times, but found ${receivedMatchCount}`,
      pass: false,
    };
  },
});

expect.extend({
  toHaveUIRuntimeCheck(received: string, expectedMatchCount: number = 1) {
    const receivedMatchCount = received.match(UI_RUNTIME_CHECK_REGEX)?.length;

    if (receivedMatchCount === expectedMatchCount) {
      return {
        message: () =>
          `Reanimated: expected to have UI runtime check ${expectedMatchCount} times`,
        pass: true,
      };
    }
    return {
      message: () =>
        `Reanimated: expected to have UI runtime check ${expectedMatchCount} times, but found ${receivedMatchCount}`,
      pass: false,
    };
  },
});

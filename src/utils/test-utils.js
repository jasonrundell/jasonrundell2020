export function catchWarnings() {
  const originalConsoleError = global.console.error
  beforeEach(() => {
    /**
     * I Want to know if values passed to props fail the type check
     * */
    global.console.error = (...args) => {
      const propTypeFailures = [/Warning:/] // e.g. [/Invalid prop/, /Failed prop type/]

      if (propTypeFailures.some(p => p.test(args[0]))) {
        throw new Error(args[0])
      }

      originalConsoleError(...args)
    }
  })
}

/**
 * Mix an match help from:
 * https://daveceddia.com/testing-for-proptypes-errors/
 * https://www.jackfranklin.co.uk/blog/failing-tests-on-react-proptypes/
 */

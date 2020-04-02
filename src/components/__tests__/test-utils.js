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

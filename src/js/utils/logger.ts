type LogLevel = 'silent' | 'error' | 'warn' | 'info' | 'debug'

const levels: LogLevel[] = ['silent', 'error', 'warn', 'info', 'debug']

const currentLevel: LogLevel =
  (import.meta.env?.VITE_LOG_LEVEL as LogLevel) || 'info'

const levelIndex = levels.indexOf(currentLevel)

interface Logger {
  error: (...args: unknown[]) => void
  warn: (...args: unknown[]) => void
  info: (...args: unknown[]) => void
  debug: (...args: unknown[]) => void
}

function createLogger(): Logger {
  return {
    error: (...args: unknown[]) => {
      if (levelIndex >= levels.indexOf('error')) {
        console.error('❌ [ERROR]:', ...args)
      }
    },
    warn: (...args: unknown[]) => {
      if (levelIndex >= levels.indexOf('warn')) {
        console.warn('⚠️ [WARN]:', ...args)
      }
    },
    info: (...args: unknown[]) => {
      if (levelIndex >= levels.indexOf('info')) {
        console.info('ℹ️ [INFO]:', ...args)
      }
    },
    debug: (...args: unknown[]) => {
      if (levelIndex >= levels.indexOf('debug')) {
        console.debug('🐛 [DEBUG]:', ...args)
      }
    },
  }
}

const applog: Logger = createLogger()
export default applog

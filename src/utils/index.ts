class EventEmitter<T, U> {
  private eventMap: Record<T, U[]> = {} as Record<T, U[]>

  // 添加对应事件的监听函数
  on(eventName: T, listener: U) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = []
    }
    this.eventMap[eventName].push(listener)
    return this
  }

  // 触发事件
  emit<K extends keyof T>(eventName: K, ...args: Parameters<U>) {
    const listeners = this.eventMap[eventName]
    if (!listeners || listeners.length === 0) return false
    listeners.forEach(listener => {
      listener(...args)
    })
    return true
  }

  // 取消对应事件的监听
  off<K extends keyof T>(eventName: K, listener: T[K]) {
    const listeners = this.eventMap[eventName]
    if (listeners && listeners.length > 0) {
      const index = listeners.indexOf(listener)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
    return this
  }
}

interface Events {
  update: (newVal: number, prevVal: number) => void
  destroy: () => void
  1: () => void
  symbol: () => void
}

const eventBus = {
  update(newVal: number, prevVal: number) {
    console.log(newVal, prevVal)
  },
  destroy() {
    console.log('destroy')
  },
}
type keys = keyof Events
type values = Events[keyof Events]

type keys1 = keyof keys

const name1: keys = 'update'

const event1 = new EventEmitter<keys, values>()
event1.on('update', (newVal, prevVal) => {
  return newVal + prevVal
})

event1.emit('update', 1, 1)

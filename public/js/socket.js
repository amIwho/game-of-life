//singletone
let socketInstance = null;

class WebSocketService {

  constructor(url) {
    this.connection = io(url);
    return !socketInstance ? this : socketInstance;
  }

  emit(message) {
    this.connection.emit('message', message)
  }

  on(eventName, fn) {
    this.connection.on(eventName, () => {
      fn.apply(this.connection, arguments);
    });
  }
}

export default WebSocketService;

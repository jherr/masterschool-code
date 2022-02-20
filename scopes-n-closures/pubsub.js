const makePubsub = () => {
  const listeners = {};
  return {
    subscribe(event, cb) {
      listeners[event] = listeners[event] ?? [];
      listeners[event].push(cb);
    },
    publish(event, data) {
      for (const cb of listeners[event] || []) {
        cb(data);
      }
    },
  };
};

const btn = makePubsub();
btn.subscribe("click", (data) => {
  console.log("click", data);
});
btn.publish("click", "hello");

const getItemCount = (items) => {
  return items ?? 10; // 0 => 0, null => 10, undefined => 10
};

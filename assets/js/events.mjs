export const Events = {
  ModulesInitialized: 'til:modulesInitialized',
};

export const fireEvent = (name) => {
  console.log('fireEvent', name);
  window.dispatchEvent(new Event(name));
};

export const listen = (name, cb) => {
  console.log('listen', name);
  window.addEventListener(name, cb);
};

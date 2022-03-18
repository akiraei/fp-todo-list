const createMemory = () => {
  const memory = {};
  memory[Date.now()] = { title: "hello", content: "world", state: "normal" };
  memory[Date.now() + 1] = {
    title: "welcome",
    content: "hell",
    state: "deleted",
  };
  return memory;
};

const memory = createMemory();

module.exports = memory;

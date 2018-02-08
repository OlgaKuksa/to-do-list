const LS_KEY = "LS_KEY";

let id = Date.now();

let tasks;

try {
  tasks = JSON.parse(localStorage.getItem("LS_KEY"));
} catch (e) {
  console.log("Error while getting tasks");
}

export const getId = _ => id++;

//export const getTasks=()=>new Promise(resolve=>setTimeout(resolve,0,(
tasks = Array.isArray(tasks)
  ? tasks
  : [
      {
        isDone: true,
        title: "swimming pool Vania",
        priority: "Major",
        date: "01-18-2018"
      },
      {
        isDone: false,
        title: "training",
        priority: "Medium",
        date: "01-22-2018"
      }
    ].map(item => ({ ...item, id: getId() }));
//)))

export const getTasks = () =>
  new Promise(resolve => setTimeout(resolve, 0, [...tasks]));

const saveTasks = () => {
  localStorage.setItem(LS_KEY, JSON.stringify(tasks));
};

export const addTask = data => {
  let task = { ...data, id: getId() };
  tasks.push(task);
  saveTasks();
  return new Promise(resolve => setTimeout(resolve, 0, task));
};

export const removeTask = id => {
  tasks = tasks.filter(item => item.id !== id);
  saveTasks();
  return new Promise(resolve => setTimeout(resolve, 0, id));
};

export const updateTask = (id, changes) => {
  tasks = tasks.map(
    item =>
      item.id !== id
        ? item
        : {
            ...item,
            ...changes
          }
  );
  saveTasks();
  return new Promise(resolve =>
    setTimeout(resolve, 0, {
      ...tasks.find(item => item.id === id)
    })
  );
};

const findBestEmployee = employees => {
  //   console.log(taskCompleted);
  let max = {
    name: "",
    value: 0
  };
  for (let key in employees) {
    let value = employees[key];
    if (max.value < value) {
      max.name = key;
      max.value = value;
    }
  }
  return max;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);

let data = {
  porp1: "value-1",
  porp2: "value-2",
  porp3: "value-3",
  porp4: "value-4",
};

let array = Object.entries(data); // [[p,v],[p,v],[p,v],[p,v]]
array.map((value) => {
  return {
    data1: value[0],
    data2: value[1],
  };
}); // [{data1:p,data2:v},{data1:p,data2:v},{data1:p,data2:v}]

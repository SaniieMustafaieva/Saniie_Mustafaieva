function filter_list(list) {
  let filtered_list_number = [];
  for (i in list) {
    let el = list[i];
    if (Number.isInteger(el)) {
      filtered_list_number.push(el);
      //console.log(filtered_list_number)
    }
  }
  return filtered_list_number;
}

console.log(filter_list([1, 2, "a", "b"]));

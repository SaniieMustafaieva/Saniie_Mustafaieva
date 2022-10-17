let s =
  "Fired:Corwill;Wilfred:Corwill;Barney:TornBull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
function sortedList(s) {
  let separator = ";";
  let new_s = s
    .split(separator)
    .map(function (item) {
      return item.toUpperCase();
    })
    .map(function (item) {
      let fLArray = item.split(":");
      return "(" + fLArray[1] + ", " + fLArray[0] + ")";
    })
    .sort()
    .join(' ');
  return new_s;
}
console.log(sortedList(s));

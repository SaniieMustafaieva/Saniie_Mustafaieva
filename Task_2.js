function first_non_repeating_letter(value_string) {
  let found_symbols = [];
  for (let i = 0; i <= value_string.length; i++) {
    let next_position = i + 1;
    if (next_position === value_string.length) {
      break;
    }
    let cut_str = value_string.substring(next_position);
    cut_str = cut_str.toLowerCase();
    let symbol_to_find = value_string[i].toLowerCase();
    let symbol_position = cut_str.indexOf(symbol_to_find);
    if (symbol_position === -1 && !found_symbols.includes(symbol_to_find)) {
      return value_string[i];
    } else if (symbol_position >= 0) {
      found_symbols.push(symbol_to_find);
    }
  }
  return "NONE";
}
console.log(first_non_repeating_letter("stresstressS"));
console.log(first_non_repeating_letter("sTress"));

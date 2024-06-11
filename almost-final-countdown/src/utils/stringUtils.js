export function pluralize(val, count) {
  if (count > 1) {
    return `${val}s`;
  }
  return val;
}

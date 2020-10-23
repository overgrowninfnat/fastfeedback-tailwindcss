export default function compare(a, b) {
  if (a.createdAt > b.createdAt) return -1;
  if (b.createdAt > a.createdAt) return 1;

  return 0;
}

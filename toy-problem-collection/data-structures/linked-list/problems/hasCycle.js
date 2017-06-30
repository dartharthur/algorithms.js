const hasCyle = linkedList => {
  let trailer = linkedList;
  let runner = linkedList;
  while (trailer.next && runner.next && runner.next.next) {
    trailer = trailer.next;
    runner = runner.next.next;
    if (trailer === runner) return true;
  }
  return false;
};
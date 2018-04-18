const mergeTwoLists = (l1, l2) => {
  let cn;
  let cnp;
  let l1Ref = l1;
  let l2Ref = l2;
  if (l1Ref.val < l2Ref.val) {
    cn = l1Ref;
    l1Ref = l1Ref.next;
  } else if (l1Ref.val > l2Ref.val) {
    cn = l2Ref;
    l2Ref = l2Ref.next;
  }
  cnp = cn;
  while (l1Ref.next || l2Ref.next) {
    if (l1Ref.val < l2Ref.val) {
      cnp = cnp.next;
      cnp.next = l2Ref;
      l2Ref = l2Ref.next;
    } else {
      cnp = cnp.next;
      cnp.next = l1Ref;
      l1Ref = l1Ref.next;
    }
  }
  return cn;
};

export default mergeTwoLists;

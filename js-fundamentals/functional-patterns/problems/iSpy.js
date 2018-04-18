const spyOn = fn => {
  const answerKey = {};
  let callCount = 0;

  const spyFunc = (...args) => {
    const answer = fn(...args);
    args.forEach(arg => (answerKey[JSON.stringify(arg)] = answer));
    callCount += 1;
    return answer;
  };

  spyFunc.callCount = () => callCount;

  spyFunc.wasCalledWith = arg => !!answerKey[JSON.stringify(arg)];

  spyFunc.returned = val => {
    const values = Object.values(answerKey);
    let flag = false;
    if (values.includes(val)) {
      flag = true;
    }
    return flag;
  };
  return spyFunc;
};

export default spyOn;

const spyOn = fn => {
  const answerKey = {};
  let callCount = 0;

  const spyFunc = (...args) => {
    // let args = Array.from(arguments);
    const answer = fn(...args);
    args.forEach(arg => (answerKey[JSON.stringify(arg)] = answer));
    callCount += 1;
    return answer;
  };

  spyFunc.callCount = () => callCount;

  spyFunc.wasCalledWith = arg => !!answerKey[JSON.stringify(arg)];

  spyFunc.returned = val => {
    let flag = false;
    for (let key in answerKey) {
      answerKey[key] === val ? (flag = true) : flag;
    }
    return flag;
  };
  return spyFunc;
};

export default spyOn;

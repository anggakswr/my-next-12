const nGetRandomNumber = (nMin: number, nMax: number) => {
  return Math.random() * (nMax - nMin) + nMin;
};

export default nGetRandomNumber;

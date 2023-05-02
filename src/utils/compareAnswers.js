import md5 from "md5";

const compareAnswers = (answer, hash) => {
  return md5(answer).toString() === hash;
};

export default compareAnswers;

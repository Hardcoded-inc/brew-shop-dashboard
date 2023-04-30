import md5 from "md5";

const compareAnswers = (userAnswer, storedAnswer) => {
  return md5(userAnswer).toString() === storedAnswer;
};

export default compareAnswers;

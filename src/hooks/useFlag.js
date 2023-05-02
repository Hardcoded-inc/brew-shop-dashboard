import compareAnswers from "../utils/compareAnswers";
import { acceptFlag } from "../redux/missions";
import { useDispatch } from "react-redux";
import useTerminal from "./useTerminal";

const useFlag = (currentMission) => {
  const { stdOut } = useTerminal();
  const dispatch = useDispatch();
  const currentFlag = currentMission?.flags.find(({ done }) => !done);

  const checkFlag = (value) => {
    console.log(value, currentFlag.value);
    const isCorrect = compareAnswers(value, currentFlag.value);
    if (isCorrect) dispatch(acceptFlag());

    stdOut(`Provided flag is ${isCorrect ? "correct: ✅" : "incorrect: ❌"}`);
  };
  return { checkFlag };
};

export default useFlag;

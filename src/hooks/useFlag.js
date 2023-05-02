import compareAnswers from "../utils/compareAnswers";
import { setFlagTrue } from "../redux/missions";
import { useDispatch } from "react-redux";
import useTerminal from "./useTerminal";

const useFlag = (currentMission) => {
  const { stdOut } = useTerminal();
  const dispatch = useDispatch();
  const currentFlag = currentMission?.flags.find(({ done }) => !done);

  //   const nextFlag = () => {
  //     if (!currentMission || !currentFlag) null;
  //
  //     const currentIndex = currentMission.flags.indexOf(currentFlag);
  //     const nextIndex = currentIndex + 1;
  //
  //     if (nextIndex >= currentMission.flags.length) null;
  //
  //     return currentMission.flags[nextIndex];
  //   };

  const checkFlag = (value) => {
    const isCorrect = compareAnswers(value, currentFlag.value);
    if (isCorrect) dispatch(acceptFlag());

    stdOut(`Provided flag is <b>${isCorrect ? "correct" : "incorrect"}<b>`);
  };
  return { checkFlag };
};

export default useFlag;

import compareAnswers from "../utils/compareAnswers";
import { setFlagTrue } from "../redux/missions";
import { useSelector, useDispatch } from "react-redux";
import useTerminal from "./useTerminal";

const useFlag = (missionIndex, flagIndex, userAnswer) => {
  const { addRecord } = useTerminal();
  const dispatch = useDispatch();
  const savedAnswer = useSelector(
    (state) => state.missions.list[missionIndex].flags[flagIndex].answer
  );

  const checkFlag = (value) => {
    if (compareAnswers(value, savedAnswer)) {
      dispatch(setFlagTrue(missionIndex, flagIndex, answer));
      addRecord({ value: `Provided flag is <b>correct<b>`, type: "output" });
    } else {
      addRecord({ value: `Provided flag is <b>incorrect<b>`, type: "output" });
    }
  };
  return { checkFlag };
};

export default useFlag;

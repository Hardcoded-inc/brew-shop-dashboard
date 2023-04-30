import compareAnswers from "../utils/compareAnswers";
import { setFlagTrue } from "../redux/missions";
import { useSelector, useDispatch } from "react-redux";
import { addRecord } from "./useTerminal";

const useFlag = (missionIndex, flagIndex, userAnswer) => {
  const dispatch = useDispatch();
  const savedAnswer = useSelector(
    (state) => state.missions.list[missionIndex].flags[flagIndex].answer
  );

  if (compareAnswers(userAnswer, savedAnswer)) {
    dispatch(setFlagTrue(missionIndex, flagIndex, answer));
    addRecord({ value: `Provided flag is <b>correct<b>`, type: "output" });
  } else {
    addRecord({ value: `Provided flag is <b>incorrect<b>`, type: "output" });
  }
};

export default useFlag;

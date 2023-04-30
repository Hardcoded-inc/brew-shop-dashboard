import compareAnswers from "../utils/compareAnswers";
import { setFlagTrue } from "../redux/missions";
import { useSelector, useDispatch } from "react-redux";
import { addRecord } from "./useTerminal";

const useFlag = (missionIndex, flagIndex, answer) => {
  const dispatch = useDispatch();
  const pickedFlag = useSelector(
    (state) => state.list[missionIndex].flags[flagIndex].answer
  );

  if (compareAnswers(answer, pickedFlag)) {
    dispatch(setFlagTrue(missionIndex, flagIndex, answer));
    addRecord({ value: `Provided flag is <b>correct<b>`, type: "output" });
  } else {
    addRecord({ value: `Provided flag is <b>incorrect<b>`, type: "output" });
  }
};

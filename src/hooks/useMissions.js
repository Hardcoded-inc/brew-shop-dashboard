import { useSelector, useDispatch } from "react-redux";
import { setMissionId } from "../redux/missions";

// TODO: Should be based on window width
const BAR_LENGTH = 30;

const useMissions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.list);
  const currentMission = useSelector((state) =>
    state.missions.list.find(
      ({ id }) => id === state.missions.selectedMissionId
    )
  );

  const missionProgress = (flags) => {
    const completedCount = flags.filter((flag) => flag.done).length;
    const totalCount = flags.length;
    const filled = Math.floor((completedCount / totalCount) * BAR_LENGTH);

    const progressBar = Array(BAR_LENGTH).fill("▓");
    progressBar.fill("░", filled);

    return `${progressBar.join("")} ${completedCount}/${totalCount}`;
  };

  const getMissions = () => {
    return missions
      .map(
        ({ id, title, description, flags }) => `
  [${id}] ${title}
  ---
  Brief: ${description}
  Progress: ${missionProgress(flags)}
 `
      )
      .join("\n");
  };

  const selectMission = (id) => {
    const mission = missions.find((m) => m.id === parseInt(id));
    if (mission) {
      dispatch(setMissionId(id));
      return `Mission "${mission.title}" selected.`;
    } else {
      return `Mission with id "${id}" not found.`;
    }
  };

  return {
    getMissions,
    selectMission,
    currentMission,
    // currentFlag,
    // nextFlag,
  };
};

export default useMissions;

import { useSelector } from "react-redux";

const BAR_LENGTH = 10;

const useMissions = () => {
  const missions = useSelector((state) => state.missions.list);
  const currentMission = useSelector((state) =>
    state.missions.list.find(({ id }) => id === state.missions.currentMissionId)
  );

  const missionProgress = (flags) => {
    // if (!currentMission) {
    //   return null;
    // }

    const completedCount = flags.filter((flag) => flag.done).length;
    const totalCount = flags.length;

    const progressBar = Array(totalCount).fill("▓");
    progressBar.fill("░", completedCount);

    // // console log all variables for debugging
    // console.log("currentMission", currentMission);
    // console.log("flags", flags);
    // console.log("completedCount", completedCount);
    // console.log("totalCount", totalCount);
    // console.log("progressBar", progressBar);

    return `${progressBar.join("")} ${completedCount}/${totalCount}`;
  };

  const getMissions = () => {
    const missionsData = missions.map(
      ({ id, title, description, flags }) =>
        `${id} - ${title} - ${description} - ${missionProgress(flags)}`
    );

    return missionsData.join("\n");
  };

  return {
    getMissions,
    // setCurrentMission,
    currentMission,
    // currentFlag,
    // nextFlag,
  };
};

export default useMissions;

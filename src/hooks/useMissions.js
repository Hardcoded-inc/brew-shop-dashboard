import { useSelector } from "react-redux";

// TODO: Should be based on window width
const BAR_LENGTH = 30;

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
    const filled = Math.floor((completedCount / totalCount) * BAR_LENGTH);

    const progressBar = Array(BAR_LENGTH).fill("▓");
    progressBar.fill("░", filled);

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

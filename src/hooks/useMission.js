import { useSelector } from "react-redux";

const useMission = () => {
  const currentMission = useSelector((state) =>
    state.missions.list.find(({ id }) => id === state.missions.currentMissionId)
  );

  const status = () => {
    if (!currentMission) {
      return null;
    }

    const completedCount = currentMission.flags.filter(
      (flag) => flag.isValid
    ).length;
    const totalCount = currentMission.flags.length;

    const progressBar = Array(totalCount).fill("▓");
    progressBar.fill("░", completedCount);

    return `${progressBar.join("")} ${completedCount}/${totalCount}`;
  };

  return {
    currentMission,
    currentFlag,
    nextFlag,
    status,
  };
};

export default useMission;
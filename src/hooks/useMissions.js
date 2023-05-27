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

  const getStatus = () => {
    if (!currentMission)
      return "No mission selected. Use 'select [MISSION ID]'";

    const { id, title, description, flags } = currentMission;
    const doneFlags = flags.filter((flag) => flag.done);
    const currentFlag = flags.find((flag) => !flag.done);

    const flagsInfo = [...doneFlags, currentFlag]
      .map(({ question, done }) => `  > ${done ? "✅" : "🟡"} ${question}`)
      .join("\n");

    return `
  Your current mission: "${title}" [${id}]
  ---
  Brief: ${description}
  Progress: ${missionProgress(flags)}

${flagsInfo}
 `;
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

  const getHint = () => {
    if (!currentMission)
      return "No mission selected. Use 'select [MISSION ID]'";

    const { flags } = currentMission;
    const currentFlag = flags.find((flag) => !flag.done);

    return `Hint: ${currentFlag.hint}`;
  };

  const getTakeaway = () => {
    if (!currentMission)
      return "No mission selected. Use 'select [MISSION ID]'";

    const { takeaway, takeaway_urls } = currentMission;

    const urlsList = takeaway_urls
    .map((url, index) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">[${index + 1}] ${url}</a></li>`)
    .join("");

    return (
      <div>
        <p>Key takeaway:</p>
        <p>{takeaway}</p>
        <p>Learn more from here:</p>
        <ul  dangerouslySetInnerHTML={{ __html: urlsList }} />
      </div>
    );
};

  return {
    currentMission,
    getMissions,
    selectMission,
    getStatus,
    getHint,
    getTakeaway,
  };
};

export default useMissions;

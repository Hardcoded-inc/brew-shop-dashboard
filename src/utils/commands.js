export const commands = {
  help: ({ input, output, setOutput }) => {
    setOutput([...output, input, "Available commands: missions, clear, help"]);
  },
  missions: ({ input, output, setOutput, args }) => {
    const [action, ...actionArgs] = args.split(" ");
    switch (action) {
      case "select":
        // handle select mission
        break;
      case "purge":
        // handle purge missions
        break;
      case "list":
        // handle list missions
        break;
      case "status":
        // handle mission status
        break;
      default:
        setOutput([
          ...output,
          input,
          `Invalid 'missions' command. Available sub-commands: select, purge, list, status`,
        ]);
    }
  },
  clear: ({ setOutput }) => {
    setOutput([]);
  },
};

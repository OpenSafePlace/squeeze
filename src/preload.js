const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
    "api", {
        invoke: (channel, data) => {
            let valid = ["text-squeeze"];

            if (valid.includes(channel))
                return ipcRenderer.invoke(channel, data);
        }
    }
);

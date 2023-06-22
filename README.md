### Repro for issue #5991

### Notes

Reproduced the issue using Node v20.2.0 and v20.0.0\
Node: either v20.2.0 or v20.0.0\
firebase-tools: v12.4.0\
platform: macOS

### Steps to reproduce

Emulator set up


1. On VSCode open `functions/src/index.ts` file, put a breakpoint on `const response = "1";` right before `console.log("onCall - after breakpoint");`
2. Run `cd functions`
3. Run `npm run build && firebase emulators:start --inspect-functions --project demo-project`
4. Attach the debugger by clicking the "Run and Debug" tab on the side of VSCode, then click the play button
   1. Console log should show `> Debugger attached.`

Make a call to the functions (separate terminal)

1. Run `cd app`
2. Run `node .`

### Emulator Output

```
i  Your function timed out after ~undefineds. To configure this timeout, see
      https://firebase.google.com/docs/functions/manage-functions#set_timeout_and_memory_allocation.
i  Request to function failed: Error: socket hang up
```

With `--debug`

```
i  Your function timed out after ~undefineds. To configure this timeout, see
      https://firebase.google.com/docs/functions/manage-functions#set_timeout_and_memory_allocation. {"metadata":{"emulator":{"name":"functions"},"message":"Your function timed out after ~undefineds. To configure this timeout, see\n      https://firebase.google.com/docs/functions/manage-functions#set_timeout_and_memory_allocation."}}
i  Request to function failed: Error: socket hang up {"metadata":{"emulator":{"name":"functions"},"message":"Request to function failed: Error: socket hang up"}}
[2023-06-21T17:58:48.860Z] [work-queue] {"queuedWork":[],"queueLength":0,"runningWork":[],"workRunningCount":0}
[2023-06-21T17:58:48.876Z] [worker-~free~-6ac724ea-3c4a-40d6-90e3-a4f8f9c686c6]: exited {"metadata":{"emulator":{"name":"functions"},"message":"[worker-~free~-6ac724ea-3c4a-40d6-90e3-a4f8f9c686c6]: exited"}}
[2023-06-21T17:58:48.876Z] [worker-~free~-6ac724ea-3c4a-40d6-90e3-a4f8f9c686c6]: FINISHED {"metadata":{"emulator":{"name":"functions"},"message":"[worker-~free~-6ac724ea-3c4a-40d6-90e3-a4f8f9c686c6]: FINISHED"}}
```
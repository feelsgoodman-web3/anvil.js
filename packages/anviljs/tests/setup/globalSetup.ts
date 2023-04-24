import { startProxy } from "../../src/index.js";
import { FORK_BLOCK_NUMBER, FORK_URL } from "../constants.js";

export default async function () {
  return await startProxy({
    options: {
      forkUrl: FORK_URL,
      forkBlockNumber: FORK_BLOCK_NUMBER,
    },
  });
}

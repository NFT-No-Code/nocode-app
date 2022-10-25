import { create, IPFS } from "ipfs-core";
import { ImportCandidate } from "ipfs-core-types/src/utils";

let ipfs: IPFS;

export const handleIpfsUpload = async (file: ImportCandidate) => {
  try {
    if (!ipfs) {
      console.log("ipfs", ipfs);
      ipfs = await create();
    }

    const { cid } = await ipfs.add(file);

    return cid;
  } catch (error) {
    console.error(error);
  }
};

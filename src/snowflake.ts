import { DEFAULTS, getValidNodeId, waitUntilNextTimestamp } from './helpers';

const SnowflakeId = () => {

  const workerId = DEFAULTS.WORKER_ID;
  const nodeIdBits = DEFAULTS.NODE_ID_BITS;
  const sequenceBits = DEFAULTS.SEQUENCE_BITS;
  const epoch = DEFAULTS.EPOCH;

  let lastTimestamp = -1;
  let sequence = 0;
  let nodeId = getValidNodeId(workerId, nodeIdBits);
  const maxSequence = (1 << sequenceBits) - 1;

  function generate() {
    let timestamp = Date.now();

    if (timestamp < lastTimestamp) {
      throw new Error('Clock is moving backwards!');
    }

    if (timestamp === lastTimestamp) {
      sequence = (sequence + 1) & maxSequence;
      if (sequence === 0) {
        timestamp = waitUntilNextTimestamp(timestamp);
      }
    } else {
      sequence = 0;
    }

    lastTimestamp = timestamp;

    const high =
      (BigInt(timestamp - epoch) << BigInt(nodeIdBits + sequenceBits)) |
      (BigInt(nodeId) << BigInt(sequenceBits)) |
      BigInt(sequence);
    const snowflakeId = high

    return snowflakeId.toString();
  }

  // Pass in a snowflake ID and get back timestamp
  function decode(hfid: string){
    const high = BigInt(hfid);
    const timestamp = Number((high >> BigInt(nodeIdBits + sequenceBits)) + BigInt(epoch));
    return timestamp;
  }

  return {
    generate,
    decode
  };
};

export default SnowflakeId;

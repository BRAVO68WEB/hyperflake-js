import { describe, it, expect } from 'vitest';

import SnowflakeId from '~/snowflake';

describe('snowflake', () => {
  describe('Valid scenarios', () => {
    const snowflakeId = SnowflakeId();

    it('should generate a new id', () => {
      const id = snowflakeId.generate();

      expect(id).toBeTypeOf('string');
    });

    it('should not generate same id ever', () => {
      const ids = new Set();
      const maxIds = 10000;

      for (let i = 0; i < maxIds; ++i) {
        const id = snowflakeId.generate();
        ids.add(id);
      }

      expect(ids.size).toEqual(maxIds);
    });
  });

  describe('Check if Original Timestamp is Returned', () => {
    const snowflakeId = SnowflakeId();

    it('should generate a new id', () => {
      const id = snowflakeId.generate();

      expect(id).toBeTypeOf('string');
    });

    it('should not generate same id ever', () => {
      const ids = new Set();
      const maxIds = 10000;

      for (let i = 0; i < maxIds; ++i) {
        const id = snowflakeId.generate();
        ids.add(id);
      }

      expect(ids.size).toEqual(maxIds);
    });

    it('should return original timestamp', () => {
      const currentTimestamp = Date.now();
      const id = snowflakeId.generate();
      const originalTimestamp = snowflakeId.decode(id);

      expect(originalTimestamp).toBeTypeOf('number');
      expect(originalTimestamp).toBeGreaterThanOrEqual(currentTimestamp);
    })
  });
});

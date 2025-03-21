import { tsupDefaults } from '@internal/tsup';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import type { Options } from 'tsup';

import { assets } from './src/assets';

const configs: Options = {
  ...tsupDefaults,
  entry: {
    index: 'src/index.ts',
    configs: 'src/configs.ts',
    'test-utils': 'src/test-utils.ts',
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  onSuccess: async () => {
    const outputDir = join(__dirname, 'src', 'assets', 'images');
    mkdirSync(outputDir, {
      recursive: true,
    });
    writeFileSync(join(outputDir, './assets.json'), JSON.stringify(assets));
  },
};

export default configs;

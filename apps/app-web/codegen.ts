import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  documents: 'src/lib/graphql/**/*.ts',
  generates: {
    './src/lib/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;

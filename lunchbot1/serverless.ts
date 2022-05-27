import type { AWS } from '@serverless/typescript';

import lunchbot from '@functions/lunchbot';

const serverlessConfiguration: AWS = {
  service: 'lunchbot',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    region: "eu-west-1",
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 256,
      shouldStartNameWithService: true,
    },
  },
  // import the function via paths
  functions: { lunchbot },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;

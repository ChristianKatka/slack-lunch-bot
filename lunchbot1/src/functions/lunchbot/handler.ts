import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
// import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { getLunchMenu } from './controllers/get-lunch-menu.controller';

// const getLunch: ValidatedEventAPIGatewayProxyEvent<any> = async () => {
//   return formatJSONResponse({
//     message: `getLunch botti risu, welcome to the exciting Serverless world!`,
//   });
// };

const getLunch: ValidatedEventAPIGatewayProxyEvent<any> = async () =>
 await getLunchMenu();

export const main = middyfy(getLunch);

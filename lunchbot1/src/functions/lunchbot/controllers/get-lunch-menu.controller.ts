import { formatJSONResponse } from '@libs/api-gateway';
import fetch from 'cross-fetch';
import { parse } from 'node-html-parser';

const link = 'https://www.lounaat.info/lounas/bella-roma/jyvaskyla';
export const getLunchMenu = async () => {
  const res = await fetch(link);
  const body = await res.text();

  // käännettään json
  const data = parse(body);
  console.log(data);

  const menu = data.querySelector("#menu");

  console.log(menu.childNodes[0].childNodes);
  console.log(menu.childNodes[1].childNodes);
  console.log(menu.childNodes[2].childNodes);


//   menu.childNodes[day].childNodes.forEach((node, index) => {
//     if (index === 0) {
//       title = node.childNodes[0].childNodes[0]._rawText;
//       return;
//     }
//     if (index === 1) {
//       node.childNodes[0].childNodes.forEach((item) => {
//         const price = item.childNodes[1]?.childNodes[0]._rawText;
//         const dish = item.childNodes[0]?.childNodes[0]._rawText;
//         content += `${price ? price + " -" : ""} ${dish} \n`;
//       });
//     }
//   });

  return formatJSONResponse({
    message: `getLunch botti risu, welcome to the exciting Serverless world!`,
  });
};

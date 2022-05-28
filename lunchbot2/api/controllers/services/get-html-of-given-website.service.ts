import fetch from 'cross-fetch';
import { parse } from 'node-html-parser';

export const getHTMLforGivenWebsite = async (url: string) => {
  const fetchedWebsite = await fetch(url);
  const website = await fetchedWebsite.text();
  const wholeWebsiteAsHtmlElement = parse(website);

  return wholeWebsiteAsHtmlElement;
};

import {API_KEY} from '@env';
import {getData} from '../utils';
import {BASE_URL_NEWS_API, Lang_asyncKey} from '../constants';
import axios from 'axios';

export interface Articles {
  source: number;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsProps {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Articles[];
}

export async function getNews<NewsProps>(
  page: number,
  q: string = '',
): Promise<NewsProps | any> {

  const language = await getData(Lang_asyncKey);
  const params = {
    apiKey: API_KEY,
    q: encodeURIComponent(q),
    page,
    language,
    domains: ',',
  };
  return axios.get<NewsProps>(
    `${BASE_URL_NEWS_API}?apiKey=${params.apiKey}&q=${params.q}&page=${params.page}&language=${params.language}&domains=${params.domains}`,
    {timeout: 2000},
  );
}

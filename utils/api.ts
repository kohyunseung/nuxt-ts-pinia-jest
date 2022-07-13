import axios, { AxiosInstance, AxiosResponse, CancelTokenSource } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.greendongwha.com',
  headers: {
    Accept: 'application/json',
    // cache setting
    'Cache-Control': 'no-cache',
    // 'Access-Control-Max-Age': 3600,

    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': true,
  },
})

const responseBody = (response: AxiosResponse) => response.data

// cancleToken
instance.interceptors.request.use(config => {
  console.log('cancelToken add!')
  const source: CancelTokenSource = axios.CancelToken.source()
  config.cancelToken = source.token
  return config
})

// interface 테스트 용 ( greendongwha api로 샘플 )
interface Test {
  current_status: string
  current_status_name: string
  end_date: string
  enter_yn: string
  event_desc: string | null
  event_id: string
  event_title: string
  hits: string
  image_url: string
  message_url_yn: string
  participants_cnt: string
  result_date: string
  scrap_cnt: string | null
  start_date: string
  win_yn: string
}

export default {
  main: {
    test: async (): Promise<Test[]> => {
      const res = await instance
        .post<Test[]>(
          '/web/community/event/get',
          {},
          {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          },
        )
        .then(responseBody)
      return res.data
    },
  },
}

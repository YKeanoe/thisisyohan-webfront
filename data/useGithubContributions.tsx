import useSWR from 'swr'
import { fetcher } from '@/utils/fetcher'
import moment from 'moment'

export const useGithubContributions = () => {
  const to = moment()
  const from = moment().subtract(357, 'days')

  const headers = new Headers()
  headers.append('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`)
  headers.append('Content-Type', 'application/json')

  const query = `
    query {
      user(login: "ykeanoe") {
        email
        contributionsCollection(from: "${from.toISOString()}", to: "${to.toISOString()}") {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `

  const graphql = JSON.stringify({
    query,
    variables: {},
  })

  var requestOptions = {
    method: 'POST',
    headers,
    body: graphql,
  }

  const { data, error, mutate } = useSWR(
    'https://api.github.com/graphql',
    (url) => fetcher(url, requestOptions),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  return {
    data: data?.data,
    error: data?.message,
    loading: !data && !error,
    mutate,
  }
}

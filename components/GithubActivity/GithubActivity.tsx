import {
  GithubCalendar,
  GithubCalendarContainer,
  GithubCalendarInnerContainer,
  GithubContainer,
  GithubFailed,
  GithubMonths,
  GithubSquare,
  GithubSquares,
  GithubTotal,
  GithubTotalContainer,
  GithubTotalHeader,
} from '@/styled/pages'
import { SectionTitle } from '@/styled/shared'
import { getGithubDataLevel } from '@/utils/misc'
import Tippy from '@tippyjs/react'
import { useGithubContributions } from 'data/useGithubContributions'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { SpinnerDiamond } from 'spinners-react'
import 'tippy.js/dist/tippy.css'

const GithubActivity = () => {
  const [squares, setSquares] = useState<
    { date: Date; contribution: number; level: number }[]
  >([])
  const [months, setMonths] = useState<{ label: string; weeks: number }[]>(
    []
  )

  const {
    data: githubs,
    loading: githubLoading,
    error: githubError,
  } = useGithubContributions()

  useEffect(() => {
    if (githubLoading || !githubs) return

    const squares: { date: Date; contribution: number; level: number }[] =
      githubs.user.contributionsCollection.contributionCalendar.weeks.reduce(
        (
          acc: { date: Date; contribution: number; level: number }[],
          curr
        ) => {
          const datas = curr.contributionDays.map((day) => ({
            date: new Date(day.date),
            contribution: day.contributionCount,
            level: getGithubDataLevel(day.color),
          }))

          acc.push(...datas)

          return acc
        },
        []
      )

    if (squares.length > 357) {
      squares.splice(0, squares.length - 357)
    }

    const tempMonths: { label: string; days: number }[] = squares.reduce(
      (acc, curr) => {
        const label = moment(curr.date).format('MMM')
        const month = acc.find((v) => v.label === label)

        if (month) {
          month.days++
        } else {
          acc.push({ label, days: 1 })
        }

        return acc
      },
      []
    )

    const months = []
    let leftoverDays = 0

    tempMonths.forEach(({ label, days }) => {
      months.push({
        label,
        weeks:
          leftoverDays > 2
            ? Math.round((leftoverDays + days) / 7)
            : Math.floor(days / 7),
      })

      if ((days + leftoverDays) % 7 !== 0) {
        leftoverDays = days % 7
      } else {
        leftoverDays = 0
      }
    })

    setSquares(squares)
    setMonths(months)
  }, [githubs, githubLoading])

  return (
    <GithubContainer>
      <SectionTitle>Github Activity</SectionTitle>
      {githubLoading && <SpinnerDiamond size={100} color={'red'} />}

      {githubs && (
        <>
          <GithubCalendar>
            <GithubCalendarContainer>
              <GithubCalendarInnerContainer>
                <GithubMonths totalWeeks={months.map((v) => v.weeks)}>
                  {months.map((v) => (
                    <li key={v.label}>{v.label}</li>
                  ))}
                </GithubMonths>
                <GithubSquares>
                  {squares.map((square) => (
                    <Tippy
                      content={
                        <span>
                          <strong>
                            {square.contribution} contributions on
                          </strong>{' '}
                          {moment(square.date).format('MMMM DD, YYYY')}
                        </span>
                      }
                      key={square.date.toString()}
                    >
                      <GithubSquare dataLevel={square.level} />
                    </Tippy>
                  ))}
                </GithubSquares>
              </GithubCalendarInnerContainer>
            </GithubCalendarContainer>
          </GithubCalendar>
          <GithubTotalContainer>
            <GithubTotalHeader>Total Contributions</GithubTotalHeader>
            <GithubTotal>
              {
                githubs.user.contributionsCollection.contributionCalendar
                  .totalContributions
              }{' '}
              Total
            </GithubTotal>
          </GithubTotalContainer>
        </>
      )}

      {githubError && (
        <GithubFailed>
          Github activity unavailable
          <br />
          {githubError}
        </GithubFailed>
      )}
    </GithubContainer>
  )
}

export default GithubActivity

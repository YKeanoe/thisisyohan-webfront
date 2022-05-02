export const getGithubDataLevel = (color: string): number => {
  // level: 0 = #ebedf0 | 1 = #9be9a8 | 2 = #40c463 | 3 = #30a14e | 4 = #216e39;
  switch (color) {
    case '#9be9a8':
      return 1
    case '#40c463':
      return 2
    case '#30a14e':
      return 3
    case '#216e39':
      return 4
    case '#ebedf0':
      return 0
    default:
      break
  }
}

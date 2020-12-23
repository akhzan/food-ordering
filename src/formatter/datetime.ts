import dayjs from 'dayjs'

export const DEFAULT_DATE = '0001-01-01'
export const DEFAULT_DATETIME = '0001-01-01T00:00:00Z'

export const DATE_VIEW_FORMAT = 'DD MMM YYYY'
export const DATETIME_VIEW_FORMAT = 'DD MMM YYYY HH:mm'

export const dateToString = (date: string, format = DATE_VIEW_FORMAT): string =>
  date && dayjs(date).isValid() ? dayjs(date).format(format) : ''

export const dateTimeToString = (
  date: string,
  format = DATETIME_VIEW_FORMAT,
): string => (date && dayjs(date).isValid() ? dayjs(date).format(format) : '')

export const getAge = (date: string): number => dayjs().diff(date, 'year')

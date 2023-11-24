export interface DateTimeService {
  now: () => number
  format: (datetime: number) => string
}

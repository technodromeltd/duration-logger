export class DurationLogger {
  prevTime: number;
  index: number;
  durationWarningTresholdInMs: number;
  _warningTxt = "!!!!!!!!!!!!!!!";
  _defaultDurationWarningTresholdInMs = 1;
  id: string | undefined;
  constructor(id?: string, durationWarningTresholdInMs?: number) {
    console.log(`Perfomance monitor started ${id ? "for " + id : undefined}`);
    this.id = id;
    this.prevTime = this.now();
    this.index = 0;
    this.durationWarningTresholdInMs =
      durationWarningTresholdInMs ?? this._defaultDurationWarningTresholdInMs;
  }
  now() {
    return new Date().getTime();
  }
  formatDuration(duration: number) {
    return Math.floor(duration);
  }
  report(target?: string) {
    const now = this.now();
    const duration = this.formatDuration(now - this.prevTime);
    const msg = `${this.id ? "[" + this.id + "]" : ""}[${this.index}]${
      target ? "[" + target + "]" : ""
    } Duration since last checkpoint: ${duration}ms`;
    console.log(msg);
    duration > this.durationWarningTresholdInMs &&
      console.warn(
        this._warningTxt +
          " Warning, duration over treshold! " +
          this._warningTxt
      );
    this.prevTime = now;
    this.index += 1;
  }
}

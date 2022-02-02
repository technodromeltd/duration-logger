export class DurationLogger {
  prevTime: number;
  index: number;
  durationWarningTresholdInMs: number;
  _warningTxt = "!!!!!!!!!!!!!!!";
  _defaultDurationWarningTresholdInMs = 1;
  mainId: string | undefined;
  logTotalTime: boolean;
  startTime: number;

  constructor(
    mainId?: string,
    durationWarningTresholdInMs?: number,
    logTotalTime?: boolean
  ) {
    console.log(
      `Perfomance monitor started ${mainId ? "for " + mainId : undefined}`
    );
    this.mainId = mainId;
    this.prevTime = this.now();
    this.startTime = this.prevTime;
    this.index = 0;
    this.logTotalTime = logTotalTime || false;
    this.durationWarningTresholdInMs =
      durationWarningTresholdInMs ?? this._defaultDurationWarningTresholdInMs;
  }

  now() {
    return new Date().getTime();
  }

  formatDuration(duration: number) {
    return Math.floor(duration);
  }

  log(checkpointId?: string) {
    const now = this.now();
    const duration = this.formatDuration(now - this.prevTime);
    const totalDuration = this.formatDuration(now - this.startTime);
    const msg = `${this.mainId ? "[" + this.mainId + "]" : ""}[${this.index}]${
      checkpointId ? "[" + checkpointId + "]" : ""
    } Duration since last checkpoint: ${duration}ms. ${
      this.logTotalTime ? "Total time elipsed: " + totalDuration : ""
    }`;

    console.log(msg);

    // Add warning log if duration over limit
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

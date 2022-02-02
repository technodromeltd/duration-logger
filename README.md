# Duration Logger

> Logs duration from last checkpoint or init.


## Usage

```ts
const p = new DurationLogger("Name of your test");

// some function

p.report("some function name if needed");

// some code

p.report();

// some more code

p.report();
 ```

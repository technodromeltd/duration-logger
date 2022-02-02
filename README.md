# Duration Logger

> Logs duration from last checkpoint or init.


## Usage

```ts
const p = new DurationLogger("Test name", 100);

// some slow function

p.log("slowFunctionName");

// some code

p.log();

// some more code

p.log();
 
// Outputs
DurationLogger started for Test name
[Test name][0][slowFunctionName] Duration since last checkpoint: 158ms.
!!!!!!!!!!!!!!! Warning, duration over treshold! !!!!!!!!!!!!!!!
[Test name][1] Duration since last checkpoint: 1ms.
[Test name][2] Duration since last checkpoint: 3ms.

 ```
 

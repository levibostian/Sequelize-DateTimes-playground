# Save string to Postgres

This playground is to evaluate how Sequelize saves dates to Postgres when given a Date object with a timezone in it.

I am showing the default behavior of Sequelize when we are *not* setting a timezone for Date objects using momentjs. Sequelize takes the default timezone of the server (which in this case is UTC set from the alpine docker container image).

# Install

* Install Docker on machine.
* Pull code, run command:

```
npm run run
```

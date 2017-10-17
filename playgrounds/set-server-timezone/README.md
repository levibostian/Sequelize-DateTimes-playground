# Set server timezone

This playground sets the timezone on the server and sees how Sequelize reacts.

When reading *and* writing to Postgres, when you send Sequelize a date, it will use the server timezone to read/write to the database.

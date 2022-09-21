# Cron

This page will contain various information about the cron aspect of evoli.

We use the great go-cron library which you can find here. https://github.com/go-co-op/gocron


## Examples
```go
s := gocron.NewScheduler(time.UTC)

s.Every(5).Seconds().Do(func(){ ... })

// strings parse to duration
s.Every("5m").Do(func(){ ... })

s.Every(5).Days().Do(func(){ ... })

s.Every(1).Month(1, 2, 3).Do(func(){ ... })

// set time
s.Every(1).Day().At("10:30").Do(func(){ ... })

// set multiple times
s.Every(1).Day().At("10:30;08:00").Do(func(){ ... })

s.Every(1).Day().At("10:30").At("08:00").Do(func(){ ... })

// Schedule each last day of the month
s.Every(1).MonthLastDay().Do(func(){ ... })

// Or each last day of every other month
s.Every(2).MonthLastDay().Do(func(){ ... })

// cron expressions supported
s.Cron("*/1 * * * *").Do(task) // every minute

// you can start running the scheduler in two different ways:
// starts the scheduler asynchronously
s.StartAsync()
// starts the scheduler and blocks current execution path
s.StartBlocking()

```
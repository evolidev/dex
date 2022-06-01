# Routing

## Basic
The most basic routes accept a path and a closure returning a string:

```go
router.Get("/test", func() string {
	return "hello-world"
})
```

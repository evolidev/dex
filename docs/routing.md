# Routing

## Basic
The most basic routes accept a path and a closure returning a string:

```go
router.Get("/test", func() string {
	return "hello-world"
})
```

All possible methods:
```go
router.Head("/test", callback)
router.Post("/test", callback)
router.Put("/test", callback)
router.Patch("/test", callback)
router.Delete("/test", callback)
router.Connect("/test", callback)
router.Options("/test", callback)
router.Trace("/test", callback)
```

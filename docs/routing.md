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

Sometimes you may need to register a route that responds to multiple HTTP methods.
To do so register the route with `router.Match`
```go
router.Match("/test", callback, http.MethodGet, http.MethodPost, ...)

// since Match is a variadic function you can also pass it like below
httpMethods := []string{http.MethodPut, http.MethodPatch}
router.Match("/test", callback, httpMethods...)
```
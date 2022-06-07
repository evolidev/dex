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

Sometimes you want that one route responds to all HTTP methods.
If so you can define it with `router.Any`
```go
router.Any("/test", callback)
```

Evoli provide you an easy way to your app to return a json.
To achieve this your handler should return a struct, slice or array
```go
func testStruct() struct{ Test string } {
    return struct{ Test string }{"test"}
}

func testSlice() []string {
    return []string{"hiho"}
}

func testArray() [3]uint8 {
    return [3]uint8{255, 255, 255}
}
```
No worries, Evoli will set the "application/json" header for you.
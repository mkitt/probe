# probe
Helper variables to normalize vendor prefixed style names.


## Installation

```sh
$ component install mkitt/probe
```


## API

### probe.transitionend
Returns the correct `transitionend` string used by the browser, if not
found returns `false`.

```javascript
if (probe.transitionend) {
  el.addEventListener(probe.transitionend, fn, false)
}
```

### probe.animationend
Returns the correct `animationend` string used by the browser, if not
found returns `false`.

```javascript
if (probe.animationend) {
  el.addEventListener(probe.animationend, fn, false)
}
```


# useRenderOnMount
Returns a boolean indicating whether a component is mounted, so you can render on mount.

## Motivation
In some cases you don't want to render a component universally, but rather only on the client. This hook provides a boolean indicating whether a component is mounted, which you can use to conditionally render the component. 

When the boolean is flipped, a re-render happens so you can update your UI accordingly.


## Installation

```
yarn add @kaliber/use-render-on-mount
```

## Usage
```jsx
import { useRenderOnMount } from 'use-render-on-mount'

function Component() {
  const isMounted = useRenderOnMount()
  return isMounted && '😎'
}
```

![](https://media.giphy.com/media/U5IUJHu2LGueEeU2Yz/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
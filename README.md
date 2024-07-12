# Plausible for Vue.js 3

This is a Vue.js 3 component for Plausible Analytics.

## Installation

```bash
pnpm add vue3-plausible
```
```bash
npm install vue3-plausible
```
```bash
yarn add vue3-plausible
```

## Usage

```ts
import { createPlausible } from 'vue3-plausible';

const plausible = createPlausible({
  init: {
    domain: 'example.com',
    apiHost: 'https://example.com',
    trackLocalhost: true,
  },
  settings: {
    enableAutoOutboundTracking: true,
    enableAutoPageviews: true,
  }
});

app.use(plausible);
```

```vue
<script setup lang="ts">
const { trackEvent } = usePlausible();
</script>

<template>
  <button @click="trackEvent('Click from Vue.js 3')">Click me</button>
</template>
```

## License
MIT License © 2024 [ValDesign](https://github.com/ValDesign22)
# React Components

Collection of React components.

## Install

Install.
```
npm install @adcimon/react-components
```

## Build

Build.
```
npm run build
```
* Creates a `dist` folder.

## Components

Import a component.
```
import { Button } from '@adcimon/react-components';
```

## Themes

Import a default theme.
```
import '@adcimon/react-components/src/styles/ThemeLight.css';
import '@adcimon/react-components/src/styles/ThemeDark.css';
```

Generate a theme.
```
python theme.py --palette <my_palette.json> --theme <MyTheme.css>
```
* Requires Python 3.9.0+
* Check default palettes `palette_light.json` and `palette_dark.json`.
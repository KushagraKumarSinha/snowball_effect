# ❄️ react-snowfall Demo

A simple and visually polished React demo project showcasing the capabilities of the ```react-snowfall``` library.
This project demonstrates how to create layered snowfall effects on a fullscreen layout with custom colors and styling.

https://www.youtube.com/watch?v=H2tj4z4tDaY

---

## 🌨️ About react-snowfall

```react-snowfall``` is a lightweight React component for rendering animated snowfall using the HTML canvas. It’s ideal for:
* Seasonal landing pages
* Holiday-themed UI
* Subtle background animations
* Demos and experiments

This repository serves as a practical example of how to integrate and customize react-snowfall in a React app.

---

## 📦 Installation
```npm install react-snowfall```

---

## 🚀 Usage Example
```
import Snowfall from 'react-snowfall'

<Snowfall color="white" />
<Snowfall color="red" />
<Snowfall color="white" snowflakeCount={200} speed={[0.5, 2.5]} wind={[-0.5, 1]}/>
```
* ```color```: Snowflake color
* ```snowflakeCount```: Number of snowflakes
* ```speed```: Falling speed range
* ```wind```: Horizontal movement



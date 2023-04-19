# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## about useEffect
In React, the useEffect hook takes an optional array of dependencies as its second argument. This array is used to specify the variables that the useEffect callback function depends on.

When the component mounts or updates, React checks the dependencies array to determine whether the useEffect callback function should be executed. If any of the variables in the dependencies array have changed since the previous render cycle, the useEffect callback function is executed. If none of the variables have changed, the useEffect callback function is skipped.

If the dependencies array is empty, the useEffect callback function will only be executed once, when the component mounts. This is useful for performing one-time setup tasks, such as setting up event listeners or fetching data from an API.

If you want the useEffect callback function to be executed whenever the component updates, regardless of whether any variables have changed, you can omit the dependencies array altogether. This is generally not recommended, as it can lead to unnecessary re-renders and performance issues.

import { useEffect, useState } from 'react';

function MyComponent(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.example.com/data?query=${props.query}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [props.query]);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## useEffect
#### 020 UseEffect - Fundamentals
- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [ ] runs only on initial render

- Learnt useEffect is not okay with Async function because it returns promise
- Learnt we can invoke async await as function inside of useEffect for data fetching but not at the cb

#### 021 UseEffect - Multiple Effects
- Learnt it's possible to have multiple useEffect hooks but it's not adviceable 
- Learnt when a useEffect have dependency of a state, after initial render it's only going rerender when the state gets updated

#### 022 UseEffect Fetch Challenge - Intro


## Conditional-rendering

#### 01-multiple-returns-basics
- Learnt that just as a function can have multiple returns in terms of conditional, same can be done in react as well
- Learnt the function of the setTimeout here is to help display isLoading to user for data to be fully fetched and at timeout, the loading function is set to false which then dislay the main return
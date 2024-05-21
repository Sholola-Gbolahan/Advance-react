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

#### 025 Multiple Returns
- Learnt that just as a function can have multiple returns in terms of conditional, same can be done in react as well
- Learnt the function of the setTimeout here is to help display isLoading to user for data to be fully fetched and at timeout, the loading function is set to false which then dislay the main return

#### 027 Multiple Returns - Fetch Data Challenge
- Learnt there are three state to have for data fetching
  - loading - waiting for data to arrive (display loading state)
  - error - there was an error (display error message)
  - success - received data (display data)
- Learnt isLoading is to be render before the actual Jsx file because javascript reads codes from top to bottom.
- Learnt the error condition is going to be display when isLoading is set to false
- learnt isLoading is set to false right after the catch can only be initiated if data is loaded successfully. 
- Learnt setIsError is set inside of the catch for the error message to be display in Jsx when the data is not fetched.

#### 028 Fetch Error Gotcha 
- Learnt  fetch doesn't consider 404 as error
- Learnt the error can be fixed by for the ok property in the data
- Learnt the ok has it value true when data is present and false when data is not present 
- Learnt this approach is not needed with tehe use of axios

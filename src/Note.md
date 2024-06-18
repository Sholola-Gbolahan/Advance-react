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
- Learnt this approach is not needed with the use of axios

#### 030 Fetch Function Location
- Learnt fetch function can be moved to a separate file and imported into useEffect component.
- Learnt the Gotcha here is that the fetch function get created from the crash when the re-redner happens but won't be the case if its seating inside of the useEffect.
- Learnt that to the dependency its means there's new update to the fetchData which causes an infinite loop
- It's advicable to have the fetch function inside of the useEffect

#### 031 React Hooks Rules
  - Learnt a hook can't be placed inside of a if condition
  - Leaarnt not good to place useEffect after a if condition reason because the code will stop if the condition is meant and the useEffect will be render useless
#### 033 Short Circuit - Overview
  - Learnt example of falsy values are 
    - false
    - 0 (zero)
    - "" (empty string)
    - null
    - undefined
    - NaN (Not a Number)
    - All other values, including objects and arrays, are considered truthy.
  - Learnt about short circuit operator AND(&) and OR(||)
  - Learnt short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.
    - Learnt the && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".
    - Learnt the || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".
  - Learnt the short-circuit evealution can be used in JSX while the normal if condition cannot be used in a jsx return 

#### 034 Short Circuit - Examples
  1. learnt the OR ||  operator is mostly used in API to display a defualt value when data is not available 
  2. Learnt adding a not operator to a falsy value will make the value acts as a truthy. 
  3. Learnt a component can also be retuerned with the short-circuit approach
  4. Learnt the example in 3 simple mean  if the user exit in detabase then the relates information about the user will be display in the component 

#### 035 Ternary Operator
   1. Learnt the the ternary operator is a way to concisely express a simple conditional statement. It is often called the "conditional operator" or the "ternary conditional operator 
```js
condition ? expression1 : expression2;
```
  2. If condition is truthy, the operator will return expression1. If condition is falsy, it will return expression2.
  3. learnt the ternary operator can be used to return elemets as well.
   
#### 036 Toggle Challenge
  1. Learnt a return statement is placed after the first logic in order to avoid running the second conditon from running. It's said to be the way javascrpt works
  2. Learnt the ! operator can also be use to change the state value to oppsite value. 

#### 037 User Challenge
  1. Learnt on login the user data from database will be available.

#### 038 UseEffect Cleanup Function 

   1. Learnt the useEffect keep redendering becasue the component is mounting and unmouting when the toggle button is clicked which is what initiated useEffect first rendering.

#### 039 UseEffect - Timer Example
1. Learnt the setInterval will keep runing after after initial rendering as been unmouted, which can lead to serious issue e.g if use in a subscription and the subscription get cancled and the interval keeps runing.
2. Learnt the soln to this is to use clean up function 
3. learnt when it comes to setInterval, it usually return an ID.
4. Learnt clearInterval is the syntax use to stop an interval and it run after the main component render and before the useEffect. It basically run when thw component unmout 
   
#### 040 UseEffect - Event Listeners Example
1. Learnt affter main component rerenders, its not expected for the addEventListeners to be involked yet and in this case it does which is a gotcha
2. Learnt the way to fix or clean up the issue is to return a function with the removeEventListener syntax to clear the event


## Project Structure
#### Export Group
- Learnt it's needed when a component make use of more other component i'e when some component are repeatedly use in project.
- 
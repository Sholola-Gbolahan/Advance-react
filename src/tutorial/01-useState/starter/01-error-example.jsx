const ErrorExample = () => {


  //  Page not updating count on button click because page is not rerendering 

  // UseSate hooks is used to solve the problem
  
  let count = 0;

  const handleCLick = ( ) => {
      count = count + 1
      console.log(count)
  }

  return(
  <>
    <h2>{count}</h2>

    <button type="button"  className="btn" onClick={handleCLick}>
      icrease
    </button>
  </>
  )
};

export default ErrorExample;

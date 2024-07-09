import { useEffect, useRef, useState } from "react"

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  const refContainer = useRef(null)
  const isMounted = useRef(false)

  // Use-Case of not running a perticular functionality after initial render but want to run the func when the value change
  useEffect(() => {
    // this is to put a focus on the input after initial render
    refContainer.current.focus()
  })
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      console.log(isMounted.current)
      return
    }
    console.log("re-render")
  }, [value])

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = refContainer.current.value
    console.log(name)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            ref={refContainer}
            id="name"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  )
}

export default UseRefBasics

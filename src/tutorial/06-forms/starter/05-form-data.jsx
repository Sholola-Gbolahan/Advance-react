import { useState } from "react"

const UncontrolledInputs = () => {
  const [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(e.currentTarget)

    // Learnt currentTarget points to a form While target points to entries Value
    const formData = new FormData(e.currentTarget)

    // -> getting all form fields by spreading data out
    // const name = [...formData.entries()]
    // console.log(name)

    // Learnt the object type is needed e.g when we need to submit the data to server
    const newUser = Object.fromEntries(formData)

    const userData = [...users, newUser]

    // Check if any of the fields are empty
    if (!newUser.name || !newUser.email || !newUser.password) {
      // Optionally, you can display an error message here
      alert("All fields are required!")
      return
    }

    // Generate a fake ID for the new user

    const fakeId = Date.now()
    const userWithId = { ...newUser, id: fakeId }

    setUsers((prevUsers) => [...prevUsers, userWithId])

    //Learnt after rerender in form fields will not clear out It's the way FormData works
    // Learnt how to fix this Gotcha is by using reset
    e.currentTarget.reset()
  }

  console.log(users)

  const handleDelete = (id) => {
    console.log(id)
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <div>
        {users.map(({ name, email, password, id }) => {
          return (
            <div key={id}>
              <h1>Name:{name}</h1>
              <h2>Email:{email}</h2>
              <h3>Password:{password}</h3>
              <button className="btn" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UncontrolledInputs

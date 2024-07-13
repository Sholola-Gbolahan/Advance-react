const url = "https://api.github.com/users"
import useFetchPerson from "../../08-custom-hooks/starter/useFetchPerson"

const FetchData = () => {
  const { isError, isLoading, user } = useFetchPerson(url)

  if (isError) {
    return (
      <div>
        <h2>An Error as occured</h2>
      </div>
    )
  }
  return (
    <>
      <h1> Github Users </h1>
      {isLoading ? (
        "Loading...."
      ) : (
        <div className="users_container">
          {user.map(({ login, avatar_url, html_url, id, node_id }) => {
            return (
              <div key={id} className="user_container">
                <img src={avatar_url} alt={node_id} className="user_img" />
                <div className="user_info">
                  <h5>{login}</h5>
                  <a href={html_url} target="_blank">
                    Profile
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
export default FetchData

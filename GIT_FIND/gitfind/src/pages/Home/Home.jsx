import { useState } from "react"

import Header from "../../components/Header/Header"
import styles from "./Home.module.css"
import background from "../../assets/background.png"
import ItemList from "../../components/ItemList/ItemList"

const Home = () => {
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)


  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    console.log(newUser)

    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser
      setCurrentUser({avatar_url, name, bio, login})

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()

      if(newRepos.length) {
        setRepos(newRepos)
      }
    }
  }


  return (
   <div>
     <Header />
      <div className={styles.conteudo}>
        <img src={background} alt="background app" className={styles.background} />
        <div className={styles.info}>
          <div>
            <input name="user" placeholder="@username" value={user} onChange={(e) => setUser(e.target.value)} />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
              <div className={styles.perfil}>
                <img src={currentUser.avatar_url} alt="imagem do perfil" className={styles.profile} />
              <div>
                <h3>{currentUser.name}</h3>
                <span>@{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.length ? (
            <div>
              <h4 className={styles.repositorio}>Repositórios</h4>
              {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </div>
          ) : null }
        </div>
      </div>
   </div>
  )
}

export default Home
import styles from "../styles/Home.module.css";
import Container from "../components/Container";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";

export default function Home(props) {
  console.log(props)
  return (
    <Container>
      <div className={styles.container}>
        <h1>Next</h1>
        <Users users={props.users}/>
      </div>
    </Container>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users')
  const dataJSON = await res.json()
  return {users: dataJSON.data}
}
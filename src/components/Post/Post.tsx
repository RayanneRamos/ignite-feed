import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/43352880?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Rayanne Ramos</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="01 de março às 15:14h" dateTime="2023-03-01 15:14:00">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}

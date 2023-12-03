
import styles from './styles.module.css'

export default function CardLogin() {
  return (
    <div className={styles.containerCard}>
        <div className={styles.cardLogin}>
          <h1>LOGIN</h1>
          <form action="">
            <input type='text' placeholder='Enter your email'/><br />
            <input type='password' placeholder='Enter your password'/><br />
            <input className={styles.checkbox} type="checkbox" name="check" id="check" />
            <label htmlFor="check">Remember me?</label><br />
            <p className={styles.textForgot}>Forgot password?</p>
            <button type="submit">Log in</button>

            <p>Don't have an account? <b className={styles.register}>Register</b></p>
          </form>

        </div>
    </div>
  )
}
import styles from "./AddUser.module.css";
import Card from "./UI/Card";

function AddUser() {
  function buttonClickHandler(e) {
    e.preventDefault();
  };

  return (
    <div>
      <Card className={styles.input}>
        <form>
          <label htmlFor="username">Username</label>
          <input id="username" type="text"></input>
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number"></input>
          <Button onClick={butttonClickHandler} Add User></Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;

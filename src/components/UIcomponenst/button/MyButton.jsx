import classes from './MyButton.module.css';
const MyButton = ({ btnText }) => {
  return <button className={classes.myBtn}>{btnText}</button>;
};

export default MyButton;

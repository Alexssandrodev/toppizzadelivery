import styles from './Button.module.css';

interface ButtonProps {
    title: string
}

function Button(props: ButtonProps) {
    return ( 
        <button className={styles.button}>{props.title}</button>
     );
}

export default Button;

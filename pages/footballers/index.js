import styles from '../../styles/Footballers.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { footballers: data }
    }
}
const Footballers = ({ footballers }) => {
    return (<div>
        <h1>All Footballers</h1>
        {footballers.map(baller => (
            <Link href={'/footballers/' + baller.id} key={baller.id}>
                <a className={styles.single}>
                    <h3>{baller.name}</h3>
                </a>
            </Link>
        ))}
    </div>);
}

export default Footballers;
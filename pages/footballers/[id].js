export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map(baller => {
        return {
            params: { id: baller.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { baller: data }
    }
}

const Details = ({ baller }) => {
    return (
        <div>
            <h1>{baller.name}</h1>
            <p>{baller.email}</p>
            <p>{baller.website}</p>
        </div>
    );
}

export default Details;
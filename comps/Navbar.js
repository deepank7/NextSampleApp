import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/football.jpg" width={168} height={147} color="#f2f2f2" />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/footballers"><a>Football Listing</a></Link>
        </nav>
    );
}

export default Navbar;
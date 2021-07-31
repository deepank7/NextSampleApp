import Link from 'next/link'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/footballers">
        <a>See transfer listing</a>
      </Link>
    </div>
  )
}

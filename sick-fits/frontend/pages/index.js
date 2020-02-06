import Link from "next/link";

function Home() {
    return (
        <div>
            <p>Home Page</p>
            <Link href="/sell">
                <a>Sell</a>
            </Link>
        </div>
    );
}

export default Home;
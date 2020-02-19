import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav() {
    return (
        <div>
            <NavStyles>

                <Link href="/items">
                    <a href="http://">Items</a>
                </Link>
                <Link href="/sell">
                    <a href="http://">Sell</a>
                </Link>
                <Link href="/signup">
                    <a href="http://">Signup</a>
                </Link>
                <Link href="/orders">
                    <a href="http://">Orders</a>
                </Link>
                <Link href="/me">
                    <a href="http://">Account</a>
                </Link>


            </NavStyles>

        </div>
    );
}

export default Nav;
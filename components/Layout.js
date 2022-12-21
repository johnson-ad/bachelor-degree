import Head from 'next/head';
import Link from 'next/link';
import Footer from './footer/index';
import Cookies from 'js-cookie';
import { useContext, useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Store } from '../utils/Store';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import { useRouter } from 'next/router';
import en from '../locales/en';
import fr from '../locales/fr';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        <title>{title ? title + ' - ' : 'PAJ'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="bachelor degree" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-5 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">PAJ</a>
            </Link>
            <div className="font-bold">
              <Link href="/">
                <a className="p-2 hover:scale-125 duration-300 hover:text-teal-400">
                  Home
                </a>
              </Link>
              <Link href="/product">
                <a className="p-2 hover:scale-125 duration-300 hover:text-teal-400">
                  Product
                </a>
              </Link>
              <Link href="/about">
                <a className="p-2 hover:scale-125 duration-300 hover:text-teal-400">
                  About
                </a>
              </Link>
              <Link href="/cart">
                <a className="p-2 mr-1 hover:scale-125 duration-300 hover:text-teal-400">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600 mr-2">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg ">
                    <Menu.Item>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        Order History
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">Login</a>
                </Link>
              )}
              <select
                onChange={changeLanguage}
                defaultValue={locale}
                className="text-blue-700 text-shadow-sm"
              >
                <option className="text-black" value="fr">
                  FR
                </option>
                <option className="text-black" value="en">
                  EN
                </option>
              </select>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}

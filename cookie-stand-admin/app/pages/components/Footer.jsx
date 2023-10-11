function Footer({length}) {
    return (
        <footer className="bg-custom  shadow dark:bg-gray-900 m-0">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-black flex justify-between">
                <span className="block text-sm text-black-500 sm:text-center dark:text-black-400 align-middle">© 2023 
                    <a href="https://flowbite.com/" className="hover:underline"> Flowbite™</a>
                    . All Rights Reserved.
                </span>
                <span className="text-xl text-bold text-left align-middle">
                        {length} Locaion  World Wide
                </span>
            </div>
        </footer>
    );
}
export default Footer;
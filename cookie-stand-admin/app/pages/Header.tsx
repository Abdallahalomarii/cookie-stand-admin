import Link from 'next/link';
function Header(){
    return(
        <div className="flex justify-center align-center py-8 m-0 bg-custom">
            <div className="px-4 mx-auto text-3xl text-green-800">
                Cookie Stand Admin!
            </div>
            <div className='text-green-800 text-xl px-5 mx-auto'>
              <Link href="./pages/api">Overview</Link>
            </div>
        </div>
    );
}

export default Header;
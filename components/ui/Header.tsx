import Link from "next/link";

function Header() {
  return (

   
    <div className="border-2 h-[58px] flex justify-between "> 
     
    <div>
    <h3 className="font-bold"> Bandage </h3>
    </div>
    

    <ul className="bg-white-600 flex justify-right gap-4 text-sm ">
    
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/shop">
        <li>Shop</li>
      </Link>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/blog">
        <li>Blog</li>
      </Link>
      
    </ul>

    <ul className="bg-white-600 flex  gap-4 text-sm ">

     <Link href="/">
       <li>Login/Register</li>
     </Link>
     <Link href="/shop">
       <img  src=''></img>
     </Link>
     <Link href="/about">
     <img src=''></img>
     </Link>
     <Link href="/blog">
     <img src=''></img>
     </Link>
     
   </ul>
    </div>
  );
}

export default Header;
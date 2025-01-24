import Link from "next/link";
import {z} from "zod" 

function Productform() {
  return (

   <form>
    const formSchema =z.object({
    productname:z.string().min(5).max(30) 

    </form>
  );
}

export default Productform;
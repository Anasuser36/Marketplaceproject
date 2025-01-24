
import { Button } from "@/components/ui/button"


export  function Home() {
    return (
     <div className="grid grid-cols-3 grid-row grid-row gap-4">
        <div className="bg-red-400 col-span-3" >Header</div>
        <div className="bg-blue-400 row-span-2" >Sidebar</div>
        <div className="bg-green-400 col-span-2" >Content 1</div>
        <div className="bg-gray-400">Content 2</div>
        <div className="bg-orange-400"> Content 3</div>
        <div className="bg-yellow-400 col-span-3">Footer</div>
     </div>
  

       
    );
   }

   export default   function Home2() {
      return (
         <div>
         <Button variant="outline">Button</Button>
    
         </div>
         
      );
     }


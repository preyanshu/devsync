import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (

    <div  className="bg-dark-1" style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}><SignUp /></div>);
}
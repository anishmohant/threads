import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      <h1>hello</h1>
      <UserButton afterSignOutUrl="/"/>
      
    </div>
  )
}
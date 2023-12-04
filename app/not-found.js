import Image from "next/image"
import Header from "@/app/Components/Header"
export default function Custom404() {
    return(
      <>
        <Header/>
        <img className="h-screen w-full"
        src="/404.gif"
        alt="Landscape picture"
      />
      
      </>
    )
     
  }

import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="p-8 space-y-4">
        <div className="p-4 font-thin text-white bg-accent-50 text-shadow-transparent">bg-accent</div>
        <div className="p-4 font-extrabold text-secondary bg-accent">bg-accent-light</div>
        <div className="p-4 font-mono text-white bg-accent-dark">ASASASA</div>
        <Button variant={'primary'}>ASASAS</Button>

    </div>
</>
    
  );
}

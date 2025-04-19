import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="p-8 space-y-4">
        <div className="p-4 text-white bg-accent text-shadow-transparent">bg-accent</div>
        <div className="p-4 text-black bg-accent-light">bg-accent-light</div>
        <div className="p-4 text-white bg-accent-dark">bg-accent-dark</div>
    </div>
</>
    
  );
}

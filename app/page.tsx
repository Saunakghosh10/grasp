import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar/navbar";
export default function Home() {
  return (
    <div>
      <h1>
        <Navbar />
        {/* <Button>Button</Button> */}
      </h1>
    </div>
  );
}

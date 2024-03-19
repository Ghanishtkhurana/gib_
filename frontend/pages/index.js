import Image from "next/image";
import { Inter } from "next/font/google";
import Mapper from "@/components/home/Mapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Mapper />
    </div>
  );
}

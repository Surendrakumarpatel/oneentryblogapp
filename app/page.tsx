import Articles from "@/components/Articles";
import HeroSection from "@/components/HeroSection";
import { defineOneEntry } from "oneentry";

export default async function Home() {
  const { Pages } = defineOneEntry(process.env.API_URL!, {token:process.env.API_TOKEN, langCode:"en_US"});

  const pages = await Pages.getPages("en_US");
 
  return (
     <div>
       <HeroSection pages={pages}/>
       <Articles/>
     </div>
  );
}

import reliImg from "public/reliability.jpg";
import Hero from "@/components/hero";

export default function ReliabalityPage(){
    return <div>
        Reliabality Page
        <Hero imgData={reliImg} imgAlt='Steel factory' title='Super high reliability'/>
    </div>;
}
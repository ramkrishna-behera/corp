import Hero from "@/components/hero";
import PerformImg from "public/performance.jpg";

export default function PerformancePage(){
    return <div>
        Performance Page
        <Hero imgData={PerformImg} imgAlt='Welding' title='We serve high performance application'/>
    </div>;
}
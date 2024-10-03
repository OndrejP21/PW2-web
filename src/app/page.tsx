import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Redakční firma</h1>

      <main>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            exercitationem doloribus ex harum cum quam asperiores eius est
            eligendi. Libero magnam vero rerum laborum dolorem labore? Nostrum
            minima nam optio!
          </p>
        </section>

        <section className="flex justify-center">
          <Image src="/html.png" alt="HTML" width={300} height={100} />
          <Image src="/js.png" alt="JS" width={300} height={100} />
          <Image src="/next.png" alt="NEXT" width={300} height={100} />
        </section>
      </main>
    </div>
  );
}

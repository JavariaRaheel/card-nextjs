import Image from "next/image";

export default function Responsive2() {
  return (
    <div className="parentContainer">
      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image
            src="https://img.drz.lazcdn.com/static/pk/p/5bec9d32f3187b6ca293793ad33ba0b5.jpg_400x400q75.jpg_.webp"
            alt="Hijab Inner Cap"
            width={200}
            height={200}
          />
        </div>
        <h1 className="title">Hijab Inner Cap</h1>
        <p className="description">
          Hijab cap inner cap underscarf elastic cap hijabeez hub elastic back inner caps under caps{" "}
        </p>
        <button className="readMore">Read More</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image
            src="https://img.drz.lazcdn.com/static/pk/p/8eb2c5def28b7377727fdecae8888218.jpg_720x720q80.jpg_.webp"
            alt="Triple Layer Niqab"
            width={200}
            height={200}
          />
        </div>
        <h1 className="title">Triple Layer Niqab</h1>
        <p className="description">
          Triple Layered Abaya Naqab Hijab Triple Nakab Patti 3 Layer Big Size 3 layers Khimar Abeerah{" "}
        </p>
        <button className="readMore">Read More</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image
            src="https://img.drz.lazcdn.com/static/pk/p/de8325ec372fd024dae623706160d784.jpg_400x400q75.jpg_.webp"
            alt="Saudi Naqab"
            width={200}
            height={200}
          />
        </div>
        <h1 className="title">Saudi Naqab</h1>
        <p className="description">
          Saudi Niqab 9.5 x 11.5 Hijabeez Hub Saudi Naqab With Label and Metal Logo Niqab Hard Bukram Matha Pati{" "}
        </p>
        <button className="readMore">Read More</button>
      </div>

      {/* Duplicate sections */}
      {[...Array(5)].map((_, index) => (
        <div className="childContainer bounce-in-right" key={index}>
          <div className="imageContainer">
            <Image
              src="https://img.drz.lazcdn.com/static/pk/p/5bec9d32f3187b6ca293793ad33ba0b5.jpg_400x400q75.jpg_.webp"
              alt="Hijab Inner Cap"
              width={200}
              height={200}
            />
          </div>
          <h1 className="title">Hijab Inner Cap</h1>
          <p className="description">
            Hijab cap inner cap underscarf elastic cap hijabeez hub elastic back inner caps under caps{" "}
          </p>
          <button className="readMore">Read More</button>
        </div>
      ))}
    </div>
  );
}

import Image from "next/image";

export default function Responsive() {
  return (
    <div className="parentContainer">
      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image 
            src="https://img.drz.lazcdn.com/static/pk/p/c054eef3f6d7f354eb74235a325c2069.jpg_400x400q75.jpg_.webp" 
            alt="Namaz Chaddar"
            width={400}
            height={400}
          />
        </div>
        <h1 className="title">Namaz Chaddar</h1>
        <p className="description">
          Full Length Namaz Chaddar | Printed | With Sleeves- Occasion: Casual Namaz Chaddar
        </p>
        <button><a href="/" className="readMore">read more</a></button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image 
            src="https://img.drz.lazcdn.com/g/kf/Sbbbfe951ced14102992ff56a9d46adf6N.jpg_720x720q80.jpg_.webp" 
            alt="Ladies Hand Gloves"
            width={400}
            height={400}
          />
        </div>
        <h1 className="title">Ladies Hand Gloves</h1>
        <p className="description">
          Ladies hand gloves for Hijab dastansy hand socks hijabeez Hub. Hand gloves for Ladies.
        </p>
        <button className="readMore">Read More</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <Image 
            src="https://img.drz.lazcdn.com/g/kf/Sbbbfe951ced14102992ff56a9d46adf6N.jpg_720x720q80.jpg_.webp" 
            alt="Ladies Hand Gloves"
            width={400}
            height={400}
          />
        </div>
        <h1 className="title">Ladies Hand Gloves</h1>
        <p className="description">
          Ladies hand gloves for Hijab dastansy hand socks hijabeez Hub. Hand gloves for Ladies.
        </p>
        <button className="readMore">Read More</button>
      </div>

      {[...Array(5)].map((_, index) => (
        <div className="childContainer bounce-in-right" key={index}>
          <div className="imageContainer">
            <Image 
              src="https://img.drz.lazcdn.com/static/pk/p/c054eef3f6d7f354eb74235a325c2069.jpg_400x400q75.jpg_.webp" 
              alt="Namaz Chaddar"
              width={400}
              height={400}
            />
          </div>
          <h1 className="title">Namaz Chaddar</h1>
          <p className="description">
            Full Length Namaz Chaddar | Printed | With Sleeves- Occasion: Casual Namaz Chaddar
          </p>
          <button className="readMore">Read More</button>
        </div>
      ))}
    </div>
  );
}

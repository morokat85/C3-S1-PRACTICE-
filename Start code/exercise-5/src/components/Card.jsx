export default function Card({ name, hobby, gender, image, }) {
    return (
        <div className="card">
            <img src={image.src} alt={image.alt} />
            <h2>{name}</h2>
            <p>Hobby: {hobby}</p>
            <p>Gender: {gender}</p>
        </div>
    );
}
import './CardMovie.css';

const CardMovie = ({ title, description, image }) => {
  return (
    <div className="card-container group w-64 h-96">
      <div className="card-content">
        <div className="card-front absolute inset-0 flex items-center justify-center">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="card-back absolute inset-0 flex flex-col items-center justify-center bg-red-300 rounded-lg transform rotate-y-180">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;

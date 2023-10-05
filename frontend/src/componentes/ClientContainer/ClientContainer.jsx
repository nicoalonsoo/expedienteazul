import React from "react";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const ClientContainer = () => {
  const videoIds = ["E8qZ5mtJnpI", "OGScgeUr5tE", "vu7mzrB3Yqc", "ljPuv7jZdwE", 'vsNgjmp2uSs', '3r9M07-ZJYk'];

  // Establece la URL de la imagen de fondo
  const backgroundImageUrl = "https://expedienteazul.com/financiera/wp-content/uploads/2019/01/ExA-papeles.jpg";

  return (
    <div
      className="max-w-[330px] md:max-w-[1600px] p-8 rounded-lg"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", // Ajusta el tamaño de la imagen de fondo según tus necesidades
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="mb-8 font-catamaran text-4xl text-white">Testimoniales</h1>
      <div className="mr-0 md:mr-[155px] flex flex-wrap -mx-2 justify-center">
        {videoIds.map((videoId, index) => (
          <div key={index} className="mb-12 justify-center sm:w-1/2 md:w-1/3 lg:w-1/2 p-2">
            <YoutubeVideo videoId={videoId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientContainer;


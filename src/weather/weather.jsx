import React from 'react';

const Weather = ({ city, temp, country, sunrise, sunset }) => {
  return (
    <div
      style={{ paddingTop: '30px', gap: '100px', boxShadow: ' 0 0.1px 1px rbga(0,0,0,0.5и)' }}
      className="info">
      <div className="image">
        <img
          style={{
            width: '150px',
            height: '120px',
            borderRadius: '10px',
          }}
          src="https://sutochno.ru/doc/images/galleries/180/luchshie9.jpg"
          alt="example image"
        />
        {city ? (
          <p className="inform">Город: {city}</p>
        ) : (
          <p className="inform">Информация о городе отсутствует</p>
        )}
      </div>
      <div className="image">
        <img
          style={{ width: '150px', height: '120px', borderRadius: '10px' }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTetlH0IXu14_f1_zk1DlVEDpcvmxDjKzI4dQ&s"
          alt=""
        />

        {temp ? (
          <p className="inform">Температура: {temp}</p>
        ) : (
          <p className="inform">Info о температуре отсутствует</p>
        )}
      </div>
      <div className="image">
        <img
          style={{ width: '150px', height: '120px', borderRadius: '10px' }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgf68gdLeWaImyA3F9FGlYU2Yy_39Qq8RZxg&s"
          alt=""
        />

        {country ? (
          <p className="inform">Страна: {country}</p>
        ) : (
          <p className="inform">Информация о стране отсутствует</p>
        )}
      </div>
      <div className="image">
        <img
          style={{ width: '150px', height: '120px', borderRadius: '10px' }}
          src="https://lh5.googleusercontent.com/proxy/YHWRDUyJcZ0xzZ7oUvNk79l15vdSI2w7qDWuj0OAYJG3FCXJFthyza66h8lHkYSAwXUUCnyI6oeYXHDrsdsB3cq4z-SaE9PjjwygCF_Uq-s6UR5q16vhTHo3IpE"
          alt=""
        />

        {sunset ? (
          <p className="inform">Закат солнца: {sunset}</p>
        ) : (
          <p className="inform">Информация о закате отсутствует</p>
        )}
      </div>

      <div className="image">
        <img
          style={{ width: '150px', height: '120px', borderRadius: '10px' }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnCoXlODjN4XNGJS5LqPRkCAG0z_DawAFYAA&s"
          alt=""
        />

        {sunrise ? (
          <p className="inform">Восход солнца: {sunrise}</p>
        ) : (
          <p className="inform">Информация о восходе отсутствует</p>
        )}
      </div>
    </div>
  );
};

export default Weather;

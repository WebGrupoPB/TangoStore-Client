import React from 'react';
import Snowfall from 'react-snowfall';

const Snow = () => {
  // Opcional: Puedes personalizar las propiedades según tus necesidades
  const snowfallProps = {
    color: '#fff',
    style: { background: 'trasnparent' },
    snowflakeCount: 500,
    // Agrega imágenes si lo deseas (como en el ejemplo de la documentación)
    // images: [snowflake1, snowflake2],
  };

  return (
    <div style={{ height: '700vh', width: '100%', position: 'absolute', top: '0', zIndex: '50'  }}>
      <Snowfall {...snowfallProps} />
    </div>
  );
};

export default Snow;

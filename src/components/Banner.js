import React from 'react';
import styled from 'styled-components';

const Banner = () => {
    return (
        <Wrapper>
            <div className={'card'}>

              <img
                  src={'https://media.licdn.com/dms/image/C510BAQHd0vFXuXBijA/company-logo_200_200/0/1519895536441?e=2147483647&v=beta&t=ifT5QHZUFq7ZX_1VOzj-Y8kH-WfBLD97RfpsLYaY5FU'}
                  alt={'Portada'}/>
            </div>
        </Wrapper>
    )
};
export default Banner;

const Wrapper = styled.div`
  .card {
    background: #ffffff;
    position: relative;
    width: 550px;
    height: 200px;
    border-radius: 18px;
    cursor: pointer;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
    overflow: hidden; /* Asegura que la imagen no se desborde del contenedor */
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: fill; /* Hace que la imagen cubra completamente el contenedor */
    object-position: center; /* Puedes ajustar esto según tus necesidades */
  }
`


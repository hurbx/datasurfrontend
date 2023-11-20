import React from 'react';
import styled from 'styled-components';

const CustomCard = ({ title, imagen, alt, value }) => {
    return (
        <Wrapper>
            <div className={'card'}>
                <div className={'poster'}>
                    <img className={'card-image'} src={imagen} alt={alt} />
                </div>
                <div className={'details'}>
                    <h1>{title}</h1>
                    <h2>{value}</h2>
                    <p className={'card-description'}>
                        Valor actualizado
                        segun Banco Central de Chile
                    </p>
                    <button> Historial</button>
                </div>
            </div>
        </Wrapper>
    )
}
export default CustomCard;

const Wrapper = styled.div`
  .card {
    position: relative;
    width: 280px;
    height: 450px;
    background: #000;
    border-radius: 18px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.54);

    .poster {
      position: relative;
      inset: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        bottom: -45%;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: 0.3s;
      }

      img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.3s;
      }
    }

    &:hover .poster::before {
      bottom: 0;
    }

    &:hover .poster img {
      transform: scale(1.1);
    }

    .details {
      position: absolute;
      bottom: -100%;
      left: 0;
      width: 100%;
      height: auto;
      padding: 1.5em 1.5em 2em;
      background: #000a;
      backdrop-filter: blur(16px) saturate(120%);
      transition: 0.3s;
      color: #fff;
      z-index: 2;

      h1 {
        font-weight: 700;
        font-size: 1.5em;
        margin-bottom: 0.3em;
      }

      h2 {
        font-weight: 400;
        font-size: 1em;
        margin-bottom: 0.8em;
        opacity: 0.6;
      }
      
      .desc {
        color: #fff;
        opacity: 0.8;
        line-height: 1.5;
        margin-bottom: 0.8em;
      }

      button {
        outline: none;
        padding: 0.5rem 0.75rem;
        color: #fff;
        background: transparent;
        border: 1.5px solid rgba(255 255 255 / 0.4);
        border-radius: 50px;
        cursor: pointer;
      }
    }

    &:hover .details {
      bottom: 0;
    }
  }
`
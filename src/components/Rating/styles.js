import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);

  .percent {
    position: relative;
    width: 150px;
    height: 150px;

    svg {
      position: relative;
      width: 150px;
      height: 150px;

      circle {
        width: 150px;
        height: 150px;
        fill: none;
        stroke-width: 10;
        stroke: #000;
        transform: translate(5px, 5px);
        stroke-dasharray: 440;
        stroke-dashoffset: 440;

        &:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: #f3f3f3;
        }

        &:nth-child(2) {
          stroke-dashoffset: ${(props) =>
            `calc(440 - (440 * ${props.rating}) / 100)`};
          stroke: #03a9f4;
        }
      }
    }

    .number {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #111;

      h2 {
        font-size: 2rem;

        span {
          font-size: 1rem;
        }
      }
    }
  }

  .text {
    padding: 10px 0 0;
    color: #999;
    font-weight: 700;
  }
`;

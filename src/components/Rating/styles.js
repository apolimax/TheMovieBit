import styled from "styled-components";

export const Box = styled.div`
  margin-top: 20px;
  position: relative;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1d0840;
  /* box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2); */

  .percent {
    position: relative;
    width: 150px;
    height: 150px;

    svg {
      position: relative;
      width: 150px;
      height: 150px;

      circle {
        width: 100px;
        height: 100px;
        fill: none;
        stroke-width: 5;
        stroke: #000;
        transform: translate(5px, 5px);
        stroke-dasharray: 147;
        stroke-dashoffset: 147;

        &:nth-child(1) {
          stroke-dashoffset: 0;
          stroke: #1d0840;
        }

        &:nth-child(2) {
          stroke-dashoffset: ${(props) =>
            `calc(147 - (147 * ${props.rating}) / 100)`};
          stroke: #14ff00;
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
      color: #14ff00;

      h2 {
        font-size: 1rem;

        span {
          font-size: 0.7rem;
        }
      }
    }

    .text {
      position: absolute;
      top: 55px;
      left: 120px;
      width: 100%;
    }
  }
`;

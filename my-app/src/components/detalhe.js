import React from "react";
export default function Detalhe(props) {
  return (
    <>
      <div>
        <div className="image">
          <img
            src={props.image}
            onClick={(e) => props.handleImage(e.target.src)}
          />
          <div className="nome2">{props.nome}</div>
          <div className="element">
            {" "}
            {props.type &&
              props.type.map((item) => <button>{item.type.name}</button>)}
          </div>
        </div>

        <div className="tipos">
          <div className="barra-content">
            <span>hp</span>
            <div className="barra">
              <div className="per"> {`${props.stats[0].base_stat}%`}</div>
              <div
                className="barra-item"
                style={{
                  width: props.stats[0].base_stat + "%",
                  background: "#fe0000",
                  height: "15px",
                }}
              ></div>
            </div>
          </div>
          <div className="barra-content">
            <span>Attack</span>
            <div className="barra">
              <div className="per"> {`${props.stats[1].base_stat}%`}</div>
              <div
                className="barra-item"
                style={{
                  width: props.stats[1].base_stat + "%",
                  background: "#ef7e30",
                  height: "15px",
                }}
              ></div>
            </div>
          </div>
          <div className="barra-content">
            <span>defense</span>
            <div className="barra">
              <div className="per"> {`${props.stats[2].base_stat}%`}</div>
              <div
                className="barra-item"
                style={{
                  width: props.stats[2].base_stat + "%",
                  background: "#f8d030",
                  height: "15px",
                }}
              ></div>
            </div>
          </div>

          <div className="barra-content">
            <span>speed</span>
            <div className="barra">
              <div className="per"> {`${props.stats[5].base_stat}%`}</div>
              <div
                className="barra-item"
                style={{
                  width: props.stats[5].base_stat + "%",
                  background: "#f85687",
                  height: "15px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

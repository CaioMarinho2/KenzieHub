import "./index.css";

function Card({ abrirFecharModalEdit, title, status, id, setCardItens }) {
  return (
    <>
      <li
        className="technologyCard"
        onClick={() => {
          setCardItens({ title: title, status: status, id: id });

          abrirFecharModalEdit();
        }}
      >
        <p className="technologyName">{title}</p>
        <div className="technologyInfos">
          <p className="technologyLevel">{status}</p>
        </div>
      </li>
    </>
  );
}
export default Card;

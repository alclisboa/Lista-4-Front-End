import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Últimas Transações</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Quantia</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2648203/pexels-photo-2648203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ana Victória</span>
          </td>
          <td className="widgetLgDate">09 maio 2023</td>
          <td className="widgetLgAmount">R$1202.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Larissa Rabelo</span>
          </td>
          <td className="widgetLgDate">08 maio 2023</td>
          <td className="widgetLgAmount">R$9.99</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Gustavo Macedo</span>
          </td>
          <td className="widgetLgDate">08 maio 2023</td>
          <td className="widgetLgAmount">R$22.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Marcos Henrique</span>
          </td>
          <td className="widgetLgDate">07 maio 2023</td>
          <td className="widgetLgAmount">R$122.73</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

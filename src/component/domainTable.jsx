import React, { Component } from "react";
import { aggregateByDomain } from "../utils/dataUtils";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../css/analysisTab.css";

class DomainTable extends Component {
  state = { sortColumn: "date" };

  onSort = column => {
    this.setState({ sortColumn: column });
  };

  sortByColumn = data => {
    if (this.state.sortColumn === "frequency")
      return this.sortByFrequency(data);
    if (this.state.sortColumn === "date") return this.sortByDate(data);
  };

  sortByFrequency = data => {
    return data.sort((domain1, domain2) => {
      return domain2.frequency - domain1.frequency;
    });
  };

  sortByDate = data => {
    return data.sort((domain1, domain2) => {
      const date1 = new Date(domain1.date),
        date2 = new Date(domain2.date);
      return date1 - date2;
    });
  };

  render() {
    const { data, onCheckDomain, selectedDomain } = this.props;
    const { sortColumn } = this.state;

    const domains = aggregateByDomain(data);
    const sorted = this.sortByColumn(domains);

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Domain</th>
            <th onClick={() => this.onSort("frequency")} className="tableHead">
              Frequency{" "}
              {sortColumn === "frequency" && (
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              )}
            </th>
            <th onClick={() => this.onSort("date")} className="tableHead">
              First found on{" "}
              {sortColumn === "date" && (
                <i className="fa fa-arrow-down" aria-hidden="true"></i>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(domain => (
            <tr key={domain.key}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => onCheckDomain(domain.key)}
                  checked={domain.key === selectedDomain}
                />
              </td>
              <td>{domain.key}</td>
              <td>{domain.frequency}</td>
              <td>{domain.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DomainTable;

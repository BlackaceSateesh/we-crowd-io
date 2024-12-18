import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { TopupHistoryContent } from "../../constants/content/dummy/TopupHistoryContent";
import { useState } from "react";

const TopupHistory = () => {
  // eslint-disable-next-line no-unused-vars
  const [globalFilter, setGlobalFilter] = useState(null);

  return (
    <>
      <div className="TopupHistory">
        <div className="dataTable cardBox martop">
          <DataTable
            value={TopupHistoryContent}
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25]}
            filterDisplay="row"
            globalFilter={globalFilter}
          >
            <Column field="S_No" header="S.No" filter sortable />
            <Column field="Order_Amount" header="Order Amount" filter sortable />
            <Column field="Order_Date" header="Order Date" filter sortable />
            <Column field="Order_Status" header="Order Status" filter sortable />
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default TopupHistory;

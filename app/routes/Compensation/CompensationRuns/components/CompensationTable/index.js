import React, {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'

import CompensationModel from '../CompensationModel'
import iconReverse from 'images/commonIcons/reverse.svg'
import iconRight from 'images/commonIcons/right.svg'
import iconDetails from 'images/commonIcons/details.svg'
import options from 'routes/components/CommonPagination'

function CompensationTable() {
  const [rowData, setRowData] = useState({})
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const processFormater = (cell) => (
    <div className="d-flex flex-column">
      <div>Month</div>
      <div>{cell}</div>
    </div>
  )
  const statusFormater = (cell) =>
    cell.split(' ').map((data, index) => (
      <div className="d-flex" key={index}>
        {data}
      </div>
    ))

  const IconButton = ({icon, label, className}) => (
    <div className={`${className} d-flex flex-row`}>
      <div>
        <img src={icon} />
      </div>
      <div className="w-100 ml-2">{label}</div>
    </div>
  )

  const actionFormater = () => (
    <>
      <IconButton icon={iconDetails} label="Details and Join" />
      <IconButton icon={iconReverse} label="Reverse" className="my-2" />
      <IconButton icon={iconRight} label="Commit" />
    </>
  )

  const data = [
    {
      Run: '72380',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Committed',
      'Commit Date': '',
    },
    {
      Run: '72381',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Committed',
      'Commit Date': '7/3/2020 4:31 AM',
    },
    {
      Run: '72382',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Committed',
      'Commit Date': '7/3/2020 4:31 AM',
    },
    {
      Run: '72383',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Committed',
      'Commit Date': '7/3/2020 4:31 AM',
    },
    {
      Run: '72384',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Committed',
      'Commit Date': '7/3/2020 4:31 AM',
    },
    {
      Run: '72385',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Processing Completed',
      'Commit Date': '',
    },
    {
      Run: '72386',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Processing Completed',
      'Commit Date': '',
    },
    {
      Run: '72387',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Committed',
      'Commit Date': '7/3/2020 4:31 AM',
    },
    {
      Run: '72388',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Processing Completed',
      'Commit Date': '',
    },
    {
      Run: '72389',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Processing Completed',
      'Commit Date': '',
    },
    {
      Run: '72390',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Processing Completed',
      'Commit Date': '',
    },
    {
      Run: '72391',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Committed',
      'Commit Date': '7/3/2020 4:31 AM',
    },
    {
      Run: '72392',
      Process: '07/02/2020 - 07/08/2020',
      'Process Date': '7/8/2020 11:49 PM',
      Status: 'Committed',
      'Commit Date': '7/3/2020 4:31 AM',
    },
  ]
  const columns = [
    {
      dataField: 'Run',
      text: 'Run #',
      sort: true,
    },
    {
      dataField: 'Process',
      text: 'Process',
      sort: true,
      formatter: processFormater,
    },
    {
      dataField: 'Process Date',
      text: 'Process Date',
      sort: true,
    },
    {
      dataField: 'Status',
      text: 'Status',
      sort: true,
      formatter: statusFormater,
    },
    {
      dataField: 'Commit Date',
      text: 'Commit Date',
      sort: true,
    },
    {dataField: 'df1', isDummyField: true, text: '', formatter: actionFormater},
  ]

  const selectRow = {
    mode: 'radio',
    selected: [0],
    bgColor: '#1eb7ff',
    hideSelectColumn: true,
    clickToSelect: true,
    onSelect: (row) => {
      setModal(!modal)
      const data = {
        'Run Time': '3 minutes',
        Orders: '160,473',
        'Qualifying End Date': '7/9/2020 12:59 PM',
        'Qualifying Begin Date': '7/2/2020 1:00 PM',
        'End Date': '7/9/2020 12:59 PM',
        'Begin Date': '7/2/2020 1:00 PM',
        'Complete Date': '7/8/2020 11:52 PM',
        'Consultants Paid': '14',
        Consultants: '18,140',
        'Total Paid': '$8,685.00',
      }
      row = {...row, ...data}
      setRowData(row)
    },
  }

  return (
    <div>
      <BootstrapTable
        keyField="Run"
        columns={columns}
        data={data}
        bordered={false}
        striped
        wrapperClasses="table-responsive"
        noDataIndication={'no results found'}
        selectRow={selectRow}
        pagination={paginationFactory(options)}
      />
      <CompensationModel modal={modal} toggle={toggle}>
        {Object.entries(rowData).map(([key, value]) => (
          <div className="d-flex flex-row my-1" key={key}>
            <div className="w-50 modal-key">{key}</div>
            <div className="w-50 text-right modal-value">{value ? value : '-'}</div>
          </div>
        ))}
      </CompensationModel>
    </div>
  )
}

export default CompensationTable

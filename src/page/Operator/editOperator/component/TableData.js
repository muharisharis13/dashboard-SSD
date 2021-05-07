import React from 'react'
import { FaToggleOff, FaToggleOn, FaTrash } from 'react-icons/fa'
import styled from 'styled-components'
import { Button } from '../../../../component/element'
import data from '../../../../json/pegawaiOperator.json'
import { Link } from 'react-router-dom'

const Thead = styled.thead`
text-align:center;
`

const TableIcon = styled.table`
text-align:center;
justify-content:space-between;
align-items:center;
`

const ToggleOn = styled(FaToggleOn)`
font-size:2rem;
cursor: pointer;
transition:2s;
`
const ToggleOff = styled(FaToggleOff)`
font-size:2rem;
cursor: pointer;
transition:2s;
`

const Trash = styled(FaTrash)`
cursor:pointer;
`

const Tr = styled.tr`
background: ${({ bgcolor }) => (bgcolor ? '#DEDEDE' : 'transparent')};
text-align : center;
`

export const TableData = () => {
  return (
    <table className="table table-bordered" style={{ background: '#fff' }}>
      <Thead>
        <tr>
          <th>No. ID Pegawai</th>
          <th>Nama Pegawai Operator</th>
          <th>Status</th>
        </tr>
      </Thead>
      <tbody>
        {
          data.map((item, index) => (
            <Tr bgcolor={index % 2 ? true : false} key={index}>
              <td> {item.id}</td>
              <td> {item.nama}</td>
              <td>
                <TableIcon className="table table-bordered">
                  <td> <Link to={{
                    pathname: '/EditOperators/Details',
                    props: data[index]
                  }}>
                    <Button underline>Edit</Button>
                  </Link> </td>
                  <td>
                    {item.status === "true" ? <ToggleOn /> : <ToggleOff />}
                  </td>
                  <td> <Trash /> </td>
                </TableIcon>
              </td>
            </Tr>
          ))
        }
      </tbody>
    </table>
  )
}

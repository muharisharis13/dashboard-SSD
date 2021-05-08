import React from 'react'
import { Button, Card } from '../../../component/element/index'
import styled from 'styled-components'
import data from '../../../json/dataComplain.json'


const TableContainer = styled.table`
width:100%;
`

const Container = styled.div`
padding:20px 20px;
`

const CardStatus = styled.div`
/* box-shadow: 0px 0px 7px 5px rgba(255,62,62,1); */
box-shadow: ${({ status }) => (status ? '0px 0px 9px 2px rgba(255,0,0,1)' : null)};
border-radius:8px;
transition:450ms;
`

export const ViewComplain = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-4">
        <div className="col-md-12 col-sm-12">
          <h3>Complain's</h3>
        </div>
      </div>
      <div className="row mt-4">
        {
          data.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-12 pb-2">
              <CardStatus status={item.read} >
                <Card>
                  <Container className="container">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <TableContainer>
                          <tr>
                            <th>
                              From
                        </th>
                            <td> : {item.from} </td>
                          </tr>
                          <tr>
                            <th>
                              Subject
                        </th>
                            <td> : {item.subject} </td>
                          </tr>
                          <tr>
                            <th>
                              Message
                          </th>
                          </tr>
                        </TableContainer>
                        <TableContainer>
                          <tr>
                            <td style={{ textAlign: 'justify', width: '100%' }}>
                              {item.message}
                            </td>
                          </tr>
                        </TableContainer>
                      </div>
                      <div className="col-md-12 col-sm-12 mt-4">
                        <Button boxShadow primary >
                          Reply
                      </Button>
                        <Button danger className="mt-2">
                          Delete
                      </Button>
                      </div>
                    </div>

                  </Container>
                </Card>

              </CardStatus>
            </div>

          ))
        }
      </div>
    </div>
  )
}

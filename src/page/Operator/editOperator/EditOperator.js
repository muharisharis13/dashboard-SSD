import React from 'react'
import { Search } from './component/Search'
import { Button } from '../../../component/element/index'
import { TableData } from './component/TableData'

export const EditOperator = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-md-10 col-sm-10  pb-4">
          <Search />
        </div>
        <div className="col-md-2 col-sm-2">
          <Button primary border boxShadow>
            Cari
          </Button>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12 col-sm-12">
          <TableData />
        </div>
      </div>
    </div>
  )
}

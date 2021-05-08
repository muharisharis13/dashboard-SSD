import React from 'react'
import { Button, Card } from '../../../component/element'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div className="container-fluid pb-4">
      <div>
        <div className="row" style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div className="col-md-6 col-sm-12 pb-4">
            <Card>
              <div className="row">
                <div className="col-md-12 col-sm-12" style={{ padding: '20px 40px' }}>
                  <h4>Total Complains : 5</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div style={{ padding: '10px 30px', background: '#E9E9E9', textAlign: 'left' }}>
                    <h5>
                      <strong>Via Email</strong>
                      <span> : 2</span>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-12 col-sm-12" style={{ padding: '20px 40px' }}>
                  <Link to="/ViewComplain" style={{ textDecoration: 'none' }}>
                    <Button primary big boxShadow>
                      View Complains

                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-sm-12">
                <Card>
                  <div className="row">
                    <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                      <h4>Active User</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                      <h3>1.920.237.692</h3>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-sm-12 mt-5">
                <div className="row">
                  <div className="col-sm-6  pb-4">
                    <Card>
                      <div className="row ">
                        <div className="col-md-12 col-sm-12 " style={{ padding: '5px 40px' }}>
                          <h5>Like Per Day</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                          <h6>3.000.000</h6>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="col-sm-6">
                    <Card>
                      <div className="row">
                        <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                          <h5>Dislike Per Day</h5>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12" style={{ padding: '5px 40px' }}>
                          <h6>3.000.000</h6>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

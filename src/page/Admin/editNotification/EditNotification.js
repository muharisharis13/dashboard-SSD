import React from 'react'
import { Button, Card } from '../../../component/element'
import data from '../../../json/dataNotif.json'
import { ColCard, ColDesc, ColImage, Container, ImageNotif, Title } from './styles'

export const EditNotification = () => {
  return (
    <div className="container-fluid pb-5">
      <div className="row mt-5" >
        {
          data.map((item, index) => (
            <ColCard className="col-md-6" key={index}>
              <Card>
                <Container className="container">
                  <div className="row">
                    <ColImage className="col-md-12">
                      <ImageNotif src={item.image} alt="Image" />
                    </ColImage>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <Title>{item.title}</Title>
                    </div>
                  </div>
                  <div className="row">
                    <ColDesc className="col-sm-12">
                      {item.desc}
                    </ColDesc>
                  </div>

                  <div className="row mt-2">
                    <div className="col-md-6 pb-2">
                      <Button primary border boxShadow>
                        Edit
                      </Button>
                    </div>
                    <div className="col-md-6">
                      <Button danger border>
                        Hapus
                      </Button>
                    </div>
                  </div>

                </Container>
              </Card>
            </ColCard>

          ))
        }
      </div>
    </div>
  )
}

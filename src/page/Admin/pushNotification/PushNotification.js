import React, { useState } from 'react'
import { DateTime, InputPerson, InputPesan, InputTopic, WrapperInput, Row2 } from './styles'
import { Button, InputImage, Label, Labelimage } from '../../../component/element/index'
import { FaPaperclip } from 'react-icons/fa'
import DatePicker from "react-datepicker";

export const PushNotification = () => {
  const [date, setDate] = useState(new Date())
  const [dataImage, setDataImage] = useState('')
  const [filename, setfileName] = useState('')
  const reader = new FileReader();


  const onChangeAttach = (e) => {
    console.log(e)
    reader.onload = () => {
      if (reader.readyState === 2) {
        setDataImage(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])
    setDataImage(e.target.files[0])
    setfileName(e.target.files[0].name)

  }

  return (
    <div className="container-fluid  pb-4">
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12">
          <h2>Push Notification</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <WrapperInput>
            <InputTopic placeholder="Topic :" type="text" name="topic" className="form-control" />
            <InputPesan placeholder="Pesan :" name="pesan" id="" cols="30" rows="10" className="form-control" ></InputPesan>
            <InputPerson placeholder="Contact Person :" type="text" name="topic" className="form-control" />

            <div className="row p-3">
              <div className="col-md-6">
                <Label primary> Foto Tampilan : </Label> &nbsp;
                {
                  filename
                }
                <InputImage
                  type="file"
                  id="attach"
                  accept="image/*"
                  onChange={(e) => onChangeAttach(e)}
                />
                <Labelimage primary boxShadow large border for="attach">
                  <FaPaperclip /> &nbsp; Attach
                </Labelimage>
              </div>
              <div className="col-md-6">
                <Row2 className="row mt-3">
                  <div className="col-md-6 p-2">
                    <DateTime primary border dateFormat="dd-MMM-yyyy h:mm aa" selected={date} onChange={date => setDate(date)} className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <Button primary boxShadow large border>
                      Schedule
                    </Button>
                  </div>
                </Row2>
              </div>
            </div>
          </WrapperInput>
        </div>
      </div>
    </div>
  )
}

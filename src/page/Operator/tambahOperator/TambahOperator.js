import React, { useState } from 'react'
import { FaPaperclip } from 'react-icons/fa'
import { Button, InputImage, InputTextArea, Labelimage } from '../../../component/element/index'

export const TambahOperator = () => {
  const [dataImage, setDataImage] = useState({
    ktp: '',
    dokumen: '',
    pasphoto: ''
  })
  const [filename, setfileName] = useState({
    ktp: '',
    dokumen: '',
    pasphoto: ''
  })
  const reader = new FileReader();




  const onChangeAttach = (e, value) => {
    console.log(e)

    if (value === 'ktp') {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setDataImage({ ...dataImage, ktp: reader.result })
        }
      }

      reader.readAsDataURL(e.target.files[0])
      setDataImage({ ...dataImage, ktp: e.target.files[0] })
      setfileName({ ...filename, ktp: e.target.files[0].name })

    }
    else if (value === 'dokumen') {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setDataImage({ ...dataImage, dokumen: reader.result })
        }
      }

      reader.readAsDataURL(e.target.files[0])
      setDataImage({ ...dataImage, dokumen: e.target.files[0] })
      setfileName({ ...filename, dokumen: e.target.files[0].name })

    }
    else if (value === 'photo') {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setDataImage({ ...dataImage, pasphoto: reader.result })
        }
      }

      reader.readAsDataURL(e.target.files[0])
      setDataImage({ ...dataImage, pasphoto: e.target.files[0] })
      setfileName({ ...filename, pasphoto: e.target.files[0].name })

    }

  }


  return (
    <div className="container-fluid  pb-4">
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12">
          <table className="table">
            <tr>
              <th>Nomor KTP</th>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Nik :" className="form-control" />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>Nama Lengkap</th>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Nama Lengkap :" className="form-control" />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>Alamat</th>
            </tr>
            <tr>
              <td>
                <InputTextArea placeholder="Alamat" name="none" id="" cols="30" rows="5" className="form-control"></InputTextArea>
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <th>Nomor Hp</th>
            </tr>
            <tr>
              <td>
                <input type="text" placeholder="Nomor Hp :" className="form-control" />
              </td>
            </tr>
          </table>
        </div>

        <div className="col-md-6 col-sm-12">
          <table className="table">
            <tr>
              <th>Upload Ktp</th>
            </tr>
            <tr>
              <td>{filename.ktp}</td>
            </tr>
            <tr>
              <td>
                <InputImage
                  type="file"
                  id="attach"
                  accept="image/*"
                  onChange={(e) => onChangeAttach(e, 'ktp')}
                />
                <Labelimage primary boxShadow large border for="attach" style={{ background: '#022B52' }}>
                  <FaPaperclip /> &nbsp; Attach
                </Labelimage>
              </td>
            </tr>
          </table>

          <table className="table">
            <tr>
              <th>Upload Dokumen</th>
            </tr>
            <tr>
              <td>{filename.dokumen}</td>
            </tr>
            <tr>
              <td>
                <InputImage
                  type="file"
                  id="attachdokumen"
                  accept="image/*"
                  onChange={(e) => onChangeAttach(e, 'dokumen')}
                />
                <Labelimage primary boxShadow large border for="attachdokumen" style={{ background: '#022B52' }}>
                  <FaPaperclip /> &nbsp; Attach
                </Labelimage>
              </td>
            </tr>
          </table>


          <table className="table">
            <tr>
              <th>Upload PassPhoto</th>
            </tr>
            <tr>
              <td>{filename.pasphoto}</td>
            </tr>
            <tr>
              <td>
                <InputImage
                  type="file"
                  id="attachpasphoto"
                  accept="image/*"
                  onChange={(e) => onChangeAttach(e, 'photo')}
                />
                <Labelimage primary boxShadow large border for="attachpasphoto" style={{ background: '#022B52' }}>
                  <FaPaperclip /> &nbsp; Attach
                </Labelimage>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12 col-sm-12" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button border primary boxShadow small>
            Simpan
          </Button>
        </div>
      </div>
    </div>
  )
}

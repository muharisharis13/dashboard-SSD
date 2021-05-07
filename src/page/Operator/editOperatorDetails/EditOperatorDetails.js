import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../../component/element'


const Title = styled.th`
`

const TextArea = styled.textarea`
resize:none;
`

const ImgProfil = styled.img`
width:150px;
border-radius:100%;
object-fit:cover;
`

const ImgKtp = styled.img`
width:240px;
`

const ColButton = styled.div`
display:flex;
float:right;
transition:0.5s;
justify-content:flex-end;
align-items:right;

`

export const EditOperatorDetails = (props) => {
  const dataprops = props.location.props
  const [data, setData] = useState({
    nik: dataprops.nik,
    nama: dataprops.nama,
    alamat: dataprops.alamat,
    phone: dataprops.phone_number,
    photo: dataprops.profil,
    ktp: dataprops.ktp,
    dokumen: dataprops.dokumen,
  })


  return (
    <div className="container-fluid  pb-4">
      <div className="row mt-5">
        <div className="col-md-6 col-sm-12">
          <table className="table">
            <tr>
              <Title>Nomor KTP</Title>
            </tr>
            <tr>
              <td>
                <input type="text" value={data.nik} className="form-control" />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <Title>Nama Lengkap</Title>
            </tr>
            <tr>
              <td>
                <input type="text" value={data.nama} className="form-control" />
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <Title>Alamat</Title>
            </tr>
            <tr>
              <td>
                <TextArea value={data.alamat} name="alamat" id="alamat" cols="30" rows="5" className="form-control"></TextArea>
              </td>
            </tr>
          </table>
          <table className="table">
            <tr>
              <Title>Nomo HP</Title>
            </tr>
            <tr>
              <td>
                <input type="text" value={data.phone} className="form-control" />
              </td>
            </tr>
          </table>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-md-6" style={{ textAlign: 'center' }}>
              <strong>Upload PassPhoto</strong> <br />
              <ImgProfil src={data.photo} alt="profile" />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 pb-3">
                  <strong>Upload KTP</strong> <br />
                  <ImgKtp src={data.ktp} alt="ktp" />
                </div>
                <div className="col-md-12">
                  <strong>Upload Dokumen</strong> <br />
                  <ImgKtp src={data.dokumen} alt="ktp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <ColButton className="col-md-12 col-sm-12">
          <Button primary small border boxShadow>
            Update
          </Button>
        </ColButton>
      </div>
    </div>
  )
}

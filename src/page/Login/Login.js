import React, { useState, useEffect } from 'react'
import { BGLogin, Input, Logo2, LogoInput, WrapperInput, H4 } from './styles'
import Logo from '../../image/LogoLogin.png'
import { Button, Card } from '../../component/element'
import { FaLock, FaUserAlt } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'
import { MakePost } from '../../config/FunctionAPI'
import { cookiesSet, cookiesGet } from '../../config/Cookies'

export const Login = () => {
  const [redirect, setRedirect] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const token = cookiesGet({ key: 'token' })

  const btnLogin = async () => {
    setLoading(!loading)

    MakePost({ url: '/login', data })
      .then(res => {
        console.log(res)
        setLoading(false)
        cookiesSet({
          key: 'token',
          value: res.token,
          expires: Infinity
        })
        if (res.success) {
          cookiesSet({
            key: 'role',
            value: res.success.nama,
            expires: Infinity
          })
          setRedirect(true)

        }
      })
  }

  const handleChangeValue = ({ e, v }) => {
    let value = e.target.value

    if (v === 'email') {
      setData({ ...data, email: value })
    }
    else if (v === 'password') {
      setData({ ...data, password: value })
    }
  }

  if (token) {
    window.location.href = "/"
  }

  return (
    <div className="row">
      {
        redirect && <Redirect to="/" />
      }
      <BGLogin className="col-md-6 col-sm-12">
      </BGLogin>
      <div className="col-md-6 col-sm-12">
        <div className="row justify-content-center" style={{ marginTop: '50px' }}>
          <Logo2 className="col-md-12">
            <img src={Logo} width={150} alt="Logo" />
          </Logo2>
          <div className="col-md-10 col-sm-12 mt-5">
            <div className="container-fluid">
              <Card>
                <div className="row">
                  <div className="col-sm-12" style={{ textAlign: 'center' }}>
                    <H4>Login</H4>
                  </div>
                  <WrapperInput paddinginput className="col-sm-12">
                    <LogoInput> <FaUserAlt /> </LogoInput>
                    <Input type="text" placeholder="User ID" className="form-control"
                      value={data.email} onChange={(e) => handleChangeValue({ e: e, v: 'email' })}
                    />
                  </WrapperInput>
                  <WrapperInput paddingbutton className="col-sm-12">
                    <LogoInput> <FaLock /> </LogoInput>
                    <Input type="password" placeholder="Password" className="form-control"
                      value={data.password} onChange={(e) => handleChangeValue({ e: e, v: 'password' })}
                    />
                  </WrapperInput>


                  <WrapperInput paddingbutton >
                    <Button blue border boxShadowMasuk onClick={() => btnLogin()} >{loading ? 'Loading' : 'Masuk'}</Button>
                  </WrapperInput>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { BGLogin, Input, Logo2, LogoInput, WrapperInput, H4 } from './styles'
import Logo from '../../image/LogoLogin.png'
import { Button, Card } from '../../component/element'
import { FaLock, FaUserAlt } from 'react-icons/fa'
import { Redirect } from 'react-router-dom'

export const Login = () => {
  const [redirect, setRedirect] = useState(false)

  const btnLogin = () => {
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to="/" />
  }
  return (
    <div className="row">
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
                    <Input type="text" placeholder="User ID" className="form-control" />
                  </WrapperInput>
                  <WrapperInput paddingbutton className="col-sm-12">
                    <LogoInput> <FaLock /> </LogoInput>
                    <Input type="password" placeholder="Password" className="form-control" />
                  </WrapperInput>


                  <WrapperInput paddingbutton >
                    <Button blue border boxShadowMasuk onClick={btnLogin} >Masuk</Button>
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

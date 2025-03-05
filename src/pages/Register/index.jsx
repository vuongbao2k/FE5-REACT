import React from 'react'
import { checkExits, register } from '../../services/usersService';
import { generateToken } from '../../helpers/generateToken'
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const checkExitsEmail = await checkExits("email", email);
    if(checkExitsEmail.length > 0) {
      alert("Email đã được sử dụng");
    } else {
      const options = {
        fullName: fullName,
        email: email,
        password: password,
        token: generateToken(),
      }
      const response = await register(options);
      if(response) {
        navigate("/login")
      } else {
        alert("Đăng ký thất bại");
      }
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <input type="fullName" placeholder="Nhập họ tên" />
        </div>
        <div>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </>
  )
}

export default Register
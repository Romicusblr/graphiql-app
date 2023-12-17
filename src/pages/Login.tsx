import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/userSlice';
import { auth } from '@/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '@/UI/ButtonSubmit';
import LabelForm from '@/UI/LabelForm';
import InputForm from '@/UI/InputForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '@/utils/schema-validation';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async () => {
    const user = await auth.login({ email, password });
    dispatch(setUser(user));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto my-4">
      <div className="mb-5">
        <LabelForm htmlFor={'email'}>Email</LabelForm>
        <InputForm
          type="text"
          value={email}
          name="email"
          register={register}
          onChange={setEmail}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div className="mb-5">
        <LabelForm htmlFor={'password'}>Password</LabelForm>
        <InputForm
          type="password"
          value={password}
          name="password"
          register={register}
          onChange={setPassword}
        />
      </div>
      <p>{errors.password?.message}</p>
      <ButtonSubmit />
    </form>
  );
};

export default Login;

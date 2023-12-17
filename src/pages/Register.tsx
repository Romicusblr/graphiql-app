import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/userSlice';
import { auth } from '@/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '@/utils/schema-validation';
import ButtonSubmit from '@/UI/ButtonSubmit';
import LabelForm from '@/UI/LabelForm';
import InputForm from '@/UI/InputForm';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async () => {
    const user = await auth.register({ name, email, password });
    dispatch(setUser(user));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto my-4">
      <div className="mb-5">
        <LabelForm htmlFor={'name'}>Name</LabelForm>
        <InputForm
          type="text"
          value={name}
          register={register}
          name="name"
          onChange={setName}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div className="mb-5">
        <LabelForm htmlFor={'email'}>Email</LabelForm>
        <InputForm
          type="text"
          value={email}
          register={register}
          name="email"
          onChange={setEmail}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div className="mb-5">
        <LabelForm htmlFor={'password'}>Password</LabelForm>
        <InputForm
          type="password"
          value={password}
          register={register}
          name="password"
          onChange={setPassword}
        />
        <p>{errors.password?.message}</p>
      </div>
      <ButtonSubmit />
    </form>
  );
};

export default Register;

import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/userSlice';
import { auth } from '@/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '@/components/UI/ButtonSubmit';
import LabelForm from '@/components/UI/LabelForm';
import InputForm from '@/components/UI/InputForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserLogin, userLoginSchema } from '@/utils/schema-validation';
import { useLocalization } from '@/context/LocalizationContext';
import CheckboxForm from '@/components/UI/CheckboxForm';
import { LoginUserDTO } from '@/types';

const Login = () => {
  const { strings } = useLocalization();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userLoginSchema) });

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    const user = await auth.login(data as LoginUserDTO);
    dispatch(setUser(user));
    navigate('/app');
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-2/5 max-w-xs mx-auto my-4"
    >
      <div className="mb-5">
        <LabelForm htmlFor={'email'}>{strings.emailTitle}</LabelForm>
        <InputForm type="text" name="email" register={register} />
        {errors.email && (
          <p className="mt-2 p-1 text-white bg-red-800">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="mb-5">
        <LabelForm htmlFor={'password'}>{strings.passwordTitle}</LabelForm>
        <InputForm type="text" name="password" register={register} />
        <CheckboxForm checked={checked} onChange={handleChange} />
        {errors.password && (
          <p className="mt-2 p-1 text-white bg-red-800">
            {errors.password?.message}
          </p>
        )}
      </div>
      <ButtonSubmit name="login" />
    </form>
  );
};

export default Login;
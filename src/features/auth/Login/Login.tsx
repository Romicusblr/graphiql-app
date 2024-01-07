import { setUser } from '@/features/auth/authSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from '@/components/UI/ButtonSubmit';
import LabelForm from '@/components/UI/LabelForm';
import InputForm from '@/components/UI/InputForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserLogin, userLoginSchema } from '@/features/auth/auth.schema';
import { useLocalization } from '@/hooks/localization';
import CheckboxForm from '@/components/UI/CheckboxForm';
import { LoginUserDTO } from '@/types';
import { useLoginMutation } from '@/app/services/auth';
import { useAppDispatch } from '@/hooks/store';

const Login = () => {
  const { strings } = useLocalization();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userLoginSchema) });

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    const user = await login(data as LoginUserDTO).unwrap();
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
        <InputForm type="text" name="email" id="email" register={register} />
        {errors.email && (
          <p className="mt-2 p-1 text-white bg-red-800">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="mb-5">
        <LabelForm htmlFor={'password'}>{strings.passwordTitle}</LabelForm>
        <InputForm
          id="password"
          type={checked ? 'text' : 'password'}
          name="password"
          register={register}
        />
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

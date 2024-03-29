import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserRegister, userRegisterSchema } from '@/features/auth/auth.schema';
import ButtonSubmit from '@/components/UI/ButtonSubmit';
import LabelForm from '@/components/UI/LabelForm';
import InputForm from '@/components/UI/InputForm';
import { useLocalization } from '@/hooks/localization';
import CheckboxForm from '@/components/UI/CheckboxForm';
import { RegisterUserDTO } from '@/types';
import { useRegisterMutation } from '@/app/services/auth';

const Register = () => {
  const { strings } = useLocalization();
  const [registerUser] = useRegisterMutation();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userRegisterSchema) });

  const onSubmit: SubmitHandler<UserRegister> = async (data) => {
    await registerUser(data as RegisterUserDTO).unwrap();
    navigate('/');
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
        <LabelForm htmlFor={'name'}>{strings.nameTitle}</LabelForm>
        <InputForm type="text" register={register} name="name" id="name" />
        {errors.name && (
          <p className="mt-2 p-1 text-white bg-red-800">
            {errors.name?.message}
          </p>
        )}
      </div>
      <div className="mb-5">
        <LabelForm htmlFor={'email'}>{strings.emailTitle}</LabelForm>
        <InputForm type="text" register={register} name="email" id="email" />
        {errors.email && (
          <p className="mt-2 p-1 text-white bg-red-800">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="mb-5">
        <LabelForm htmlFor={'password'}>{strings.passwordTitle}</LabelForm>
        <InputForm
          type={checked ? 'text' : 'password'}
          register={register}
          name="password"
          id="password"
        />
        <CheckboxForm checked={checked} onChange={handleChange} />
        {errors.password && (
          <p className="mt-2 p-1 text-white bg-red-800">
            {errors.password?.message}
          </p>
        )}
      </div>
      <ButtonSubmit name="signup" />
    </form>
  );
};

export default Register;

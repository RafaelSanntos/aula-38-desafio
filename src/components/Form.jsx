import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormWrapper, InputWrapper, Label, Input, ErrorMessage, SubmitButton, PasswordWrapper, EyeIcon } from '../styled-components/FormStyled';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = data => {
    console.log(data);
    alert('Formulário enviado com sucesso!');
  };

  const password = watch('password');

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>Nome Completo</Label>
        <Input
          type="text"
          {...register('name', { required: 'Nome é obrigatório' })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Label>Email</Label>
        <Input
          type="email"
          {...register('email', {
            required: 'Email é obrigatório',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Email inválido'
            }
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Label>Senha</Label>
        <PasswordWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 8,
                message: 'A senha deve ter no mínimo 8 caracteres'
              }
            })}
          />
          <EyeIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        </PasswordWrapper>
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </InputWrapper>

      <InputWrapper>
        <Label>Confirmação de Senha</Label>
        <PasswordWrapper>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            {...register('confirmPassword', {
              required: 'Confirmação de senha é obrigatória',
              validate: value =>
                value === password || 'As senhas não coincidem'
            })}
          />
          <EyeIcon onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </EyeIcon>
        </PasswordWrapper>
        {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
      </InputWrapper>

      <SubmitButton type="submit">Registrar</SubmitButton>
    </FormWrapper>
  );
};

export default Form;

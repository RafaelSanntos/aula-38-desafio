import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 14px;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #ccc;

  &:hover {
    color: #000;
  }
`;

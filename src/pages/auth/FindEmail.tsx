import React, { useState } from 'react';
import FormTemplate from 'components/templates/FormTemplate/FormTemplate';
import BackHeader from 'components/molecules/BackHeader/BackHeader';
import FindForm from 'components/organisms/Form/FindForm/FindForm';
import FindAuthAlert from 'components/organisms/Alert/FindAuthAlert/FindAuthAlert';

const FindEmail: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isFindOk, setIsFindOk] = useState(false);

  const handleSubmitOk = (_name: string, _email: string) => {
    setName(_name);
    setEmail(_email);
    setIsFindOk(true);
  };

  return (
    <FormTemplate
      headerSection={<BackHeader>이메일 찾기</BackHeader>}
      formSection={
        isFindOk ? (
          <FindAuthAlert name={name} email={email} authType="email" />
        ) : (
          <FindForm authType="email" onSubmitOk={handleSubmitOk} />
        )
      }
    />
  );
};

export default FindEmail;

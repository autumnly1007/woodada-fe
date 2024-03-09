import { Button } from '@/components/ui/Button';
import ButtonGroup from '@/components/ui/Buttons';
import Confirm from '@/components/ui/Confirm';
import { ButtonTheme } from '@/constants/ui-button.constant';
import { useModal } from '@/hooks/useModal';
import { theme } from '@/styles/theme';
import React, { FC, useState } from 'react';
import styled from 'styled-components';

/**
 * 다이어리 작성 영역 컴포넌트
 */
const WriteBox: FC = () => {
  const { Alert, Confirm } = useModal();
  const [text, setText] = useState('');
  const [length, setLength] = useState(0);
  const maxLength = 5000;

  /**
   * 바이트 수 계산 및 반환 함수
   * @param str: 문자열
   */
  const getByteSize = (str: string) => {
    return new Blob([str]).size;
  };

  /**
   * textarea 텍스트 변경 이벤트 함수
   */
  const handleChangeText = (e: any) => {
    const inputText = e.target.value;
    const byteSize = getByteSize(inputText);

    if (byteSize <= maxLength) {
      setText(inputText);
      setLength(byteSize);
    }
  };

  /**
   * 작성 완료 버튼 클릭 이벤트 함수
   */
  const handleWrite = async () => {
    if (!(await Confirm('일기 작성', '작성을 완료하시겠습니까?'))) return;
    // TODO: api 호출
    await Alert('일기 작성 완료', '작성이 완료되었습니다.');
  };

  return (
    <Container>
      <TextArea placeholder="내용을 입력해 주세요." maxLength={maxLength} value={text} onChange={handleChangeText} />
      <LengthWrapper>
        <CurrentLength>{length}</CurrentLength>
        <span>/</span>
        <MaxLength>{maxLength}</MaxLength>
      </LengthWrapper>
      <ButtonGroup>
        <Button text="작성 완료" theme={ButtonTheme.ORANGE} width="115px" onClick={handleWrite} />
      </ButtonGroup>
    </Container>
  );
};

export default WriteBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  resize: none;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 557px;
  height: 616px;
  padding: 13px 20px;
  border: 1px solid #cdd5e2;
  font-size: 20px;
`;

const LengthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  color: #606061;
  padding-top: 14px;
  gap: 5px;
`;

const CurrentLength = styled.span`
  color: ${theme.colors.orange};
`;

const MaxLength = styled.span``;

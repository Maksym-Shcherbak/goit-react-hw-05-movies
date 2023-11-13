import { useEffect, useState } from 'react';
import {
  InputCircle,
  LabelText,
  StyledInput,
  StyledLabel,
  StyledForm,
} from './TrendButtons.styled';

const TrendTime = {
  DAY: 'day',
  WEEK: 'week',
};

export const ChangeTrendTime = ({ onGetTrendTime }) => {
  const [timeWindow, setTimeWindow] = useState(TrendTime.DAY);

  const onChangeTrend = e => {
    console.log(e.target.value);
    setTimeWindow(e.target.value);
  };

  useEffect(() => {
    onGetTrendTime(timeWindow);
  }, [onGetTrendTime, timeWindow]);

  return (
    <>
      <StyledForm>
        <StyledLabel>
          <StyledInput
            type="radio"
            checked={timeWindow === TrendTime.DAY}
            name="trend"
            value={TrendTime.DAY}
            onChange={onChangeTrend}
          />
          <InputCircle></InputCircle>
          <LabelText>Day</LabelText>
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            type="radio"
            name="trend"
            checked={timeWindow === TrendTime.WEEK}
            value={TrendTime.WEEK}
            onChange={onChangeTrend}
          />
          <InputCircle></InputCircle>
          <LabelText>Week</LabelText>
        </StyledLabel>
      </StyledForm>
    </>
  );
};

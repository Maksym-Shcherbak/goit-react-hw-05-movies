import { Button } from 'components/Button/Button';

export const ChangeTrendTime = ({
  firstBtnText,
  secondBtnText,
  day,
  week,
  onChangeTrend,
  disabled,
}) => {
  return (
    <>
      <div>
        <Button
          onButtonClick={onChangeTrend}
          children={firstBtnText}
          timeWindow={day}
        ></Button>
        <Button
          onButtonClick={onChangeTrend}
          children={secondBtnText}
          timeWindow={week}
        ></Button>
      </div>
    </>
  );
};

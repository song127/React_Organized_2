import React from "react";

import styled from "@emotion/styled";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const YEARS = new Array(201).fill(1900).map((value, index) => value + index);

const Center = styled.div`
  text-align: center;
  font:
    16px "Roboto",
    sans-serif;
`;

const DateText = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  padding: 50px 20px;
  margin: 30px 0;
  overflow: hidden;
  width: 100%;
`;

const Wheel = styled.div`
  position: relative;
  height: 50px;
  margin: 0;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 0;
    width: 80px;
    height: 50px;
    background-color: white;
    opacity: 0.8;
    pointer-events: none;
    z-index: 1;
  }

  &:before {
    top: -51px;
  }

  &:after {
    bottom: -51px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    user-select: none;
  }
`;

const ResetButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  border: none;
  display: none;
  outline: none;
  color: white;
  background-color: #2466fb;
  box-shadow: 0 1px 10px -2px #2466fb;
  font-weight: 300;

  &:active {
    transform: scale(0.95);
  }
`;

interface CustomWheelProps {
  type: "day" | "month" | "year";
  data: (string | number)[];
  selected: number;
  onDateChange: (type: "day" | "month" | "year", value: number) => void;
}

interface CustomWheelState {
  position: number;
}

class CustomWheel extends React.Component<CustomWheelProps, CustomWheelState> {
  private offset: number = 0;
  private dragging: boolean = false;
  private previousY: number = 0;

  constructor(props: CustomWheelProps) {
    super(props);
    this.state = { position: props.selected ? -(props.selected - 1) * 50 : 0 };
  }

  componentDidUpdate(prevProps: CustomWheelProps) {
    const selectedPosition = -(this.props.selected - 1) * 50;

    if (!this.dragging && this.state.position !== selectedPosition) {
      this.setState({ position: selectedPosition });
    }
  }

  onMouseDown = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    this.previousY = "touches" in event ? event.touches[0].clientY : event.clientY;
    this.dragging = true;

    document.addEventListener("mousemove", this.onMouseMove as any);
    document.addEventListener("mouseup", this.onMouseUp as any);
    document.addEventListener("touchmove", this.onMouseMove as any);
    document.addEventListener("touchend", this.onMouseUp as any);
  };

  onMouseMove = (event: MouseEvent | TouchEvent) => {
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;

    this.offset = clientY - this.previousY;

    const maxPosition = -this.props.data.length * 50;
    const position = this.state.position + this.offset;

    this.setState({
      position: Math.max(maxPosition, Math.min(50, position)),
    });

    this.previousY = clientY;
  };

  onMouseUp = () => {
    const maxPosition = -(this.props.data.length - 1) * 50;
    const roundedPosition = Math.round((this.state.position + this.offset * 5) / 50) * 50;
    const finalPosition = Math.max(maxPosition, Math.min(0, roundedPosition));

    this.dragging = false;
    this.setState({ position: finalPosition });

    document.removeEventListener("mousemove", this.onMouseMove as any);
    document.removeEventListener("mouseup", this.onMouseUp as any);
    document.removeEventListener("touchmove", this.onMouseMove as any);
    document.removeEventListener("touchend", this.onMouseUp as any);

    this.props.onDateChange(this.props.type, -finalPosition / 50);
  };

  render() {
    const inlineStyle = {
      willChange: "transform",
      transition: `transform ${Math.abs(this.offset) / 100 + 0.1}s`,
      transform: `translateY(${this.state.position}px)`,
    };

    return (
      <Wheel
        className="dragdealer year"
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onMouseDown}>
        <ul className="handle" style={inlineStyle}>
          {this.props.data.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Wheel>
    );
  }
}

interface DatePickerProps {
  date: Date;
  onDateChange: (newDate: Date) => void;
}

class DatePicker extends React.Component<DatePickerProps> {
  dateChanged = (type: "day" | "month" | "year", changedData: number) => {
    let newDate: Date;

    if (type === "day") {
      newDate = new Date(
        this.props.date.getFullYear(),
        this.props.date.getMonth(),
        changedData + 1,
      );
    } else if (type === "month") {
      const maxDayInSelectedMonth = new Date(
        this.props.date.getFullYear(),
        changedData + 1,
        0,
      ).getDate();
      const day = Math.min(this.props.date.getDate(), maxDayInSelectedMonth);

      newDate = new Date(this.props.date.getFullYear(), changedData, day);
    } else if (type === "year") {
      const maxDayInSelectedMonth = new Date(
        1900 + changedData,
        this.props.date.getMonth() + 1,
        0,
      ).getDate();
      const day = Math.min(this.props.date.getDate(), maxDayInSelectedMonth);

      newDate = new Date(1900 + changedData, this.props.date.getMonth(), day);
    } else {
      throw new Error("Invalid type");
    }

    this.props.onDateChange(newDate);
  };

  render() {
    const days = new Array(
      new Date(this.props.date.getFullYear(), this.props.date.getMonth() + 1, 0).getDate(),
    )
      .fill(1)
      .map((value, index) => value + index);

    return (
      <DatePickerWrapper>
        <CustomWheel
          type="day"
          data={days}
          selected={this.props.date.getDate()}
          onDateChange={this.dateChanged}
        />
        <CustomWheel
          type="month"
          data={MONTHS}
          selected={this.props.date.getMonth() + 1}
          onDateChange={this.dateChanged}
        />
        <CustomWheel
          type="year"
          data={YEARS}
          selected={this.props.date.getFullYear() - 1899}
          onDateChange={this.dateChanged}
        />
      </DatePickerWrapper>
    );
  }
}

interface TextDatePickerExamState {
  date: Date;
}

class TextDatePickerExam extends React.Component<any, TextDatePickerExamState> {
  state: TextDatePickerExamState = { date: new Date() };

  resetDate = () => {
    this.setState({ date: new Date() });
  };

  dateChanged = (newDate: Date) => {
    this.setState({ date: newDate });
  };

  render() {
    return (
      <Center>
        <DateText>
          {this.state.date.getDate()} {MONTHS[this.state.date.getMonth()]}{" "}
          {this.state.date.getFullYear()}
        </DateText>
        <DatePicker date={this.state.date} onDateChange={this.dateChanged} />
        <ResetButton onClick={this.resetDate}>Reset Date</ResetButton>
      </Center>
    );
  }
}

export default TextDatePickerExam;

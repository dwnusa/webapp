import React from "react";
import moment from "moment";
import _ from "lodash";
import styled from "styled-components";

const CalenderBar: React.FC = () => {
  return (
    <Wrapper>
      {_.range(6, -1).map((e) => {
        return (
          <span key={e} className={!e ? "today" : ""}>
            <div>{moment().subtract(e, "days").format("DD")}</div>
            {!e && <div className="text">today</div>}
          </span>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  span {
    font-size: 18px;
    padding: 10px 15px;
  }
  .today {
    > div {
      color: #4370ff;
    }
    .text {
      font-size: 11px;
      margin-left: -3px;
    }
  }
`;

export default CalenderBar;

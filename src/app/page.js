"use client";

import { useState } from "react";

const NumberRecordForm = ({
  number,
  setNumber,
  resetNumber,
  saveNumbers,
  deleteAllNumbers,
}) => {
  return (
    <>
      <div className="flex items-center gap-x-2">
        <span>num : {number}</span>
        <button
          className="btn btn-primary"
          onClick={() => setNumber(number + 1)}
        >
          증가
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            number == 0 ? number : setNumber(number - 1);
          }}
        >
          감소
        </button>
        <button className="btn btn-accent" onClick={resetNumber}>
          초기화
        </button>
        <button className="btn" onClick={saveNumbers}>
          기록
        </button>
        <button className="btn btn-error" onClick={deleteAllNumbers}>
          기록 전체 삭제
        </button>
      </div>
    </>
  );
};

const NumberRecordListItem = ({
  number,
  index,
  removeNumber,
  modifyNumber,
}) => {
  const [inputNumberValue, setInputNumberValue] = useState(number);
  const [editModeStatus, setEditModeStatus] = useState(false);

  return (
    <>
      <li key={index} className="flex items-center gap-x-3">
        <span>
          {index + 1}번 : {number}
        </span>
        <button
          className="btn btn-outline btn-primary"
          onClick={() => removeNumber(index)}
        >
          삭제
        </button>

        {editModeStatus ? (
          <>
            <input
              className="w-[200px]"
              type="number"
              min="0"
              placeholder="수정할 숫자를 입력해주세요."
              value={inputNumberValue}
              onChange={(e) => setInputNumberValue(e.target.value)}
            />
            <button
              className="btn btn-outline btn-secondary"
              onClick={() => {
                modifyNumber(index, inputNumberValue) == false
                  ? setEditModeStatus(true)
                  : setEditModeStatus(false);
              }}
            >
              수정완료
            </button>
            <button
              className="btn btn-outline btn-secondary"
              onClick={() => {
                setInputNumberValue(number), setEditModeStatus(false);
              }}
            >
              수정취소
            </button>
          </>
        ) : (
          <button
            className="btn btn-outline btn-secondary"
            onClick={() => setEditModeStatus(true)}
          >
            수정
          </button>
        )}
      </li>
    </>
  );
};

const NumberRecordList = ({ numberRecord, removeNumber, modifyNumber }) => {
  return (
    <>
      <div>
        {numberRecord.length == 0 ? (
          <h1>기록없음</h1>
        ) : (
          <>
            <h1>기록된 숫자</h1>
            <nav>
              <ul>
                {numberRecord.map((number, index) => (
                  <NumberRecordListItem
                    key={index}
                    number={number}
                    index={index}
                    removeNumber={removeNumber}
                    modifyNumber={modifyNumber}
                  />
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default function Home() {
  const [number, setNumber] = useState(0);
  const [numberRecord, setNumberRecord] = useState([10, 20, 30]);

  const resetNumber = () => {
    setNumber(0);
  };

  const deleteAllNumbers = () => {
    setNumberRecord([]);
  };

  const saveNumbers = () => {
    setNumber(0);
    setNumberRecord([...numberRecord, number]);
  };

  const removeNumber = (index) => {
    const newNumbersRecord = numberRecord.filter(
      (_, _index) => _index != index
    );
    setNumberRecord(newNumbersRecord);
  };

  const modifyNumber = (index, newNumber) => {
    if (newNumber.trim() == "") {
      alert("숫자를 입력해주세요.");
      return false;
    }

    const newNumbers = numberRecord.map((_number, _index) =>
      _index != index ? _number : newNumber
    );

    setNumberRecord(newNumbers);
  };

  return (
    <>
      <NumberRecordForm
        number={number}
        setNumber={setNumber}
        resetNumber={resetNumber}
        saveNumbers={saveNumbers}
        deleteAllNumbers={deleteAllNumbers}
      />

      <NumberRecordList
        numberRecord={numberRecord}
        removeNumber={removeNumber}
        modifyNumber={modifyNumber}
      />
    </>
  );
}

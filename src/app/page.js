"use client";

import { useState } from "react";

const NumberRecordForm = ({ number, setNumber, resetNumber, saveNumbers }) => {
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
      </div>
    </>
  );
};

const NumberRecordListItem = ({ number, index, removeNumber }) => {
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
      </li>
    </>
  );
};

const NumberRecordList = ({ numberRecord, removeNumber }) => {
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
  const [numberRecord, setNumberRecord] = useState([]);

  const resetNumber = () => {
    setNumber(0);
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

  return (
    <>
      <NumberRecordForm
        number={number}
        setNumber={setNumber}
        resetNumber={resetNumber}
        saveNumbers={saveNumbers}
      />

      <NumberRecordList
        numberRecord={numberRecord}
        removeNumber={removeNumber}
      />
    </>
  );
}

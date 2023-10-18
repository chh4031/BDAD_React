const Control = ({func1, func2}) => {
  return (
    <>
      {/* number up */}
      <button
        onClick={() => {
          func1("increase");
        }}
      >
        +
      </button>
      {/* number down */}
      <button
        onClick={() => {
          func1("decrease");
        }}
      >
        -
      </button>
      {/* number reset */}
      <button
        onClick={() => {
          func1("init");
          func2([]);
        }}
      >
        reset
      </button>
    </>
  );
};
export default Control;

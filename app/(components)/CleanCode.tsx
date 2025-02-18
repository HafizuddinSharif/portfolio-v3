import ExampleCode from "./ExampleCode";

const CleanCode = () => {
  return (
    <div className="relative w-1/2 m-auto min-w-fit border border-lightGrey rounded-lg shadow-white shadow-[0_0_35px]" style={{ bottom: 50, left: 50 }}>
      <div className="rounded-lg">
        <div className="px-2 py-1 text-[12px] rounded-t-lg border-b border-b-lightGrey bg-black">
          <div></div>
          <div>clean.ts</div>
        </div>
        <div>
          <ExampleCode isClean={true} />
        </div>
      </div>
    </div>
  );
};

export default CleanCode;

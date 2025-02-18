import ExampleCode from "./ExampleCode";

const MessyCode = () => {
  return (
    <div className="relative w-3/4 m-auto min-w-fit border border-lightGrey rounded-lg" style={{ top: 50, right: 50 }}>
      <div className="rounded-lg">
        <div className="px-2 py-1 text-[12px] rounded-t-lg border-b border-b-lightGrey bg-black">
          <div></div>
          <div>messy.ts</div>
        </div>
        <div>
          <ExampleCode isClean={false} />
        </div>
      </div>
    </div>
  );
};

export default MessyCode;

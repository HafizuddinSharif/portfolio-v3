const ReasonOneDiagram = () => {
  return (
    <div className="relative w-1/2 m-auto min-w-fit my-5">
      <div className="flex flex-row">
        <svg className="text-lightGrey" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#2E8309" />
              <stop offset="100%" stopColor="#772929" />
            </linearGradient>
          </defs>
          <path d="M50 110 L50 30 L100 30" stroke="url(#gradient)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)"></path>
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="0">
              <polygon points="0 0, 10 3.5, 0 7" fill="#772929" />
            </marker>
          </defs>
        </svg>
        <div>
          <div className="border-2 rounded-lg p-3 w-40 text-center border-[#772929]">
            <p>requirement</p>
          </div>
        </div>
        <svg className="text-lightGrey" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 L50 30 L50 100" stroke="url(#gradient2)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />
          <defs>
            <marker id="arrowhead2" markerWidth="7" markerHeight="10" refX="3.5" refY="9" orient="0">
              <polygon points="0 0, 7 0, 3.5 10" fill="#635014" />
            </marker>
          </defs>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#772929" />
              <stop offset="100%" stopColor="#635014" />
            </linearGradient>
          </defs>
        </svg>
        <div></div>
      </div>

      <div>
        <div className="flex text-center justify-between">
          <div className="border-2 border-[#2C860A] p-3 w-40 rounded-sm">
            <p>implement</p>
          </div>
          <div className="border-2 border-[#635014] p-3 w-40 rounded-sm">
            <p>design</p>
          </div>
        </div>
        <div>
          <svg className="m-auto text-lightGrey" width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 0 L200 50 L4 50 L4 0" stroke="url(#gradient1)" strokeWidth="2" fill="none" markerEnd="url(#arrowhead3)" />
            <defs>
              <marker id="arrowhead3" markerWidth="7" markerHeight="10" refX="3.5" refY="1" orient="0">
                <polygon points="3.5 0, 7 10, 0 10" fill="#2E8309" />
              </marker>
            </defs>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2E8309" />
                <stop offset="100%" stopColor="#635014" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ReasonOneDiagram;

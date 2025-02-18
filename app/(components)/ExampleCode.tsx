import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/esm/styles/hljs";
const ExampleCode = ({ isClean }: { isClean: boolean }) => {
  const codeString = `// Sum of all numbers in an array
  function sumValidNumbers(numbers: (number | string)[]): number {
    let total = 0;

    numbers.forEach(item => {
        if (typeof item === 'number') {
            total += item;
        } else {
            console.warn(\`Invalid item skipped: \${item}\`);
        }
    });

    console.log(\`Total sum: \${total}\`);
    return total;
}

const sampleInput = [1, 2, 'three', 4, 5];
console.log(sumValidNumbers(sampleInput));`;

  const messyCode = `// What does this function do?
function s(a: any) {
  let r = 0;
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === 'number') {
      r += a[i];
    } else {
      console.log('Invalid item:', a[i]);
    }
  }
  console.log('Sum:', r);
  return r;
}

console.log(s([1, 2, 'three', 4, 5]));
  `;
  return (
    <SyntaxHighlighter
      language="typescript"
      style={tomorrowNightBright}
      showLineNumbers
      customStyle={{ fontSize: 12, borderBottomLeftRadius: "0.5rem", borderBottomRightRadius: "0.5rem", backgroundColor: "#0A0A0A", padding: "1rem" }}
    >
      {isClean ? codeString : messyCode}
    </SyntaxHighlighter>
  );
};

export default ExampleCode;

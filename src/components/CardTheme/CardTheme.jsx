import Radio from "../Inputs/Radio/Radio";

export default function CardTheme() {
  return (
    <div className="mt-5 w-full">
      <span className="text-xs text-gray-600 font-medium mb-3 inline-block">
        CARD THEME
      </span>

      <br />
      <div className="flex w-full justify-start">
        <Radio icon="ri-sun-fill" id="light" checkedInp/>
        <Radio icon="ri-moon-fill" id="dark" />
      </div>
    </div>
  );
}

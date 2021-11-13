import { useRecoilValue } from "recoil";
import { charCountState } from "../atoms/text/selectors/charCount";

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCount;

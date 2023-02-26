import {FC} from "react";

const Mark: FC = ({children}) => {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {children}
      </mark>{" "}
    </>
  );
}

export default Mark

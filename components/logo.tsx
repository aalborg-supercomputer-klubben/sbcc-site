import {useTheme} from "next-themes";

export const Logo = () => {
    const {resolvedTheme} = useTheme();

    return (
        <span>
          <img
              src={resolvedTheme == "light" ? "/img/logo.svg" : "/img/dark-logo.svg"}
              alt="N"
              className="w-48"
          />
        </span>)
}
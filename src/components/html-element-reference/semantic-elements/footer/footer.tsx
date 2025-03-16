import { CustomNavLink } from "../../interactive-elements/links-navigation/navigation-link";
import { HeadingTag } from "../../text-content/heading-tag";

import { DateTime } from "../../../../utils/date-time-utils/date-time";

export const Footer = () => (
  <footer className="fixed bottom-0 left-0 w-full  bg-background-300 p-3 ">
    <HeadingTag className="font-mono flex justify-center ">

      < img src="https://img.icons8.com/?size=100&id=106562&format=png&color=000000"
        className="object-cover h-5 w-5"
      />

      <CustomNavLink
        text="Hello-Ship-Code"
        link="https://github.com/Hello-Ship-Code"
        className="hover:text-secondary-400"
        newTab={true}
      />

      &copy; {< DateTime text="year" />}

    </HeadingTag>
  </footer >
);
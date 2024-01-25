import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Text } from "components";

const Header = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <header className={props.className}>
        <Text
          className="mb-[42px] sm:ml-[0] ml-[95px] sm:mt-0 mt-[37px] sm:p-5 md:text-3xl sm:text-[28px] text-[32px] text-light_green-900 tracking-[-0.32px]"
          size="txtNewsreaderMedium32"
        >
          World Peas
        </Text>
        <Text
          className="common-pointer mb-11 sm:ml-[0] ml-[497px] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
          size="txtInterRegular16"
          onClick={props?.onClick1}
        >
          Shop
        </Text>
        <Text
          className="common-pointer ml-12 sm:ml-[0] sm:mt-0 my-[45px] text-base text-black-900 text-center"
          size="txtInterRegular16"
          onClick={props?.onClick}
        >
          Newstand
        </Text>
        <Text
          className="common-pointer ml-12 sm:ml-[0] sm:mt-0 my-[45px] text-base text-black-900 text-center"
          size="txtInterRegular16"
          onClick={() => googleSignIn()}
        >
          Who we are
        </Text>
        <Text
          className="mb-11 ml-12 sm:ml-[0] sm:mt-0 mt-[47px] text-base text-black-900 text-center"
          size="txtInterRegular16"
        >
          My profile
        </Text>
        <Button
          className="cursor-pointer font-inter font-semibold sm:m-0 m-[70px] min-w-[126px] rounded text-base text-center"
          color="light_green_900"
          size="sm"
          variant="fill"
        >
          Basket (3)
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

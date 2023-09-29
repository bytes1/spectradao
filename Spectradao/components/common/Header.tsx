import { useRouter } from "next/router";
import { useContext } from "react";
import { setTheme } from "../../state/actions/global";
import { GlobalContext } from "../../state/contexts/GlobalContext";

const Header = () => {
  const {
    state: { darkMode, walletAddress },
    dispatch,
  } = useContext(GlobalContext);

  const router = useRouter();

  return (
    <div className="fixed top-0 flex justify-between w-full gap-2 px-40 py-8 mt-10">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90 480 l0 -390 1060 0 1060 0 0 390 0 390 -1060 0 -1060 0 0 -390z m248 115 c12 -14 22 -33 22 -41 0 -22 -31 -17 -37 6 -9 35 -86 44 -110 13 -20 -26 2 -50 60 -67 63 -18 87 -41 87 -84 0 -41 -31 -62 -93 -62 -38 0 -53 5 -72 25 -26 25 -33 55 -14 55 6 0 20 -11 31 -25 35 -45 126 -28 116 22 -2 12 -25 25 -68 40 -66 23 -90 43 -90 74 0 32 13 51 44 65 43 20 96 10 124 -21z m794 25 c48 -14 114 -90 77 -90 -6 0 -27 14 -46 30 -60 53 -140 36 -163 -35 -34 -103 86 -181 162 -105 45 45 76 40 42 -8 -23 -33 -67 -52 -119 -52 -134 0 -173 195 -51 251 48 22 50 22 98 9z m-538 -11 c50 -23 58 -112 13 -144 -12 -8 -43 -15 -69 -15 l-48 0 0 -45 c0 -38 -3 -45 -20 -45 -19 0 -20 7 -20 130 l0 130 60 0 c32 0 70 -5 84 -11z m286 -4 c0 -12 -14 -15 -65 -15 l-65 0 0 -40 0 -40 60 0 c47 0 60 -3 60 -15 0 -12 -13 -15 -60 -15 l-60 0 0 -45 0 -45 65 0 c51 0 65 -3 65 -15 0 -12 -16 -15 -80 -15 l-80 0 0 130 0 130 80 0 c64 0 80 -3 80 -15z m854 -6 c20 -16 26 -29 26 -60 0 -38 -26 -79 -50 -79 -6 0 3 -20 20 -44 35 -52 36 -56 13 -56 -10 0 -30 20 -46 45 -23 37 -34 45 -58 45 -28 0 -29 -2 -29 -45 0 -38 -3 -45 -20 -45 -19 0 -20 7 -20 130 l0 130 69 0 c54 0 74 -4 95 -21z m266 -67 c19 -48 43 -106 52 -129 17 -42 17 -43 -1 -43 -12 0 -23 11 -30 30 -10 29 -12 30 -75 30 -62 0 -64 -1 -75 -30 -5 -16 -17 -30 -25 -30 -22 0 -21 5 27 121 24 57 46 112 50 122 3 9 14 17 24 17 13 0 27 -23 53 -88z"
            fill="white"
          />
        </svg>

        <p
          className={`text-base text-black select-none`}
          onClick={() => dispatch(setTheme(!darkMode))}
        >
          SPECTRADAO
        </p>
      </div>
      {walletAddress.length > 0 && (
        <div className="flex items-center gap-2">
          <div className="text-white">
            {walletAddress.toString().slice(0, 7) +
              "..." +
              walletAddress.toString().slice(-7)}
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10.75L9.25 13L13 7.75M19 10C19 11.268 18.37 12.39 17.407 13.068C17.5108 13.6608 17.4701 14.2698 17.2886 14.8436C17.107 15.4173 16.7899 15.9388 16.364 16.364C15.9388 16.7899 15.4173 17.107 14.8436 17.2886C14.2698 17.4701 13.6608 17.5108 13.068 17.407C12.7222 17.8995 12.2629 18.3014 11.7288 18.5787C11.1948 18.856 10.6017 19.0005 10 19C8.732 19 7.61 18.37 6.932 17.407C6.33923 17.5107 5.73021 17.47 5.15649 17.2885C4.58276 17.1069 4.06122 16.7898 3.636 16.364C3.21013 15.9388 2.89298 15.4173 2.71142 14.8436C2.52987 14.2698 2.48925 13.6608 2.593 13.068C2.10052 12.7222 1.69862 12.2629 1.42133 11.7288C1.14403 11.1948 0.999511 10.6017 1 10C1 8.732 1.63 7.61 2.593 6.932C2.48925 6.33923 2.52987 5.73019 2.71142 5.15645C2.89298 4.58271 3.21013 4.06117 3.636 3.636C4.06122 3.21019 4.58276 2.8931 5.15649 2.71154C5.73021 2.52999 6.33923 2.48933 6.932 2.593C7.27785 2.10058 7.73722 1.69873 8.27126 1.42144C8.80529 1.14415 9.39827 0.999595 10 1C11.268 1 12.39 1.63 13.068 2.593C13.6608 2.48933 14.2698 2.52999 14.8435 2.71154C15.4172 2.8931 15.9388 3.21019 16.364 3.636C16.7898 4.06122 17.1069 4.58276 17.2885 5.15649C17.47 5.73021 17.5107 6.33923 17.407 6.932C17.8995 7.27779 18.3014 7.73715 18.5787 8.2712C18.856 8.80525 19.0005 9.39825 19 10V10Z"
              stroke="#00D085"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Header;
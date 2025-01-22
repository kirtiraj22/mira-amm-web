const USDCIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 33 33"
      fill="none"
    >
      <mask
        id="a"
        width={32}
        height={32}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path fill="#fff" d="M.5.816h32v32H.5v-32Z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#1A4CFF"
          fillRule="evenodd"
          d="M16.5.816c8.837 0 16 7.163 16 16 0 8.836-7.163 16-16 16s-16-7.164-16-16c0-8.837 7.163-16 16-16Z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M13.3 28.303c0 .38-.288.597-.644.482C7.928 27.223 4.5 22.633 4.5 17.215c0-5.416 3.428-10.007 8.156-11.568.356-.115.644.101.644.482v.94c0 .254-.19.552-.423.635-3.74 1.422-6.42 5.143-6.42 9.505 0 4.363 2.68 8.084 6.42 9.506.233.09.423.38.423.635v.953Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M17.163 24.314a.5.5 0 0 1-.494.502h-.983a.5.5 0 0 1-.494-.502v-1.58c-2.15-.294-3.2-1.517-3.485-3.178a.463.463 0 0 1 .457-.54h1.125c.234 0 .432.17.482.408.21.99.772 1.75 2.496 1.75 1.273 0 2.175-.722 2.175-1.8s-.531-1.486-2.398-1.8c-2.755-.376-4.059-1.222-4.059-3.416 0-1.693 1.26-3.01 3.213-3.292V9.318a.5.5 0 0 1 .494-.502h.983a.5.5 0 0 1 .494.502v1.592c1.588.29 2.595 1.204 2.923 2.72a.462.462 0 0 1-.451.559h-1.038a.502.502 0 0 1-.476-.37c-.278-.965-.958-1.379-2.138-1.379-1.304 0-1.978.64-1.978 1.536 0 .947.384 1.423 2.386 1.718 2.706.376 4.103 1.16 4.103 3.499 0 1.774-1.298 3.21-3.33 3.541v1.58h-.007Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M20.344 28.785c-.356.115-.644-.101-.644-.482v-.94c0-.28.166-.54.423-.636 3.74-1.423 6.42-5.146 6.42-9.51s-2.68-8.087-6.42-9.51c-.233-.089-.423-.38-.423-.635v-.94c0-.381.288-.603.644-.483 4.728 1.563 8.156 6.156 8.156 11.575-.006 5.406-3.428 9.992-8.156 11.561Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default USDCIcon;

export const Main = (props) => {
  return (
    <main
      style={props.style}
      className={`
        grid-bg absolute flex justify-center items-center h-full w-full ${props.className}
      `}
    >
      {props.children}
    </main>
  );
};

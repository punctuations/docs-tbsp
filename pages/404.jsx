import { Main } from "../components/Main";

export default function Error() {
  return (
    <>
      <Main className="h-full">
        <header className="flex flex-col justify-center items-center w-full">
          <div className="title-container">
            <h1 className="font-cal text-4xl ">☕️ Oh Snap!</h1>
          </div>
          <p className="text-gray-400">
            You ran into a 404 error, meaning that the page you requested either
            doesn't exist — or has moved.
          </p>
          <a className="font-semibold no-underline" href="/">Go back home &rarr;</a>
        </header>
      </Main>
    </>
  );
}

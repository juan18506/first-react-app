const newMessage = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getResult = (a, b) => {
  return a + b;
}

// Promise object => render error
const getResultAsync = async (a, b) => {
  return a + b;
}

export const FirstApp = () => {
  return (
    <>
      <h1>My First App</h1>
      <h2>A Subtitle</h2>
      <p>{ newMessage }</p>
      <p>{ getResult(7, 2) }</p>
      {/* <p>{ getResultAsync(7, 2) }</p> */}
    </>
  )
}

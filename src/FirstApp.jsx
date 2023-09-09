import PropTypes from 'prop-types';

const newMessage = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getResult = (a, b) => {
  return a + b;
}

// Promise object => render error
// const getResultAsync = async (a, b) => {
//   return a + b;
// }

export const FirstApp = ({ title, subTitle, version }) => {
  // console.log(props);

  return (
    <>
      <h1>{ title }</h1>
      <h2>{ subTitle }</h2>
      <p>{ `Version: ${version}` }</p>
      <p>{ newMessage }</p>
      <p>{ getResult(7, 2) }</p>
      {/* <p>{ getResultAsync(7, 2) }</p> */}
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  version: PropTypes.number
}

FirstApp.defaultProps = {
  subTitle: 'A Subtitle',
  version: 1.0
}
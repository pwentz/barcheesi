const K_SIZE = 40;

const venueStyles = {
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  border: '5px solid #f44336',
  borderRadius: K_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
};

const venueStylesHover = {
  ...venueStyles,
  border: '5px solid #3f51b5',
  color: '#f44336'
};

export {venueStyles, venueStylesHover, K_SIZE};

import PropTypes from "prop-types";

function DrumPad({ id, triggerKey, onClick, src }) {
  return (
    <button
      id={id}
      className="drum-pad border-2 p-4 rounded-xl bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition duration-200"
      onClick={onClick}
    >
      {triggerKey}
      <audio id={triggerKey} className="clip" src={src} />
    </button>
  );
}

DrumPad.propTypes = {
  id: PropTypes.string.isRequired,
  triggerKey: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default DrumPad;
